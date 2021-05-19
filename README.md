# vue-auth-test
## Okta Integration Notes
  - Must set up a new SPA application at developer.okta.com
  - Make sure to add your base URL to the CORS field in the security section of the okta console, otherwise the auth callback will not work.
  - To secure a route, simply add meta: {requiresAuth: True} to the path in the router file.
  - in config.json, update the Issuer and Client Id
  - Also in config, the redirectUri HAS to match what is set in okta. It's okay to use the window object to get the root url like so: `redirectUri: window.location.origin + '/login/callback'`. This should also match the route set in the router file for the LoginCallback: `{ path: '/login/callback', component: LoginCallback}`. This is a custom okta component that catches all the user info that comes back when they authenticate, which can be accessed via the `claims` property.
  - Vue.use(OktaVue, { oktaAuth }) MUST happen after Vue.use(Router) in the router file.
  - Okta does have a self-service sign up option, but the user is signing up for okta itself, and it feels a bit strange to the user
  - Currently sign up just opens the user's email with a pre filled subject and message, which the recipient will then use to add their email to the App's okta account
  
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

### Local deployment with Express Server
```
yarn build
```

To start the server, run
```
npm run start
```
