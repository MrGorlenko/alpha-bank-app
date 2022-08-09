<template>
  <div :class="$style.wrapper">
    <input
      :id="id"
      v-model="model"
      type="radio"
      :name="name"
      :value="val"
      :class="$style.radio"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: '',
      type: String,
    },
    val: {
      default: '',
      type: String,
    },
    id: {
      default: '',
      type: String,
    },
    name: {
      default: '',
      type: String,
    },
    label: {
      default: '',
      type: String,
    },
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
  },
}
</script>

<style lang="scss" module>
@import '~/assets/css/global.scss';
.wrapper {
  position: relative;
  display: flex;
  align-items: center;
  height: 43px;

  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);

  label {
    margin-left: 1.3em;
    margin-bottom: 0;
  }
}

.radio {
  width: 100%;
  height: 100%;
  margin-right: 11px;
  position: absolute;
  border-radius: 50%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  &:before {
    position: absolute;
    width: 14px;
    height: 14px;
    content: '';
    display: block;
    top: 1em;
    left: 0;
    border: none;
    background-image: url('~/static/radio-unchecked.svg');
    background-repeat: no-repeat;
    background-size: contain;
  }
  &:checked {
    &:before {
      position: absolute;
      width: 14px;
      height: 14px;
      content: '';
      display: block;
      top: 1em;
      left: 0;
      background-image: url('~/static/radio-checked.svg');
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
}
</style>
