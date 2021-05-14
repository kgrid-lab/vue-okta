<template>
  <form @submit.prevent="signUp">
      <div>
        <label for="firstName">first name</label>
        <input name="firstName" v-model="firstName" placeholder="first name">
      </div>
      <div>
        <label for="lastName">last name</label>
        <input name="lastName" v-model="lastName" placeholder="last name">
      </div>
      <div>
        <label for="email">email</label>
        <input name="email" v-model="email" placeholder="email">
      </div>
    </form>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      firstName: "",
      lastName: "",
      email: ""
    }
  },
  methods: {
    signUp(){
      var yourMessage = "Name: " + firstName + " " + lastName + "\nEmail: " + email
      var subject = firstName + " " + lastName + "would like some banana time."
      document.location.href = "mailto:adambeck@med.umich.edu?subject="
        + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(yourMessage);
    }
  }
}
</script>
