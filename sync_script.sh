#!/bin/bash

set -x -e -o pipefail

DELETE_SCRIPT="./delete.sh"

if [ ! -x "$DELETE_SCRIPT" ]; then
    echo "Error: Cannot find or execute $DELETE_SCRIPT"
fi

echo "deleting files to prepare for syncing"

$DELETE_SCRIPT --skip "versioned_docs/version-0.5"
if [ $? -ne 0 ]; then
    echo "error deleting files in 0.50"
    exit 1
fi

$DELETE_SCRIPT --skip "versioned_docs/version-0.53"
if [ $? -ne 0 ]; then
    echo "error deleting files in 0.53"
    exit 1
fi

$DELETE_SCRIPT --skip --skip-tutorials "docs"
if [ $? -ne 0 ]; then
    echo "error deleting files in /docs"
    exit 1
fi

echo "files deleted. ready to sync."

# Store the current working directory in WORK_DIR
WORK_DIR=$(pwd)

# Remove any existing 'cosmos-sdk' directory and clone the remote repository
rm -rf ./cosmos-sdk
git clone https://github.com/cosmos/cosmos-sdk.git cosmos-sdk

# Read the versions from a JSON file
VERSIONS=($(jq -r '.[]' versions.json))
VERSIONS+=("main")

# Iterate over each version
for version in "${VERSIONS[@]}"; do
  echo "$version"
  if [ "$version" == "main" ]; then
    branch="main"  # Set the branch to 'main'
    version_directory=""  # For 'main', the version directory is empty
  else
    # we have to handle a special case for v0.50 because docusaurus cannot handling trailing zeroes.
    # it trims trailing zeroes off.
    if [ "$version" = "0.5" ]; then
      branch="release/v0.50.x"  # Special case for version 0.5
      version_directory="version-$version"  # Create a directory name based on the version
    else
      branch="release/v$version.x"  # Determine the branch name
      version_directory="version-$version"  # Create a directory name based on the version
    fi
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

  # Run the pre.sh script
  cd docs && sh ./pre.sh

  # Copy the 'build', 'learn' and 'user' directories to the 'docs' directory
  if [ "$version" == "main" ]; then
    mkdir -p "$WORK_DIR/docs"
    cp -r "$WORK_DIR/cosmos-sdk/docs/docs/build" "$WORK_DIR/docs"
    cp -r "$WORK_DIR/cosmos-sdk/docs/docs/learn" "$WORK_DIR/docs"
    cp -r "$WORK_DIR/cosmos-sdk/docs/docs/user" "$WORK_DIR/docs"
  elif [ "$version" == "0.5" ] || [ "$version" == "0.47" ] || [ "$version" == "0.53" ]; then
    mkdir -p "$WORK_DIR/versioned_docs/$version_directory"
    cp -r "$WORK_DIR/cosmos-sdk/docs/docs/build" "$WORK_DIR/versioned_docs/$version_directory"
    cp -r "$WORK_DIR/cosmos-sdk/docs/docs/learn" "$WORK_DIR/versioned_docs/$version_directory"
    cp -r "$WORK_DIR/cosmos-sdk/docs/docs/user" "$WORK_DIR/versioned_docs/$version_directory"
    # add main tutorials on versioned_docs
    cp -r $WORK_DIR/docs/tutorials "$WORK_DIR/versioned_docs/$version_directory"
  fi

  git checkout -- .  # Discard changes to the repository
done

# Leave the 'cosmos-sdk' directory after processing
cd "$WORK_DIR"

# Remove the 'cosmos-sdk' directory
rm -rf ./cosmos-sdk