<template>
  <div class="container">
    <div class="breadcrumbs__wr">
      <bread-crumbs-links
        class="breadcrumbs__path"
        v-for="(item, index) in path.links"
        :key="index"
        :pathName="item"
        :pathIndex="index"
      />
      <bread-crumbs-last :pathName="path.last"/>
    </div>
  </div>
</template>

<script>
import BreadCrumbsLast from "./BreadCrumbsLast.vue";
import BreadCrumbsLinks from "./BreadCrumbsLinks.vue";
export default {
  name: "BreadCrumbs",
  components: {
    BreadCrumbsLast,
    BreadCrumbsLinks,
  },
  data() {
    return {
      path: this.showPath()
    }
  },
  methods: {
    showPath() {
      let arr = this.$route.fullPath
        .substring(1, this.$route.fullPath.length)
        .split("/");
      let path = {
        links: [],
        last: "",
      };

      for (let index = 0; index < arr.length - 1; index++) {
        path.links.push(arr[index]);
      }
      path.last = arr[arr.length-1];
      
      return path;
    },
  },
};
</script>

<style lang="scss">
.breadcrumbs {
  &__wr {
    display: flex;
    background-color: $dark-green;
    padding: 12px;
    margin-bottom: 40px;
    color: white;
  }

  &__link:after{
    content: "/";
    display: inline;
    margin: 0 5px;
  }
}
</style>