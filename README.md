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


### Github Pages deploy

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m "Automated deployment to GitHub Pages"

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://<USERNAME>@github.com/kgrid-lab/vue-okta.git master:gh-pages


### Local deployment with Express Server
```
yarn build
```

To start the server, run
```
npm run start
```
