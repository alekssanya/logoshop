<template>
  <section class="prefooter">
      <div class="container">
        <div class="prefooter__inner">
            <div class="prefooter__wrapper borrad">
                <div class="prefooter__wr">
                <img src="../../assets/img/airplane.png" alt="" class="prefooter__img">
                <div class="prefooter__cont">
                    <p class="prefooter__title">{{$t('prefooter.cont1[0]')}}</p>
                    <p class="prefooter__text">{{$t('prefooter.cont1[1]')}}</p>
                </div>
                </div>
            </div>
            <div class="prefooter__wrapper borrad">
                <div class="prefooter__wr">
                <img src="../../assets/img/lock.png" alt="" class="prefooter__img">
                <div class="prefooter__cont">
                    <p class="prefooter__title">{{$t('prefooter.cont2[0]')}}</p>
                    <p class="prefooter__text">{{$t('prefooter.cont2[1]')}}</p>
                </div>
                </div>
            </div>
            <div class="prefooter__wrapper borrad">
                <div class="prefooter__wr">
                <img src="../../assets/img/clock.png" alt="" class="prefooter__img">
                <div class="prefooter__cont">
                    <p class="prefooter__title">{{$t('prefooter.cont3[0]')}}</p>
                    <p class="prefooter__text">{{$t('prefooter.cont3[1]')}}</p>
                </div>
                </div>
            </div>
            <div class="prefooter__wrapper borrad">
                <div class="prefooter__wr">
                <img src="../../assets/img/cart2.png" alt="" class="prefooter__img">
                <div class="prefooter__cont">
                    <p class="prefooter__title">{{$t('prefooter.cont4[0]')}}</p>
                    <p class="prefooter__text">{{$t('prefooter.cont4[1]')}}</p>
                </div>
                </div>
            </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: "Prefooter",
}
</script>

<style lang="scss">
.prefooter{
    background-image: url("../../assets/img/prefooter-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 10px 0;
    margin-bottom: 50px;
    &__inner{
    display: flex;
    justify-content: space-between;
    }

    &__wrapper{
        background-color: $dark-green;
        padding: 20px 15px;
        min-width: 200px;
    }

    &__wr{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__cont{
        margin-left: 12px;
    }

    &__title{
        font-size: 18px;
        color: white;
        margin-bottom: 10px;
    }

    &__title:lang(ru){
        font-size: 14px
    }

    &__text{
        font-size: 12px;
    }

    &__text:lang(ru){
        font-size: 10px;
    }
}
</style>