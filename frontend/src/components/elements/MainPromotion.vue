<template>
  <div class="container">
    <section class="promotion">
      <div class="promotion__img-wr">
        <img
          src="@/assets/img/mainpromotion.png"
          alt=""
          class="promotion__img"
        />
        <div class="promotion__img-discount">
          <p class="promotion__img-discount-first">$2300</p>
          <p class="promotion__img-discount-second">$1150</p>
        </div>
      </div>
      <div class="promotion__wr">
        <p class="promotion__title">50% OFF</p>
        <p class="promotion__subtitle">For walton Primo GH+</p>
        <p class="promotion__text-title">Power packed performance</p>
        <p class="promotion__text">
          Powered by a mighty 1.3 GHz Quad Core Processor and 1 GB fast RAM, the
          Primo GH+ allows seamless multitasking, faster webpage loading,
          smoother UI transitions and ultra fast power-up.
        </p>
        <div class="promotion__timer-wrapper">
          <div class="promotion__timer">
            <div class="promotion__timer-wr">
              <p class="promotion__timer-nums">20</p>
              <p class="promotion__timer-descr">Days</p>
            </div>
            <div class="promotion__timer-wr">
              <p class="promotion__timer-nums">20</p>
              <p class="promotion__timer-descr">Hours</p>
            </div>
            <div class="promotion__timer-wr">
              <p class="promotion__timer-nums">20</p>
              <p class="promotion__timer-descr">Minutes</p>
            </div>
            <div class="promotion__timer-wr">
              <p class="promotion__timer-nums">20</p>
              <p class="promotion__timer-descr">Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MainPromotion",
};
</script>

<style lang="scss">
.promotion {
  display: flex;
  border: 2px solid $dark-grey;

  &__img-wr{
    position: relative;
    width: 50%;
  }

  &__img-discount {
    position: absolute;
    font-size: 30px;
    font-weight: 700;
    background-color: $dark-green;
    border-radius: 50%;
    padding: 46px;
    top: 0;
    right: 0;
  }

  &__img-discount-first {
    text-decoration: line-through;
    color: #cbcbcb;
    margin-bottom: 20px;
  }

  &__img-discount-second {
    color: white;
  }

  &__wr {
    margin-left: 25px;
    margin-right: 50px;
  }

  &__title {
    font-size: 72px;
    letter-spacing: 3px;
    color: $dark-green-text;
    font-weight: 700;
    padding-top: 34px;
    margin-bottom: 26px;
  }

  &__subtitle {
    font-size: 30px;
    letter-spacing: 1px;
    color: #434343;
    font-weight: 700;
    margin-bottom: 30px;
  }

  &__text-title {
    font-size: 20px;
    letter-spacing: 1px;
    color: $dark-green-text;
    font-weight: 400;
    margin-bottom: 30px;
  }

  &__text {
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 21px;
    color: #484848;
    font-weight: 300;
    width: 407px;
    margin-bottom: 30px;
  }

  &__timer-wrapper {
    display: table;
    margin: 0 auto;
  }

  &__timer {
    display: flex;
    margin: 0 auto;
    margin-bottom: 13px;
  }

  &__timer-wr {
    background-color: $dark-green;
    height: 62px;
    width: 62px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    justify-content: space-evenly;
  }

  &__timer-wr + &__timer-wr {
    margin-left: 15px;
  }

  &__timer-nums {
    font-size: 30px;
    color: #ffffff;
    font-weight: 700;
  }

  &__timer-descr {
    font-size: 12px;
    color: #ffffff;
    font-weight: 300;
  }
}
</style>