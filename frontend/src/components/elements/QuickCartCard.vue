<template>
  <div class="quick-cart__item">
    <div class="quick-cart__item-content">
      <img
        :src="`http://localhost:5000/img/${img}`"
        alt=""
        class="quick-cart__item-img"
      />
        <div class="quick-cart__item-wr-center">
          <p class="quick-cart__item-title">{{ title }}</p>
        </div>
        <div class="quick-cart__item-wr-right">
          <p class="quick-cart__item-price">$ {{ price }}</p>
          <img
            src="@/assets/img/df.png"
            class="quick-cart__item-btn"
            @click="deleteProductFromCart(this.id)"
          />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "QuickCartCard",
  methods: {
    ...mapActions(["deleteProductFromCart"]),
  },
  props: {
    id: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: "noimage.png",
    },
    title: {
      type: String,
      default: "",
    },
    price: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.quick-cart__item {
  display: block;
  padding: 10px 16px;
  border-top: 1px solid black;
  &-content {
    display: flex;
  }

  &-img {
    height: 58px;
    width: 48px;
    border: 1px solid white;
    filter: drop-shadow(0 0 1.5px rgba(0, 0, 0, 0.15));
    margin-right: 18px;
  }

  &-title {
    font-size: 13px;
    color: #666666;
  }

  &-price {
    font-size: 16px;
    color: #709b1d;
    margin-bottom: 12px;
  }

  &-wr-right {
      display: table;
      margin-left: auto;
  }

  &-btn {
      display: table;
      margin-left: auto;
  }
}
</style>