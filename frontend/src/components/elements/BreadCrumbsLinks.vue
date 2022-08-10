<template>
  <a @click="navigation(pathIndex)" class="breadcrumbs__link breadcrumbs__path">
    {{ $t(`breadcrumbs.${pathName}`) }}
  </a>
</template>

<script>
export default {
  name: "BreadCrumbsLinks",
  props: {
    pathName: {
      type: String,
      default: "",
    },
    pathIndex: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    navigation(pathIndex) {
      let path;
      switch (pathIndex) {
        case 0:
          path = "/home";
          break;
        case 1:
          path = "/home/" + this.$route.params.catalogName;
          break;
      }
      return this.$router.push(path);
    },
  },
};
</script>

<style lang='scss'>
.breadcrumbs__link {
  cursor: pointer;
}
</style>