<template>
  <header class="header">
    <div class="header-background">
      <div class="container">
        <div class="header-top">
          <nav class="header-top__nav">
            <ul class="header-top__menu">
              <li class="header-top__item">
                <router-link class="header-top__link" to="/home">{{
                  $t("header.top__link[0]")
                }}</router-link>
              </li>
              <li class="header-top__item">
                <router-link class="header-top__link" to="/my-account">{{
                  $t("header.top__link[1]")
                }}</router-link>
              </li>
              <li class="header-top__item">
                <router-link class="header-top__link" to="/shopping-cart">{{
                  $t("header.top__link[2]")
                }}</router-link>
              </li>
              <li class="header-top__item">
                <router-link class="header-top__link" to="/checkout">{{
                  $t("header.top__link[3]")
                }}</router-link>
              </li>
              <li class="header-top__item" v-if="getRole === 'admin'">
                <router-link class="header-top__link" to="/admin">admin</router-link>
              </li>
              
            </ul>
          </nav>
          <div class="header-top__settings">
            <div class="header-top__setting">
              <div class="header-top__setting-selected item-pad">
                <lang-dropdawn v-bind:arr="langs[0]" />
                <button
                  v-on:click="langPanelShow = !langPanelShow"
                  class="language__btn select-btn"
                >
                  <img
                    src="../../assets/img/rect1.png"
                    alt=""
                    class="btn-img"
                  />
                </button>
              </div>
              <transition name="lang">
                <ul
                  v-show="langPanelShow"
                  class="header-top__select-menu header-top__select-menu-lang"
                >
                  <li
                    class="header-top__select-item"
                    @click="swap(langs, 1), setLocale()"
                  >
                    <lang-dropdawn v-bind:arr="langs[1]" />
                  </li>
                  <li
                    class="header-top__select-item"
                    @click="swap(langs, 2), setLocale()"
                  >
                    <lang-dropdawn v-bind:arr="langs[2]" />
                  </li>
                </ul>
              </transition>
            </div>
            <div class="header-top__setting">
              <div class="header-top__setting-selected item-pad">
                <curr-dropdawn v-bind:currency="currs[0]" />
                <button
                  v-on:click="curPanelShow = !curPanelShow"
                  class="currency__btn select-btn"
                >
                  <img
                    src="../../assets/img/rect1.png"
                    alt=""
                    class="btn-img"
                  />
                </button>
              </div>
              <transition name="cur">
                <ul
                  v-if="curPanelShow"
                  class="header-top__select-menu header-top__select-menu--close"
                >
                  <li class="header-top__select-item">
                    <curr-dropdawn
                      v-bind:currency="currs[1]"
                      @click="swap(currs, 1)"
                    />
                  </li>
                  <li class="header-top__select-item">
                    <curr-dropdawn
                      v-bind:currency="currs[2]"
                      @click="swap(currs, 2)"
                    />
                  </li>
                </ul>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bot__background">
    <div class="container">
      <div class="header-bot">
        <a href="" class="logo__link"
          ><img src="../../assets/img/logo.png" alt="" class="logo"
        /></a>
        <div class="header-bot__content">
          <div class="header-bot__links" v-if="getName === ''">
            <router-link to="/login" class="header-bot__link">{{
              $t("header.bot__link[0]")
            }}</router-link>
            <span class="or">{{ $t("header.bot__link[1]") }}</span>
            <router-link to="/signup" class="header-bot__link">{{
              $t("header.bot__link[2]")
            }}</router-link>
          </div>
          <div class="header-bot__links" v-else>
            <p class="username">{{getName}}</p>
            <button class="logout" @click="logout">exit</button>
          </div>
          <div class="header-bot__buts">
            <div class="header-bot__but">
              <img
                src="../../assets/img/layer3.png"
                alt=""
                class="header-bot__img"
              />
            </div>
            <div class="header-bot__but">
              <div class="header-bot__counter" v-show="getCartCounter > 0">
                <p class="header-bot__counter-nums">{{ getCartCounter }}</p>
              </div>
              <img
                src="../../assets/img/layer4.png"
                alt=""
                class="header-bot__img"
                @click="quickCartShow = !quickCartShow"
              />
            </div>
            <quick-cart v-if="quickCartShow" />
          </div>
        </div>
      </div>
    </div>
    </div>
  </header>
</template>

