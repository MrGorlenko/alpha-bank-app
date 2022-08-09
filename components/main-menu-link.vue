<template>
  <div :class="[$style['link-wrapper'], 'd-flex justify-content-center']">
    <nuxt-link
      :to="linkTo"
      class="d-flex justify-content-center align-items-center flex-column"
    >
      <img :src="iconSrc" alt="" />
      <p>{{ label }}</p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    linkTo: {
      type: String,
      default: '',
    },
    iconSrc: {
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
@import '~/assets/css/global.scss';
.link-wrapper {
  background: #ffffff;
  box-shadow: 0px 5px 24px rgba(48, 40, 98, 0.06);
  border-radius: 10px;

  p {
    color: rgba(0, 0, 0, 0.5);
    margin-top: 0.5em;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 0;
  }

  a {
    width: 100%;
    height: 100%;
  }
}
</style>
