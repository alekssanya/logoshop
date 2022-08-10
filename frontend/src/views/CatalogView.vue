<template>
  <div class="catalog-view">
    <bread-crumbs :key="this.$route" />
    <router-view  :key="this.$route" />
    <prefooter/>
  </div>
</template>


<style lang="scss">
    .header__link:last-child {
        background-color: white;
    }
</style>

<script>
// @ is an alias to /src
import Prefooter from '../components/general/Prefooter.vue';
import BreadCrumbs from '../components/elements/BreadCrumbs.vue';
export default {
  name: 'CatalogView',
  components: {
    Prefooter,
    BreadCrumbs
  }
}
</script>

