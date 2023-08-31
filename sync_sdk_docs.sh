#!/bin/bash

REMOTE_REPO_URL="https://github.com/cosmos/cosmos-sdk.git"

WORK_DIR=$(pwd)

rm -rf ./cosmos-sdk
git clone "$REMOTE_REPO_URL" cosmos-sdk

VERSIONS=($(jq -r '.[]' versions.json))

for version in "${VERSIONS[@]}"; do
  version="${version#v}"
  branch="release/v$version.x"
  version_directory="version-$version"

  cd cosmos-sdk
  git fetch origin "$branch"
  git checkout "$branch"
  cd docs
  bash pre.sh

  if ! git show-ref --verify "refs/remotes/origin/$branch" &>/dev/null; then
    echo "Branch $branch does not exist in the remote repository."
    continue
  else
      "$branch exists, continuing..."
  fi

  remote_md_files=$(find "docs" -name "*.md")
  cd "$WORK_DIR"
  local_md_files=$(find "versioned_docs/$version_directory" -name "*.md")
  for local_file in $local_md_files; do
      local_basename=$(basename "$local_file")
      for remote_file in $remote_md_files; do
          remote_basename=$(basename "$remote_file")
          if [ "$local_basename" = "$remote_basename" ]; then
              if diff "$local_file" "./cosmos-sdk/$remote_file" &>/dev/null; then
                  echo "No differences found for $local_basename"
              else
                  echo "Differences found for $local_basename and $remote_file. Replacing $local_file with remote file..."
                  pwd
                  cp "./cosmos-sdk/docs/$remote_file" "$local_file"
                  echo "Local file replaced."
              fi
            elif [ -z "$local_md_files" ]; then
              cp "./cosmos-sdk/docs/$remote_file" "$local_file"
          fi
      done
  done
done
