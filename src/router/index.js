import Vue from 'vue'
import Router from 'vue-router'
import OktaVue, { LoginCallback } from '@okta/okta-vue'
import { OktaAuth } from '@okta/okta-auth-js'
import authConfig from '@/config'
import Home from '../components/Home.vue';
import Avocado from '../components/Avocado.vue';
import Banana from '../components/Banana.vue';
import SignUp from '../components/SignUp.vue';
Vue.use(Router)

const oktaAuth = new OktaAuth(authConfig.oidc)
Vue.use(OktaVue, { oktaAuth })

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
      { path: '/signUp', component: SignUp },
      { path: '/login/callback', component: LoginCallback},
      { path: '/banana', name:"banana", component: Banana, meta: {requiresAuth: true}},
      { path: '/avocado', name:"avocado", component: Avocado,  meta: {requiresAuth: true}},
  ]
})

export default router;
