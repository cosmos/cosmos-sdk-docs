#!/bin/bash

set -e -o pipefail

# Set the remote repository URL to clone from
REMOTE_REPO_URL="https://github.com/cosmos/cosmos-sdk.git"

# Store the current working directory in WORK_DIR
WORK_DIR=$(pwd)

# Define the folders to protect from deletion
PROTECTED_PATH=()

# Remove any existing 'cosmos-sdk' directory and clone the remote repository
rm -rf ./cosmos-sdk
git clone "$REMOTE_REPO_URL" cosmos-sdk

# Read the versions from a JSON file and remove the 'v' prefix
VERSIONS=($(jq -r '.[]' versions.json))

VERSIONS+=("main")

# Check if there are protected fils
if [ -e "$WORK_DIR/docs/$PROTECTED_PATH" ]; then
  backup_dir="$WORK_DIR/docs_backup"
  mkdir -p "$backup_dir"
  cp -r "$WORK_DIR/docs/$PROTECTED_PATH" "$backup_dir/"
fi

# Iterate over each version
for version in "${VERSIONS[@]}"; do
  echo "$version"
  if [ "$version" == "main" ]; then
    branch="main"  # Set the branch to 'main'
    version_directory=""  # For 'main', the version directory is empty
  else
    version="${version#v}"  # Remove the 'v' prefix from the version number
    branch="release/v$version.x"  # Determine the branch name
    version_directory="version-$version"  # Create a directory name based on the version
  fi

  # Skip the '0.47' branch until docs backported
  if [ "$branch" = "release/v0.47.x" ]; then
    echo "Skipping branch $branch..."
    continue
  fi

  # Change to the 'cosmos-sdk' directory
  cd $WORK_DIR/cosmos-sdk

  # Fetch the branch from the remote repository and switch to it
  git fetch origin "$branch"
  git checkout "$branch"

  # Check if the branch exists in the remote repository
  if ! git show-ref --verify "refs/remotes/origin/$branch" &>/dev/null; then
    echo "Branch $branch does not exist in the remote repository."
    continue
  else
    echo "Branch $branch exists, continuing..."
  fi

  # Run the pre.sh script
  cd docs && sh ./pre.sh

  for folder in "build" "user" "learn"; do
    echo $branch
    if [ "$version" == "main" ]; then
      echo "$WORK_DIR/cosmos-sdk/docs/$folder"
      cp -r "$WORK_DIR/cosmos-sdk/docs/$folder" "$WORK_DIR/docs/"
    else
      cp -r "$WORK_DIR/cosmos-sdk/docs/docs/$folder" "$WORK_DIR/versioned_docs/$version_directory/"
    fi
  done

  if [ -e "$backup_dir/$PROTECTED_PATH" ]; then
    mkdir -p "$(dirname "$WORK_DIR/$PROTECTED_PATH")"
    cp -r "$backup_dir/$PROTECTED_PATH" "$WORK_DIR/$PROTECTED_PATH"
    rm -rf "$backup_dir"
  fi
done

# Leave the 'cosmos-sdk' directory after processing
cd "$WORK_DIR"

# Remove the 'cosmos-sdk' directory if needed
# rm -rf ./cosmos-sdk
