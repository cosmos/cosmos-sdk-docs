#!/bin/sh

rm -rf ./cosmos-sdk
git clone https://github.com/cosmos/cosmos-sdk/ cosmos-sdk;
cd cosmos-sdk;
git checkout release/v0.50.x;
cd docs;

while read -r branch path_prefix; do
    echo "building vuepress $branch docs"
    (
        git clean -fdxq && git reset --hard && git checkout $branch && npm install &&
        VUEPRESS_BASE="/$path_prefix/"
        rm basics/app-anatomy.md
        npm run build
        mkdir -p "../../build/$path_prefix"

        cp -r .vuepress/dist/* "../../build/$path_prefix"
    )
done < vuepress_versions

rm -rf ./cosmos-sdk
