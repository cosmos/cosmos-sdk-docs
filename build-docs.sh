#!/bin/sh

rm -rf ./cosmos-sdk
git clone https://github.com/cosmos/cosmos-sdk/ cosmos-sdk;
cd cosmos-sdk/docs;

while read -r branch path_prefix; do
    echo "building vuepress $branch docs"
    (
        git clean -fdx && git reset --hard && git checkout $branch && npm install &&
        VUEPRESS_BASE="/$path_prefix/"
        npm run build
    )

    mkdir -p ./build/$path_prefix/
    cp -r .vuepress/dist/* ./build/$path_prefix/
done < vuepress_versions

cd ../../
pwd
mkdir -p ./build
cp -r ./cosmos-sdk/docs/build  ./build
