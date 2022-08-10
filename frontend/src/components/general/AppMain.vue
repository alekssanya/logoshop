<template>
  <main class="main">
    <carousel :items-to-show="1">
      <slide v-for="slide in imgArr" :key="slide">
        <img
          class="carousel__img"
          :src="require('@/assets/img/' + slide)"
          alt=""
        />
      </slide>
      <template #addons>
        <navigation />
      </template>
    </carousel>
      <prefooter />
    <div class="main__wrapper">
      <main-products :cards="getProducts" />
    </div>
    <div class="main__wrapper">
      <main-promotion />
    </div>
    <div class="main__wrapper">
      <div class="main-subscribe">
        <div class="main-subscribe__wrapper">
          <p class="main-subscribe__title">SUBCRIBE FOR GET OFFER UPDATE</p>
          <p class="main-subscribe__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div class="main-subscribe__wr">
            <input
              type="text"
              class="main-subscribe__input"
              placeholder="Type your email"
            />
            <button class="main-subscribe__btn">Lets go!</button>
          </div>
        </div>
      </div>
    </div>
    <div class="main__wrapper">
      <main-products :cards="getProducts" />
    </div>
    <div class="main__wrapper">
      <main-products :cards="getProducts" />
    </div>
  </main>
</template>

<script>
import Prefooter from "./Prefooter.vue";
import MainPromotion from "../elements/MainPromotion.vue";
import MainProducts from "../elements/MainProducts.vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AppMain",
  components: {
    Prefooter,
    Carousel,
    Slide,
    Navigation,
    MainPromotion,
    MainProducts,
  },
  data() {
    return {
      imgArr: [
        "slidermainpreview.png",
        "slidermainpreview.png",
        "slidermainpreview.png",
      ],
      prArr: []
    };
  },
  computed: mapGetters(["getProducts"]),
  methods: mapActions(["fetchProducts"]),
  mounted() {
    this.fetchProducts({category: "smartphone", limit: 4, skip: 0})
  },
};
</script>

<style lang="scss">
.main__wrapper {
  margin-bottom: 50px;
}
.carousel {
  overflow-x: hidden;
  position: relative;
  
  &__track {
    display: flex;
  }

  &__img {
    width: 100vw;
    height: 465px;
  }

  &__icon {
    display: none;
  }

  &__prev,
  &__next {
    position: absolute;
    top: calc(50% - 24.5px);
    background-color: transparent;
    border: none;
  }

  &__prev {
    transform: rotate(180deg);
  }

  &__next {
    right: 0;
  }

  &__next::after,
  &__prev::after {
    content: url("../../assets/img/sliderarrow.png");
  }

  &__pagination {
    display: none;
  }
}
.main {
  &-subscribe {
    background-image: url("../../assets/img/emailbg.png");
    background-repeat: no-repeat;
    background-size: cover;
    color: #ffffff;
    letter-spacing: 1px;
    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__title {
      font-size: 36px;
      padding-top: 50px;
      margin-bottom: 20px;
    }

    &__text {
      font-size: 12px;
      letter-spacing: 0px;
      margin-bottom: 30px;
    }

    &__wr {
      display: flex;
    }

    &__input {
      font-size: 18px;
      color: #64891e;
      font-weight: 300;
      margin-bottom: 50px;
      border: 2px solid $light-green;
      border-radius: 4px;
      padding: 13px;
      width: 420px;
      background-color: #d8e3c2;
    }

    &__input::placeholder {
      color: $dark-green-text;
    }

    &__btn {
      font-size: 24px;
      color: #557c08;
      font-weight: 400;
      padding: 9px;
      border: 2px solid $light-green;
      border-radius: 4px;
      align-self: flex-start;
      background-color: #d8e3c2;
    }
  }
}
</style>