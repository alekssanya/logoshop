<template>
  <p class="breadcrumbs__last breadcrumbs__path" v-if="this.$route.meta.breadcrumbs === 'path'">{{ $t(`breadcrumbs.${pathName}`) }}</p>
  <p class="breadcrumbs__last breadcrumbs__path" v-else>{{ pathName }}</p>
</template>

<script>
export default {
  name: "BreadCrumbsLast",
  props: {
    pathName: {
      type: String,
    },
  }
};
</script>

<style>
</style>