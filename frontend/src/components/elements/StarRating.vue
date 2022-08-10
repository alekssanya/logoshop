<template>
<div class="rating">
  <div class="rating__body">
    <div class="rating__active"></div>
    <div class="rating__items">
      <input type="radio" class="rating__item" name="rating" value="1"/>
      <input type="radio" class="rating__item" name="rating" value="2"/>
      <input type="radio" class="rating__item" name="rating" value="3"/>
      <input type="radio" class="rating__item" name="rating" value="4"/>
      <input type="radio" class="rating__item" name="rating" value="5"/>
    </div>
  </div>
  <div class="rating__value">{{grade}}</div>
  </div>
</template>

<script>
export default {
    name: "StarRating",
    props: {
        grade: {
            type: String,
            default: "0"
        }
    }
};
</script>

<style lang="scss">
.rating{
    display: flex;
    align-items: flex-end;
    
    &__body{
        position: relative;
    }

    &__body::before{
        content: "★★★★★";
        display: block;
    }

    &__items{
        display: flex;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    &__item{
        flex: 0 0 20%;
        height: 100%;
        opacity: 0;
    }

    &__active{
        position: absolute;
        width: 0%;
        height: 100%;
        top: 0;
        left: 0;
        overflow: hidden;
    }

    &__active::before{
        content: "★★★★★";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        color: green;
    }
}
</style>