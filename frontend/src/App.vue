<template>
  <div class="qwe">
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "./components/general/AppHeader.vue";
import AppFooter from "./components/general/AppFooter.vue";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
  methods: {
    ...mapActions(["restoreCart" , "restoreSession"])
  },
  mounted() {
    this.restoreCart()
    this.restoreSession()
  },
};
</script>
<style>
*,
*::after,
*::before {
    box-sizing: border-box;
}

.container{
    max-width: 960px;
    padding: 0 10px;
    margin: 0 auto;
}

body{
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 14px;
}

a{
    text-decoration: none;
}

.borrad{
    border-radius: 4px;
}
</style>
