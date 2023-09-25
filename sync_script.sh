#!/bin/bash

set -e -o pipefail

# Set the remote repository URL to clone from
REMOTE_REPO_URL="https://github.com/cosmos/cosmos-sdk.git"

# Store the current working directory in WORK_DIR
WORK_DIR=$(pwd)

# Define the folders to exclude from copying
EXCLUDE_FOLDERS=("s")

# Remove any existing 'cosmos-sdk' directory and clone the remote repository
rm -rf ./cosmos-sdk
git clone "$REMOTE_REPO_URL" cosmos-sdk

# Read the versions from a JSON file and remove the 'v' prefix
VERSIONS=($(jq -r '.[]' versions.json))

VERSIONS+=("main")

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
  cd docs && sh ./pre.sh && cd ..

  # Exclude specified folders from copied documentation
  for folder in "${EXCLUDE_FOLDERS[@]}"; do
    if [ "$version" == "main" ]; then
      rm -rf "$WORK_DIR/docs/$folder"
    else
      rm -rf "$WORK_DIR/versioned_docs/$version_directory/$folder"
    fi
  done

  # Copy the entire 'docs' folder from the SDK repository to the local directory
  if [ "$version" == "main" ]; then
    cp -r "$WORK_DIR/cosmos-sdk/docs/docs" "$WORK_DIR/docs"
  else
    cp -r "$WORK_DIR/cosmos-sdk/docs/docs" "$WORK_DIR/versioned_docs/$version_directory/"
    sh $WORK_DIR/cosmos-sdk/docs/post.sh
  fi
done

# Leave the 'cosmos-sdk' directory after processing
cd "$WORK_DIR"

# Remove the 'cosmos-sdk' directory if needed
 rm -rf ./cosmos-sdk
