<template>
  <div :id="_id" class="card">
    <img
      :src="`http://localhost:5000/img/${image[0]}`"
      alt=""
      class="card__img"
      @click="goto"
    />
    <p class="card__title">{{ title }}</p>
    <div class="card__wr">
      <p class="card__price">{{ price }}</p>
      <star-rating :grade="grade" />
    </div>
    <div class="card__hover">
      <div class="card__hover-wr">
        <div class="card__hover-wrapper">
          <button class="card__hover-btn first-btn" @click="addToCart">
            <p class="card__hover-text" v-if="!this.getProductsId.includes(this._id)">Add to cart</p>
            <p class="card__hover-text" v-else>Delete from cart</p>
          </button>
        </div>
        <div class="card__hover-wrapper">
          <button class="card__hover-btn second-btn">
            <p class="card__hover-text">Add to wishlist</p>
          </button>
        </div>
        <div class="card__hover-wrapper">
          <button class="card__hover-btn third-btn">
            <p class="card__hover-text">Add to compare</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "./StarRating.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Card",
  components: { StarRating },
  computed: {
    grade() {
      return (this.ratingsum / this.ratingcount).toFixed(2);
    },
    ...mapGetters(["getCartCounter", "getProductsId"]),
  },
  methods: {
    goto() {
      this.$router.push("/home/" + this.category + "/" + this._id);
    },
    addToCart() {
      if (!this.getProductsId.includes(this._id)) {
        this.addProductInCart({
          id: this._id,
          title: this.title,
          price: this.price,
          img: this.image[0],
        });
      } else {
        this.deleteProductFromCart(this._id);
      }
    },

    ...mapActions(["addProductInCart", "deleteProductFromCart"]),
  },
  props: {
    _id: {
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
    },
    ratingsum: {
      type: Number,
      default: 0,
    },
    ratingcount: {
      type: Number,
      default: 0,
    },
    image: {
      type: Array,
      default: () => {
        ["http://localhost:5000/img/noimage.png"];
      },
    },
    category: {
      type: String,
      default: "",
    },
  },
  mounted() {
  }
};
</script>

<style lang="scss">
.card {
  border: 3px solid $dark-grey;
  height: 282px;
  width: 214px;
  max-width: 214px;
  max-height: 282px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $dark-grey;
  text-align: center;
  position: relative;
  &__img {
    height: 212px;
    width: 214px;
  }

  &__title {
    max-width: 196px;
    padding: 7px;
    margin-top: -15px;
    background-color: white;
    border: 1px solid $dark-grey;
    border-radius: 4px;
    color: $light-green-text;
    font-size: 14px;
    margin-bottom: 10px;
  }

  &__price {
    font-size: 18px;
    margin-bottom: 5px;
  }
}

.card:hover {
  background-color: $dark-green;
  border-color: $dark-green;
  .card__wr {
    display: none;
  }
  .card__hover {
    display: inline;
  }
}

.card__hover {
  display: none;
  position: absolute;
  bottom: 4px;
  &-text {
    display: none;
  }
}

.card__hover-wr {
  display: flex;
  justify-content: space-around;
  width: 200px;
}

.card__hover-wrapper {
  display: flex;
  padding: 7px 5px;
  background-color: white;
}

.first-btn,
.second-btn,
.third-btn {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: none;
  background-color: white;
  background-repeat: no-repeat;
}

.first-btn {
  background-image: url("../../assets/img/btncart.png");
}

.second-btn {
  background-image: url("../../assets/img/btncheck.png");
}

.third-btn {
  background-image: url("../../assets/img/btnarrows.png");
}

.first-btn:hover {
  background-image: url("../../assets/img/btncarthover.png");
}

.second-btn:hover {
  background-image: url("../../assets/img/btncheckhover.png");
}

.third-btn:hover {
  background-image: url("../../assets/img/btnarrowshover.png");
}

.first-btn:hover,
.second-btn:hover,
.third-btn:hover {
  width: 110px;
  .card__hover-text {
    display: block;
    padding-left: 20px;
    line-height: 0.8;
  }
}
</style>