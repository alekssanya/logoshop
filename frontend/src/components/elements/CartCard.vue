<template>
  <div class="cart-product">

    <div class="cart-product__wr">
    <p class="cart-product__title">{{ title }}</p>
    <p class="cart-product__price">{{ price }}</p>
    <button class="qereq" @click="cout">wgrwgwrg</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CartCard",
  props: {
    id: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    }
  },
  computed: mapGetters(["getProduct"]),
  methods: {
    ...mapActions(["fetchProductForCart"]),
    cout() {
      console.log(this.title);
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss">
.cart-product {
  display: flex;
  width: 500px;
  height: 120px;
  border: 2px solid black;

  &__img {
    width: 100px;
    height: 100px;
  }
}

.cart-product + .cart-product {
  margin-top: 50px;
}
</style>