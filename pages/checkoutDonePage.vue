<template>
  <div :class="'main container'">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <img :class="'icon'" src="~/static/checkout-done-icon.svg" alt="" />
      <h2 :class="'header'">Страховка оплачена</h2>
      <button-widget
        :class="'button'"
        :label="'Вернуться на главную'"
        @click="goToIndex"
      />
      <button-widget :class="'button'" :label="'Закрыть бот'" :type="'close'" />
    </div>
  </div>
</template>

<script>
import ButtonWidget from '~/components/button-widget.vue'
export default {
  components: {
    ButtonWidget,
  },
  methods: {
    goToIndex() {
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
.main {
  padding-top: 4em;

  .header {
    font-weight: 500;
    font-size: 18px;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }

  .button {
    margin-bottom: 1em;
  }
}
</style>
