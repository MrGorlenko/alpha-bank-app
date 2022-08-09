<template>
  <div :class="[$style.wrapper, !isError ? '' : $style['red-outline']]">
    <label
      :for="id"
      :class="[$style.label, value || focused ? $style['label-top'] : '']"
      >{{ label }}</label
    >
    <input
      :id="id"
      v-model="model"
      :type="type"
      :class="$style.input"
      @focus="focusHandler"
      @blur="blurHandler"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: { type: String, default: 'text' },
    id: { type: [String, Number], default: null },
    label: { type: String, default: '' },
    value: { type: String, default: '' },
    isError: { type: Boolean, default: false },
  },
  data() {
    return {
      focused: false,
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
    isErrorReactive() {
      return this.isError
    },
  },
  methods: {
    focusHandler() {
      this.focused = true
    },
    blurHandler() {
      this.focused = false
    },
  },
}
</script>

<style lang="scss" module>
@import '~/assets/css/global.scss';
.wrapper {
  position: relative;
  background: #f6f5f6;
  border-radius: 10px;
  height: 44px;
}

.red-outline {
  border: 1px solid $baseRed;
}

.label {
  color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 10px;
  left: 10px;
  margin-bottom: 0;
  transition: 0.2s ease;
}

.input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  border-radius: 10px;
  outline: none;
  padding-left: 10px;
}

.label-top {
  font-size: 12px;
  top: 0;
}
</style>
