import Vue from 'vue'
import Router from 'vue-router'
import OktaVue, { LoginCallback } from '@okta/okta-vue'
import { OktaAuth } from '@okta/okta-auth-js'
import authConfig from '@/config'
import Home from '../components/Home.vue';
import Avocado from '../components/Avocado.vue';
import Banana from '../components/Banana.vue';
import vueConfig from '../../vue.config.js'
Vue.use(Router)

const oktaAuth = new OktaAuth(authConfig.oidc)
console.log(vueConfig)
Vue.use(OktaVue, { oktaAuth })

const router = new Router({
  mode: 'history',
  base: vueConfig.publicPath,
  routes: [
      { path: '/', component: Home },
      { path: '/login/callback', component: LoginCallback},
      { path: '/banana', name:"banana", component: Banana, meta: {requiresAuth: true}},
      { path: '/avocado', name:"avocado", component: Avocado,  meta: {requiresAuth: true}},
  ]
})

export default router;
