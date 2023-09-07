#!/bin/bash

# Set the remote repository URL to clone from
REMOTE_REPO_URL="https://github.com/cosmos/cosmos-sdk.git"

# Store the current working directory in WORK_DIR
WORK_DIR=$(pwd)

# Remove any existing 'cosmos-sdk' directory and clone the remote repository
rm -rf ./cosmos-sdk
git clone "$REMOTE_REPO_URL" cosmos-sdk

# Read the versions from a JSON file and remove the 'v' prefix
VERSIONS=($(jq -r '.[]' versions.json))

# Iterate over each version
for version in "${VERSIONS[@]}"; do
  version="${version#v}"  # Remove the 'v' prefix from the version number
  branch="release/v$version.x"  # Determine the branch name
  version_directory="version-$version"  # Create a directory name based on the version

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

  # Find all Markdown files in the local versioned_docs directory
  local_md_files=$(find "versioned_docs/$version_directory" -name "*.md")

  if [ -n "$(find "versioned_docs/$version_directory" -type f -name "*.md")" ]; then
    echo "There are Markdown files in the directory."
      # Iterate over each local Markdown file
    for local_file in $local_md_files; do
        local_basename=$(basename "$local_file")

        # Iterate over each remote Markdown file
        for remote_file in $remote_md_files; do
          remote_basename=$(basename "$remote_file")

          # Compare the filenames to find matching files
          if [ "$local_basename" = "$remote_basename" ]; then
            # Check for differences between the local and remote files
            if diff "$local_file" "./cosmos-sdk/$remote_file" &>/dev/null; then
              echo "No differences found for $local_basename"
            else
              # Replace the local file with the remote file if differences are found
              echo "Differences found for $local_basename and $remote_file. Replacing $local_file with remote file..."
              pwd
              cp "./cosmos-sdk/docs/$remote_file" "$local_file"
              echo "Local file replaced."
            fi
          elif [ -z "$local_md_files" ]; then
            # If there are no local Markdown files, copy the remote file to the local directory
            cp "./cosmos-sdk/docs/$remote_file" "$local_file"
          fi
        done
      done
  else
    echo "No Markdown files found in the directory, copying over docs folder."
    cp -r "./cosmos-sdk/docs/docs" "$WORK_DIR/versioned_docs/$version_directory"
  fi
done
