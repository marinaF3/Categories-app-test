#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist


git init
git add -A
git commit -m 'deploy'

# если вы деплоите на https://<USERNAME>.github.io
 https://marinaF3.github.io/Categories-app-test/



cd -