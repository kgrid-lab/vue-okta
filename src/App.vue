<template>
  <div id="app">
    <div v-if="!authState.isAuthenticated">
      <button v-on:click="login()">
        Login
      </button>
    </div>
    <br>
    <div v-if="!authState.isAuthenticated">
      <button v-on:click="signUp()">
        Sign Up
      </button>
    </div>
    <div v-if="authState.isAuthenticated">
      <button v-on:click="logout()">
        Logout
      </button>
    </div>
    <br>
    <router-link to="/">Home</router-link><br>
    <router-link to="/banana">Banana Time</router-link><br>
    <router-link to="/avocado">Fresh Avocado</router-link><br>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return { authenticated: false }
  },
  created() { this.isAuthenticated() },
  watch: {
    '$route': 'isAuthenticated'
  },
  methods: {
    async isAuthenticated(){
      this.authenticated = await this.$auth.isAuthenticated()
    },
    login () {
      this.$auth.signInWithRedirect({ originalUri: '/banana' })
    },
    signUp () {
      this.$router.push('signUp')
    },
    async logout () {
      await this.$auth.signOut()
    }
  }
}
</script>
