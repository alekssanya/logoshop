<template>
  <div class="price-filter" @mouseup="mouseUpHandler">
    <div class="price-filter__inputs">
      <input
        id="min"
        type="number"
        class="price-filter__input"
        min="0"
        :max="max"
        v-model="inputLeftPrice"
        :onchange="onChange"
      />
      <input
        id="max"
        type="number"
        class="price-filter__input"
        min="0"
        :max="max"
        v-model="inputRightPrice"
        :onchange="onChange"
      />
    </div>
    <div class="price-filter__range">
      <div id="road" class="price-filter__road">
        <div
          class="price-filter__circle"
          id="first-circle"
          @mousedown="mouseDownHandler"
        ></div>
        <div
          class="price-filter__circle"
          id="second-circle"
          @mousedown="mouseDownHandler"
        ></div>
        <div
          class="price-filter__circle-to-circle-road"
          id="circle-to-circle-road"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PriceFilter",
  props: {
    max: {
      type: Number,
      default: 100000,
    },
  },
  data() {
    return {
      circleMouseDown: false,
      currentPos: 0,
      firstLeft: 0,
      secondLeft: 180,
      leftInputCircle: "first-circle",
      rightInputCircle: "second-circle",
      inputLeftPrice: 0,
      inputRightPrice: this.max,
      movedCircle: "",
    };
  },
  methods: {
    onChange(event) {
      let eventValue = event.target.value > this.max ? this.max : event.target.value < 0 ? 0 : event.target.value
      let shift = (180 * ((eventValue * 100) / this.max)) / 100;
      if (event.target.id === "min") {
        document.getElementById(this.leftInputCircle).style.left = shift + "px";
        this.leftInputCircle === "first-circle" ? this.firstLeft = shift : this.secondLeft = shift
      } else {
        document.getElementById(this.rightInputCircle).style.left = shift + "px";
        this.leftInputCircle === "first-circle" ? this.secondLeft = shift : this.firstLeft = shift
      }
      if (this.firstLeft > this.secondLeft && this.leftInputCircle === "first-circle" 
       || this.firstLeft < this.secondLeft && this.leftInputCircle === "second-circle") {
        [this.leftInputCircle, this.rightInputCircle] = [this.rightInputCircle, this.leftInputCircle];
        [this.inputLeftPrice, this.inputRightPrice] = [this.inputRightPrice, this.inputLeftPrice];
      }
      this.setRoad();
    },
    mouseUpHandler() {
      this.circleMouseDown = false;
      document.removeEventListener("mousemove", this.mouseMoveHandler);
    },
    mouseDownHandler(event) {
      event.stopPropagation();
      event.preventDefault();
      this.circleMouseDown = true;
      this.movedCircle = event.target;
      this.currentPos = event.pageX;
      document.addEventListener("mousemove", this.mouseMoveHandler);
    },
    mouseMoveHandler(event) {
      if (this.circleMouseDown === true) {
        let shift = this.currentPos - event.pageX;
        let circleShift = getComputedStyle(this.movedCircle).left.replace("px", "") - shift;
        if (circleShift > 180) {
          this.movedCircle.style.left = "180px";
          circleShift = 180;
        } else if (circleShift < 0) {
          this.movedCircle.style.left = "0px";
          circleShift = 0;
        } else {
          this.movedCircle.style.left = `${circleShift}px`;
        }
        this.currentPos = event.pageX;
        if (this.movedCircle.id === "first-circle") {
          if (this.firstLeft > this.secondLeft) {
            this.inputRightPrice = Math.trunc((this.max * (this.firstLeft * 100)) / 180 / 100);
          } else {
            this.inputLeftPrice = Math.trunc((this.max * (this.firstLeft * 100)) / 180 / 100);
          }
          this.firstLeft = circleShift
        } else {
          if (this.firstLeft > this.secondLeft) {
            this.inputLeftPrice = Math.trunc((this.max * (this.secondLeft * 100)) / 180 / 100);
          } else {
            this.inputRightPrice = Math.trunc((this.max * (this.secondLeft * 100)) / 180 / 100);
          }
          this.secondLeft = circleShift;
        }
        if (this.firstLeft > this.secondLeft && this.leftInputCircle === "first-circle"
         || this.firstLeft < this.secondLeft && this.leftInputCircle === "second-circle") {
          [this.leftInputCircle, this.rightInputCircle] = [this.rightInputCircle, this.leftInputCircle];
        }
      }
      this.setRoad();
    },
    setRoad() {
      let elem = document.getElementById("circle-to-circle-road");
      if (this.leftInputCircle === "first-circle") {
        elem.style.left = this.firstLeft + "px";
        elem.style.width = this.secondLeft - this.firstLeft + "px";
      } else {
        elem.style.left = this.secondLeft + "px";
        elem.style.width = this.firstLeft - this.secondLeft + "px";
      }
    },
  },
  mounted() {
    document.addEventListener("mouseup", this.mouseUpHandler);
  },
  beforeUnmount() {
    document.removeEventListener("mouseup", this.mouseUpHandler);
  },
};
</script>

<style lang="scss">
.price-filter {
  background-color: violet;

  &__range {
    padding: 20px 0;
  }

  &__road {
    position: relative;
    margin: 0 auto;
    width: 200px;
    height: 4px;
    background-color: black;
  }

  &__circle {
    width: 20px;
    height: 20px;
    top: -8px;
    position: absolute;
    z-index: 20;
    border-radius: 50%;
    background-color: green;
  }

  &__circle-to-circle-road {
    position: absolute;
    z-index: 19;
    height: 100%;
    background-color: blue;
    width: 200px;
  }

  #first-circle {
    left: 0px;
  }

  #second-circle {
    left: 180px;
  }
}
</style>