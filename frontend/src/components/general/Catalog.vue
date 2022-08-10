<template>
  <section class="catalog">
    <div class="container">
      <div class="catalog__wrapper">
        <div class="catalog__wr">
          <div class="catalog__banner">
            <img
              src="../../assets/img/topbanner.png"
              alt=""
              class="catalog__banner-img"
            />
          </div>
          <div class="catalog__content">
            <card
              v-for="card in getProducts"
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
        </div>
        <div class="catalog-sorter">
          <div class="catalog-sorter__brand">
            <div class="catalog-sorter__title">Brand</div>
            <input type="checkbox" class="catalog-sorter__brand-checkbox" />
            <input type="checkbox" class="catalog-sorter__brand-checkbox" />
            <input type="checkbox" class="catalog-sorter__brand-checkbox" />
            <input type="checkbox" class="catalog-sorter__brand-checkbox" />
            <input type="checkbox" class="catalog-sorter__brand-checkbox" />
            <input type="checkbox" class="catalog-sorter__brand-checkbox" />
          </div>
          <div class="catalog-sorter__price">
            <div class="catalog-sorter__title">Price</div>
            <price-filter />
          </div>
          <button class="catalog-sorter__btn">submit</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "../elements/Card.vue";
import PriceFilter from "../elements/PriceFilter.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Catalog",
  components: {
    Card,
    PriceFilter,
  },
  computed: mapGetters(["getProducts"]),
  methods: mapActions(["fetchProducts"]),

  mounted() {
    this.fetchProducts({category: this.$route.params.catalogName, limit: 0, skip: 0});
  },
};
</script>

<style lang="scss">
.catalog {
  &__banner {
    margin-bottom: 34px;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 220px);
    grid-gap: 19px;
  }

  &__wrapper {
    display: flex;
    margin-bottom: 50px;
  }

  &-sorter {
    margin-left: auto;
  }
  &-sorter__title {
    width: 210px;
    background-color: $dark-green;
    font-size: 18px;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    padding: 5px;
  }
}
</style>