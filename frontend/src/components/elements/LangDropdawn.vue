<template>
  <div class="language">
    <flag :iso="arr[0]" />
    <p class="language__name">{{arr[1]}}</p>
  </div>
</template>

<script>
export default {
  name: "LangDropdawn",
  props: {
    arr: {
        type: Object,
        default: () => {
            return {}
        }
    }
  },
  methods: {
  }
};
</script>

<style>
</style>