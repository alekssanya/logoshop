<template>
  <div class="category-nav">
    <div class="container">
      <div class="category-nav__inner">
        <nav class="category-nav__nav">
          <ul class="category-nav__menu">
            <li
              class="category-nav__item"
              v-for="(category, index) in getCategories"
              :key="index"
            >
              <router-link
                :to="'/home/' + category.title"
                class="category-nav__link"
                >{{ $t(`category[${index}]`) }}
              </router-link>
            </li>
            <li v-if="Object.keys(getCategories).length === 0" class="category-nav__item">Необходимо залогиниться для получения доступа к категориям.</li>
          </ul>
        </nav>
        <div class="category-nav__searcher">
          <input
            type="text"
            class="category-nav__input"
            placeholder="Search Your Item"
          />
          <button class="category-nav__btn" type="submit">
            <img
              src="../../assets/img/Shape2.png"
              alt=""
              class="category-nav__img"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CategoryNav",
  computed: mapGetters(["getCategories"]),
  methods: mapActions(["fetchCategories"]),
  mounted() {
    this.fetchCategories();
  },
};
</script>

<style lang="scss">
.category-nav {
  background-color: $light-grey;
  padding: 10px 0;
  margin-bottom: 20px;

  &__inner {
    display: flex;
    align-items: center;
  }

  &__menu {
    display: flex;
  }

  &__item + &__item {
    margin-left: 26px;
  }

  &__item {
    padding: 8px 10px;
  }

  &__link {
    font-size: 14px;
    color: $light-green-text;
    font-weight: 400;
    font-family: "Open Sans";
    text-transform: uppercase;
  }

  &__searcher {
    display: flex;
    flex-wrap: nowrap;
    margin-left: auto;
    align-items: center;
  }

  &__input {
    max-height: 30px;
    padding: 7px 5px;
    border: none;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }

  &__btn {
    max-height: 30px;
    border: none;
    padding: 6px;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    background-color: $dark-green;
  }
}
</style>