<template>
  <div class="currency ruble">
    <p class="currency__symbol"><span v-html="currency[0]"></span></p>
    <p class="currency__name">{{ currency[1] }}</p>
  </div>
</template>

<script>
export default {
  name: "LangDropdawn",
  props: {
    currency: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  methods: {},
};
</script>

<style lang="scss">
.currency {
  &__symbol {
    color: white;
    background-color: $dark-green;
    padding: 0 1px;
  }
}
</style>