<template>
  <div class="container">
    <div class="cart-inner">
      <div class="cart-inner__content">
        <p class="cart-inner__text" v-if="this.getProductsId.length === 0">
          cart is empty
        </p>
        <cart-card
          v-else
          v-for="item in getProductsInCart"
          :key="item._id"
          :id="item._id"
          :title="item.title"
          :price="item.price"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CartCard from "../elements/CartCard.vue"
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Cart",
  components: {
    CartCard
  },
  computed: {
    ...mapGetters(["getProductsInCart", "getProductsId"]),
  },
  methods: {
    ...mapActions(["fetchProductForCart"]),
  },
  mounted() {
    if (this.getProductsId.length > 0) {
      this.fetchProductForCart(this.getProductsId);
    }
  },
};
</script>

<style>
</style>