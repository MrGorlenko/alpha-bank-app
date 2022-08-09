<template>
  <div :class="'main container'">
    <back-link :class="'back-link'" />
    <form :class="'form'" action="" @submit.prevent="submitHandler">
      <h2 :class="'title'">Данные страхователя</h2>
      <input-widget
        :id="'fio'"
        v-model="fio"
        :value="fio"
        :label="'ФИО'"
        :class="'input'"
        :is-error="submited && !fio"
      />
      <input-widget
        :id="'phone'"
        v-model="phone"
        :type="'phone'"
        :value="phone"
        :label="'Телефон'"
        :class="'input'"
        :is-error="submited && !phone"
      />
      <input-widget
        :id="'email'"
        v-model="email"
        :type="'email'"
        :value="email"
        :label="'Email'"
        :class="'input'"
        :is-error="submited && !email"
      />
      <input-widget
        :id="'insurant'"
        v-model="insurant"
        :value="insurant"
        :label="'Страхователь'"
        :class="'input'"
        :is-error="submited && !insurant"
      />
      <button-widget :label="'Оплатить'" />

      <p :class="'agreement'">
        Нажимая кнопку «Оплатить», вы даёте согласие на
        <a target="_blank" href="https://gdpr.eu/data-processing-agreement/">
          Обработку персональных данных
        </a>
      </p>
    </form>
  </div>
</template>

<script>
import backLink from '~/components/back-link.vue'
import ButtonWidget from '~/components/button-widget.vue'
import InputWidget from '~/components/input-widget.vue'
export default {
  components: { backLink, InputWidget, ButtonWidget },
  data() {
    return {
      fio: '',
      phone: '',
      email: '',
      insurant: '',

      submited: false,
    }
  },
  methods: {
    submitHandler() {
      this.submited = true
      const conditions = this.fio && this.phone && this.email && this.insurant
      if (!conditions) return
      this.$router.push('checkoutDonePage')
    },
  },
}
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  position: relative;
  padding-top: 3em;
  padding-bottom: 3em;

  .title {
    font-weight: 500;
    font-size: 30px;
    margin-bottom: 1em;
  }
}

.input {
  margin-bottom: 1em;
}

.agreement {
  margin-top: 1em;
  font-weight: 400;
  font-size: 14px;
  color: rgba($color: #000000, $alpha: 0.5);

  a {
    color: #000000;
    text-decoration: underline;
  }
}
</style>