<script>
import LangDropdawn from "../elements/LangDropdawn.vue";
import CurrDropdawn from "../elements/CurrDropdawn.vue";
import QuickCart from "../elements/QuickCart.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AppHeader",
  data() {
    return {
      langPanelShow: false,
      curPanelShow: false,
      quickCartShow: false,
      langs: [
        ["us", "Eng"],
        ["ru", "Rus"],
        ["kz", "Kaz"],
      ],
      currs: [
        ["&#36;", "Dollar"],
        ["&#8381;", "Рубль"],
        ["&#8376;", "Тенге"],
      ],
    };
  },
  methods: {
    swap(arr, num) {
      return ([arr[0], arr[num]] = [arr[num], arr[0]]);
    },
    setLocale() {
      var lang = this.langs[0][0];
      this.$i18n.locale = lang;
      console.log(this.$i18n.locale);
      document
        .querySelector("html")
        .setAttribute("lang", lang === "us" ? "en" : lang);
      //this.$i18n.fallbackLocale = langs[0][0];
      //localStorage.setItem("lang", locale)
      //window.location.reload();
    },
    ...mapActions(["logout"])
  },
  computed: mapGetters(["getCartCounter", "getProductsInQuickCart", "getRole", "getName"]),
  components: { LangDropdawn, CurrDropdawn, QuickCart },
};
</script>

<style lang="scss">

.header{
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-background {
  background-color: $dark-green;
  position: relative;
  z-index: 10;
}

.header-top {
  display: flex;
  justify-content: space-between;
  padding-bottom: 3px;
  &__menu {
    display: flex;
  }

  &__link {
    color: white;
    padding: 12px 9px;
  }

  &__item {
    display: flex;
    justify-items: center;
  }

  .router-link-active {
    background: white;
    color: $dark-green;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .first:before {
    content: url("../../assets/img/home.png");
    margin-right: 6px;
  }

  .second:before {
    content: url("../../assets/img/account.png");
    margin-right: 6px;
  }

  .third:before {
    content: url("../../assets/img/cart.png");
    margin-right: 6px;
  }

  .fourth:before {
    content: url("../../assets/img/check.png");
    margin-right: 6px;
  }

  &__settings {
    display: flex;
    color: $dark-green;
  }

  &__setting {
    display: flex;
    justify-items: center;
    background-color: white;
    padding: 0 11px;
    position: relative;
    width: 100px;
  }

  &__setting + &__setting {
    margin-left: 6px;
  }

  &__setting-selected {
    display: flex;
  }

  &__select-menu {
    background-color: grey;
    position: absolute;
    top: 38px;
    left: 0;
    z-index: -1;
    padding: 11px;
    padding-right: 30px;
    width: 100px;
  }

  &__select-item {
    width: 100%;
    border: 1px solid transparent;
  }

  &__select-item + &__select-item {
    margin-top: 11px;
  }

  &__select-item:hover {
    background-color: chocolate;
    border-color: black;
  }

  .language,
  .currency {
    display: flex;
    align-items: center;
    &__name {
      margin-left: 8px;
    }
  }

  .select-btn {
    border: none;
    padding: 0;
    background: none;
    margin-left: 8px;
  }

  .select-btn:hover {
    cursor: pointer;
  }
}

.logo__link {
  margin: 30px 0;
}

.header-bot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &__background {
    background-color: white;
  }

  &__content {
    display: flex;
    margin-right: 30px;
  }

  &__links {
    display: flex;
    font-size: 14px;
    font-weight: 600;
    align-items: center;
    margin-right: 27px;
  }

  &__link {
    color: $light-green-text;
  }

  .or {
    padding: 0 5px;
  }

  &__buts {
    display: flex;
    position: relative;
  }

  &__but + &__but {
    margin-left: 9px;
  }

  &__but {
    position: relative;
    cursor: pointer;
    z-index: 1;
  }

  &__counter {
    position: absolute;
    height: 20px;
    width: 20px;
    border: 2px solid white;
    filter: drop-shadow(0 0 2.5px rgba(0, 0, 1, 0.32));
    z-index: 2;
    background-color: $dark-green;
    border-radius: 50%;
    bottom: 20px;
    left: 20px;
  }

  &__counter-nums {
    display: table;
    font-size: 14px;
    color: white;
    margin: 0 auto;
    line-height: 20px;
  }
}

.router-link-exact-active {
  color: $light-grey;
}

.lang-enter-active {
  transition: leave 1s;
}

.lang-leave-active {
  transition: leave 1s reverse;
}

.cur-enter-active,
.cur-leave-active {
  transition: 0.5s;
}

@keyframes enter {
  0% {
    transform: translateY(-100%);
  }
  50% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0%);
  }
}

@keyframes leave {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
}

</style>