<template>
  <button :class="[$style.button, buttonColor]" @click="click">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'base',
    },
  },
  computed: {
    buttonColor() {
      switch (this.type) {
        case 'base': {
          return this.$style['button-red']
        }
        case 'close': {
          return this.$style['button-gray']
        }
      }
      return ''
    },
  },
  methods: {
    click() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" module>
@import '~/assets/css/global.scss';
.button {
  width: 100%;
  height: 44px;
  border-radius: 10px;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
}

.button-red {
  background: $baseRed;
  color: #fff;
}

.button-gray {
  background: #f6f5f6;
  color: #000;
}
</style>
