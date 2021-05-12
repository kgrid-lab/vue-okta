import vueConfig from '../vue.config.js'

export default {
  oidc: {
    clientId: '0oaq8xytwLXhqbABm5d6',
    issuer: 'https://dev-28324586.okta.com/oauth2/default',
    redirectUri: window.location.origin + vueConfig.publicPath + '/login/callback',
    scopes: ['openid', 'profile', 'email'],

  }
}
