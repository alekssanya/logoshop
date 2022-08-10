<template>
  <div class="container">
    <section class="main-products">
      <p class="main-products__title">New Item</p>
      <div class="main-products__wr">
        <card
              v-for="card in cards"
              :key="card._id"
              :_id="card._id"
              :title="card.title"
              :price="card.price"
              :image="card.image"
              :ratingcount="card.ratingcount"
              :ratingsum="card.ratingsum"
              :category="card.category"
            />
      </div>
    </section>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "MainProducts",
  components: { Card },
  props: {
    cards: {
      type: Object
    }
  }
};
</script>

<style lang="scss">
.main-products {
  &__title {
    display: block;
    text-align: center;
    margin: 0 auto 44px;
    font-size: 18px;
    color: white;
    padding: 8px 0;
    background-color: $dark-green;

  }
  &__wr {
    display: flex;
    justify-content: space-between;
    height: 282px;
  }
}
</style>