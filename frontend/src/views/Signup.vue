<template>
  <section class="signup">
    <div class="container">
    <p class="signup__login-text">Login:</p>
    <input type="text" class="signup__login-input" v-model="userName">
    <p class="signup__password-text">Password:</p>
    <input type="text" class="signup__password-input" v-model="password">
    <p class="signup__email-text">Email:</p>
    <input type="text" class="signup__email-input" v-model="email">
    <button class="btn__submit" @click="validation">submit</button>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Signup",
  data() {
    return {
      userName: "",
      password: "",
      email: ""
    };
  },
  methods: {
    ...mapActions(["signup"]),
        validation() {
      if ((this.userName || this.password || this.email) === "") {
        console.log("login or password incorrect");
      } else {
        this.signup({name: this.userName, email: this.email, password: this.password})
      }
    },
    cout() {
      console.log(this.getName);
    },
  },
  computed: {
    ...mapGetters(["getName"]),
  },
}
</script>

<style>

</style>