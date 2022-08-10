<template>
  <div class="quick-cart">
    <div class="quick-cart__top">
      <p class="quick-cart__top-text">
        Showing {{ getCartCounter }} of {{ getCartCounter }} items added
      </p>
    </div>
    <p v-if="getCartCounter === 0" class="quick-cart__content-text">
        Cart empty
      </p>
    <div v-else class="quick-cart__content">
      <quick-cart-card v-for="item in getProductsInQuickCart" :id="item.id" :title="item.title" :price="item.price" :key="item._id"/>
    </div>
    <div class="quick-cart__total-price">
      <p v-if="getCartCounter === 0" class="quick-cart__content-text">
        Cart empty
      </p>
      <p v-else class="quick-cart__content-text">{{getTotalPrice()}}</p>
    </div>
    <div class="quick-cart__btns">
      <button class="quick-cart__btn">View Cart</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import QuickCartCard from "./QuickCartCard.vue";
export default {
  name: "QuickCard",
  components: { QuickCartCard },
  computed: mapGetters(["getCartCounter", "getProductsInQuickCart"]),
  methods: {
    getTotalPrice() {
      let price = 0;
      this.getProductsInQuickCart.forEach(element => {
        price += element.price
      });
      return price 
    },
  },
};
</script>

<style lang="scss">
.quick-cart {
  width: 290px;
  border-top: 3px solid $dark-green;
  position: absolute;
  top: 40px;
  right: 0;
  background-color: white;
  z-index: 3;

  &__top {
    text-align: center;
  }

  &__top-text {
    display: table;
    width: 162px;
    height: 11px;
    font-size: 12px;
    color: #898989;
    font-weight: 400;
    padding: 6px 0;
    margin: 0 auto;
  }
}
</style>