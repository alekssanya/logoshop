<template>
  <div class="container">
    <section class="product">
      <div class="product-top">
        <div class="product-top__imgs">
          <img
            src="@/assets/img/mainpromotion.png"
            alt=""
            class="product-top__main-img"
          />
          <div class="product-top__slaider">
            <img
              src="@/assets/img/mainpromotion.png"
              alt=""
              class="product-top__slaider-img"
            />
            <img
              src="@/assets/img/mainpromotion.png"
              alt=""
              class="product-top__slaider-img"
            />
            <img
              src="@/assets/img/mainpromotion.png"
              alt=""
              class="product-top__slaider-img"
            />
          </div>
        </div>
        <div class="product-top__content">
          <p class="product-top__title">{{getProduct.title}}</p>
          <div class="product-top__rating">
            <star-rating-click  />
          </div>
          <div class="product-top__wr">
            <div class="product-top__characteristics">
              <p class="product-top__characteristic">Menufacturer :</p>
              <p class="product-top__characteristic">Availability :</p>
              <p class="product-top__characteristic">Product Code :</p>
            </div>
            <div class="product-top__info">
              <p class="product-top__characteristic">{{getProduct.brand}}</p>
              <p class="product-top__characteristic">in stock {{getProduct.availability}} item(s)</p>
              <p class="product-top__characteristic">{{getProduct._id}}</p>
            </div>
          </div>
          <div class="product-top__mass">
            <p class="product-top__mass-title">Product Dimensions and Weight</p>
            <div class="product-top__wr">
              <div class="product-top__characteristics">
                <p class="product-top__characteristic">Product Lenght :</p>
                <p class="product-top__characteristic">Product Weight :</p>
              </div>
              <div class="product-top__info">
                <p class="product-top__characteristic">{{getProduct.length}}m</p>
                <p class="product-top__characteristic">{{getProduct.weight}}kg</p>
              </div>
            </div>
          </div>
          <div class="product-top__text-wr">
            <p class="product-top__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div class="product-top__price-wr">
            <p class="product-top__price">
              price: {{getProduct.price}}
            </p>
          </div>
          <button class="product-top__btn">
            <img src="" alt="" class="product-top__btn-img" />
            <p class="product-top__btn-text"></p>
          </button>
        </div>
      </div>
      <div class="product-share">
        <p class="product-share__text">Share this</p>
        <img src="@/assets/img/fbmini.png" alt="" class="product-share__img" />
        <img
          src="@/assets/img/twittermini.png"
          alt=""
          class="product-share__img"
        />
        <img src="@/assets/img/gmini.png" alt="" class="product-share__img" />
        <img src="@/assets/img/pinmini.png" alt="" class="product-share__img" />
      </div>
      <div class="product-bot">
        <div class="product-bot__menu"></div>
        <div class="product-bot__specification">Specification</div>
        <div class="product-bot__reviews">Reviews</div>
        <div class="product-bot__write">Custom Tab</div>
        <div class="comment">
          <div class="wr">
            <p class="name">By Bin Burhan</p>
            <div class="time">
              <img src="" alt="" />
              <p>10:05pm</p>
            </div>
            <div class="time">
              <img src="" alt="" />
              <p>26 December</p>
            </div>
            <div class="rating">★★★★★</div>
          </div>
          <p class="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import StarRatingClick from "../elements/StarRatingClick.vue"
export default {
  name: "ProductPage",
  components: {
    StarRatingClick
  },
  computed: mapGetters(["getProduct"]),
  methods: mapActions(["fetchProduct"]),
  mounted() {
    this.fetchProduct(this.$route.params.id)
    console.log(this.getProduct)
  },
};
</script>

<style lang="scss">
.product-top {
  display: flex;

  &__main-img {
    width: 320px;
    height: 350px;
    border: 1px solid grey;
    margin-bottom: 10px;
  }

  &__slaider {
    display: flex;
    width: 320px;
    height: 120px;
    align-items: center;
    justify-content: center;
    border: 1px solid grey;
  }

  &__slaider-img {
    width: 80px;
    height: 80px;
    border: 1px solid grey;
  }

  &__slaider-img + &__slaider-img {
    margin-left: 10px;
  }

  &__content {
    margin-left: 40px;
  }

  &__title {
    font-size: 22px;
    color: #1d1d1d;
    font-weight: 600;
  }

  &__wr {
    display: flex;
  }

  &__info {
    margin-left: 15px;
  }

  &__characteristic {
    font-size: 14px;
    color: #444444;
    font-weight: 300;
  }

  &__mass-title {
    font-size: 20px;
  }
}

.first-btn-pp {
  background-image: url("../../assets/img/btncart.png");
}

.second-btn-pp {
  background-image: url("../../assets/img/btncheck.png");
}

.third-btn-pp {
  background-image: url("../../assets/img/btnarrows.png");
}

.first-btn-pp:hover {
  background-image: url("../../assets/img/btncarthover.png");
}

.second-btn-pp:hover {
  background-image: url("../../assets/img/btncheckhover.png");
}

.third-btn-pp:hover {
  background-image: url("../../assets/img/btnarrowshover.png");
}
</style>