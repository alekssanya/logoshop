<template>
<div class="div">
  <bread-crumbs />
  <cart />
</div>
</template>

<script>
import Cart from "../components/general/Cart.vue";
import BreadCrumbs from '../components/elements/BreadCrumbs.vue';
export default {
  components: {
    Cart,
    BreadCrumbs,
  }
};






/*
import ProductCard from "../components/ProductCard.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ShopCart",
  components: { ProductCard },
  computed: mapGetters(["getProducts"]),
  methods: mapActions(["fetchProducts"]),
  async mounted() {
    this.fetchProducts();
  },
};*/
</script>

<style>
</style>