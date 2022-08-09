<template>
  <a href="" :class="$style.link" @click.prevent="goBack">
    <span :class="$style.arrow">&lsaquo;</span>
    <span :class="$style.label">Назад</span>
  </a>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.back()
    },
  },
}
</script>

<style lang="scss" module>
@import '~/assets/css/global.scss';
.link {
  color: $baseRed;
  width: 70px;
  height: 29px;
  display: flex;
  justify-content: center;
  align-content: center;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
}

.arrow {
  font-size: 25px;
  font-weight: 500;
  line-height: 21px;
  margin-right: 0.2em;
}

.label {
  font-size: 17px;
  line-height: 24px;
}
</style>
