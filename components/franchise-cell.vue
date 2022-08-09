<template>
  <div :class="$style.cell">
    <span :class="$style['top-label']">
      {{ topLabelReactive }}
    </span>
    <p :class="$style['bottom-label']">
      {{ bottomLabelReactive }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    topLabel: {
      type: String,
      default: '',
    },
    bottomLabel: {
      type: String,
      default: '',
    },
  },
  computed: {
    topLabelReactive() {
      return this.topLabel
    },
    bottomLabelReactive() {
      return this.bottomLabel
    },
  },
}
</script>

<style lang="scss" module>
@import '~/assets/css/global.scss';
.cell {
  background: #ffffff;
  box-shadow: 0px 5px 24px rgba(48, 40, 98, 0.06);
  border-radius: 10px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.top-label {
  display: block;
  font-weight: 400;
  font-size: 14px;
  color: rgba($color: #000000, $alpha: 0.5);
  line-height: 19px;
}

.bottom-label {
  margin-top: 1.5em;
  margin-bottom: 0;
  font-weight: 500;
  font-size: 20px;
  color: $baseRed;
}

.top-label,
.bottom-label {
  text-align: center;
}
</style>
