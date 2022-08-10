<template>
  <section class="login">
    <div class="container">
      <label class="login__login-text" for="login__username-input">Login:</label>
      <input type="text" id="login__username-input" v-model="userName" />
      <label class="login__login-text" for="login__password-input">Password:</label>
      <input type="password" class="login__password-input" v-model="password" />
      <button class="btn__submit" @click="validation">submit</button>
      <p class="textinfo">admin login: BossOfThisGym, password: 2281337666</p>
    </div>
    <button @click="cout">adcadcadcdacdac</button>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
    validation() {
      if ((this.userName || this.password) === "") {
        console.log("login or password incorrect");
      } else {
        this.login({userName: this.userName, password: this.password})
      }
    },
    cout() {
      console.log(this.getName);
    },
  },
  computed: {
    ...mapGetters(["getName"]),
  },
};
</script>

<style>
</style>