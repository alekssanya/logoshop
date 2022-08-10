<template>
  <div class="home__wr">
    <category-nav />
    <router-view />
  </div>
</template>

<script>
import CategoryNav from "../components/elements/CategoryNav.vue";
export default {
  name: "Home",
  components: {
    CategoryNav,
  }
};
</script>
