<template>
  <nuxt-link :class="$style.link" :to="linkTo">
    <span>{{ label }}</span>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    linkTo: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" module>
.link {
  background: #ffffff;
  box-shadow: 0px 5px 24px rgba(48, 40, 98, 0.06);
  border-radius: 10px;
  padding: 20px 15px;
  display: block;
  text-decoration: none;
  span {
    font-weight: 500;
    font-size: 17px;
    text-align: center;
    width: 100%;
    display: block;
    color: #000;
  }
}
</style>
