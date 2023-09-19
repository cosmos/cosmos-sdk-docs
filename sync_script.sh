#!/bin/bash

set -e -o pipefail

# Set the remote repository URL to clone from
REMOTE_REPO_URL="https://github.com/cosmos/cosmos-sdk.git"

# Store the current working directory in WORK_DIR
WORK_DIR=$(pwd)

# Remove any existing 'cosmos-sdk' directory and clone the remote repository
rm -rf ./cosmos-sdk
git clone "$REMOTE_REPO_URL" cosmos-sdk

# Read the versions from a JSON file and remove the 'v' prefix
VERSIONS=($(jq -r '.[]' versions.json))

# VERSIONS+=("main")

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
  cd cosmos-sdk

  # Fetch the branch from the remote repository and switch to it
  git fetch origin "$branch"
  git checkout "$branch"

  # Change to the 'docs' directory within the 'cosmos-sdk' repository
  cd docs

  # Check if the branch exists in the remote repository
  if ! git show-ref --verify "refs/remotes/origin/$branch" &>/dev/null; then
    echo "Branch $branch does not exist in the remote repository."
    continue
  else
    echo "Branch $branch exists, continuing..."
  fi

  # Find all Markdown files in the 'docs' directory
  remote_md_files=$(find "docs" -name "*.md")

  # Change back to the original working directory
  cd "$WORK_DIR"

  if [ "$version" == "main" ]; then
      local_md_files=$(find "docs" -name "*.md")  # For 'main', the version directory is empty
  else
    # Find all Markdown files in the local versioned_docs directory
    local_md_files=$(find "versioned_docs/$version_directory" -name "*.md")
  fi

  if [ "$local_md_files" ]; then
    echo "There are Markdown files in the directory."
    # Iterate over each local Markdown file
    for local_file in $local_md_files; do
      # Construct the relative path of the local file
     if [ "$version" != "main" ]; then
       local_relative_path="${local_file#versioned_docs/$version_directory/}"
     else
       local_relative_path="${local_file#docs/}"
     fi
      # Iterate over each remote Markdown file
      for remote_file in $remote_md_files; do
        # Construct the relative path of the remote file
        remote_relative_path="${remote_file#docs/}"

        # Compare the relative paths to find matching files
        if [ "$local_relative_path" = "$remote_relative_path" ]; then
          # Check for differences between the local and remote files
          if diff "$local_file" "./cosmos-sdk/docs/$remote_file" &>/dev/null; then
            echo "No differences found for $local_file and $remote_file"
          else
            # Replace the local file with the remote file if differences are found
            echo "Differences found for $local_file and $remote_file. Replacing $local_file with remote file..."
            cp "./cosmos-sdk/docs/$remote_file" "$local_file"
            echo "Local file $local_file replaced with ./cosmos-sdk/docs/$remote_file"
          fi
        fi
      done
    done
  else
    # The file does not exist, so copy the remote file
    cp "./cosmos-sdk/docs/$remote_file" "$local_file"
    echo "File $local_file created and replaced with ./cosmos-sdk/docs/$remote_file"
  fi
done

rm -rf ./cosmos-sdk
