<template>
  <button :class="$style.burger" @click="toggleBurger">
    <img
      :src="
        !isActive
          ? require('~/static/burger.svg')
          : require('~/static/burger-close.svg')
      "
      alt=""
    />
  </button>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isActive() {
      return this.active
    },
  },
  methods: {
    toggleBurger() {
      this.$emit('toggleBurger')
    },
  },
}
</script>

<style lang="scss" module>
.burger {
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
