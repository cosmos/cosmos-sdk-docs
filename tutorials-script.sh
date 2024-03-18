REMOTE_REPO_URL="https://github.com/cosmos/sdk-tutorials.git"

WORK_DIR=$(pwd)

rm -rf ./sdk-tutorials
git clone "$REMOTE_REPO_URL" sdk-tutorials

cd $WORK_DIR/sdk-tutorials

mv "$WORK_DIR/sdk-tutorials/tutorials/nameservice" "$WORK_DIR/sdk-tutorials/tutorials/auction-frontrunning"

# fetch branch from the remote repository and switch to it
git fetch origin master
git checkout master

# iterate over directories in $WORK_DIR/docs/tutorials e.g $WORK_DIR/docs/tutorials/vote-extensions/oracle 
for dir in $WORK_DIR/docs/tutorials/*/*; do
  # take category(last part of the directory path)
  category=$(basename "$dir")
  
  # dont include '_category_.json' file
  if [[ "$category" == "_category_.json" ]]; then
    continue
  fi

  # find category that matches within the sdk-tutorials that match the category name
  find $WORK_DIR/sdk-tutorials/tutorials/$category -type d -name "docs" | while read docs_dir; do
    if [ -d "$docs_dir" ]; then
      mkdir -p "$WORK_DIR/docs/tutorials/vote-extensions/$category"
      # copy contents of the "docs" folder
      cp -r "$docs_dir"/* "$WORK_DIR/docs/tutorials/vote-extensions/$category"
    fi
  done
done

cd $WORK_DIR
rm -rf ./sdk-tutorials

