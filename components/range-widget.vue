<template>
  <div :class="$style.wrapper">
    <input
      :id="id"
      v-model="model"
      v-touch:moving="movingHandler"
      v-touch="toucheHandler"
      type="range"
      :name="name"
      :min="min"
      :max="max"
    />
    <div :class="$style['range-before']" :style="rangeBeforeWidth"></div>
    <div :class="$style['range-after']"></div>

    <div :class="[$style.indicators, 'd-flex justify-content-between']">
      <span>{{ minLabel }}</span
      ><span>{{ mediumLabel }}</span
      ><span>{{ maxLabel }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 0,
    },
    minLabel: { type: String, default: '' },
    mediumLabel: { type: String, default: '' },
    maxLabel: { type: String, default: '' },
    name: {
      type: String,
      default: '',
    },
    value: {
      type: [Number, String],
      default: null,
    },
  },

  data() {
    return {
      xPosition: 0,
    }
  },

  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
    rangeBeforeWidth() {
      return { width: this.xPosition - 5.5 + 'px' }
    },
  },

  methods: {
    movingHandler(event) {
      if (event.touches[0].clientX >= event.target.clientWidth + 1) return
      this.xPosition = event.touches[0].clientX
    },
    toucheHandler(event) {
      if (event.changedTouches[0].clientX >= event.target.clientWidth + 1)
        return
      this.xPosition = event.changedTouches[0].clientX
    },
  },
}
</script>

<style lang="scss" module>
@import '~/assets/css/global.scss';
.wrapper {
  position: relative;
  input {
    width: 100%;
  }

  .range-before {
    height: 8px;
    position: absolute;
    top: 10px;
    border-radius: 10px;
    left: 0;
    z-index: 2;
    background: $baseRed;
  }

  .range-after {
    z-index: 1;
    height: 8px;
    position: absolute;
    top: 10px;
    border-radius: 10px;
    left: 0;
    width: 100%;
    background: rgba($color: #000000, $alpha: 0.1);
  }

  input[type='range'] {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 5em;
    height: 0.5rem;
  }

  input[type='range']::-webkit-slider-runnable-track,
  input[type='range']::-moz-range-track {
    background: $baseRed;
    background-color: $baseRed;
    border-radius: 5em;
    height: 0.5rem;
    z-index: 3;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    background: $baseRed;
    background-color: $baseRed;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    z-index: 3;
  }

  .indicators {
    span {
      width: 65px;
      display: block;
      font-weight: 400;
      font-size: 14px;
      color: rgba($color: #000000, $alpha: 0.5);
    }
  }
}
</style>
