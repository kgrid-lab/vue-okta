# vue-auth-test

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Github Pages deply

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m "Automated deployment to GitHub Pages"

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://<USERNAME>@github.com/kgrid-demos/vue-okta.git master:gh-pages
