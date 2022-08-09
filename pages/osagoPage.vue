<template>
  <div :class="'main container'">
    <back-link :class="'back-link'" />
    <h2 :class="'title'">Страхователь</h2>

    <h4 :class="'subtitle'">Размер безусловной франшизы</h4>
    <div class="radios">
      <radio-widget
        v-for="car in cars"
        :id="car.id"
        :key="car.id"
        v-model="selected_car"
        :value="car.id"
        :val="car.id"
        :name="car.title"
        :label="car.title"
      />
    </div>

    <div class="insurance">
      <div class="d-flex justify-content-between">
        <p class="label">Страховая сумма</p>

        <p class="summ">{{ formatNumber(summ) }} ₽</p>
      </div>
      <range-widget
        :id="'insuranse'"
        v-model="summ"
        :min="insurance.min"
        :max="insurance.max"
        :min-label="'0'"
        :medium-label="'7.5 млн ₽'"
        :max-label="'15 млн ₽'"
        :name="'insurance'"
      />
    </div>

    <div class="franchise">
      <p class="label">Франшиза</p>
      <div class="row">
        <div
          v-for="franchise in franchises"
          :key="franchise.id"
          class="col-6 franchis-block"
        >
          <franchise-cell
            :top-label="franchise.top"
            :bottom-label="franchise.bottom"
          />
        </div>
      </div>
    </div>
    <div class="promocode-wrapper">
      <input-widget
        :id="'promocode-input'"
        v-model="promocode"
        :type="'text'"
        :label="'Промокод'"
        :value="promocode"
      />
    </div>

    <div :class="'button-wrapper'">
      <button-widget v-if="!counted" :label="'Расчитать'" @click="count" />
      <button-widget v-else :label="'Оформить'" @click="checkout" />
    </div>
  </div>
</template>

<script>
import backLink from '../components/back-link.vue'
import RadioWidget from '../components/radio-widget.vue'
import RangeWidget from '../components/range-widget.vue'
import FranchiseCell from '~/components/franchise-cell.vue'
import InputWidget from '~/components/input-widget.vue'
import ButtonWidget from '~/components/button-widget.vue'

export default {
  components: {
    backLink,
    RadioWidget,
    RangeWidget,
    FranchiseCell,
    InputWidget,
    ButtonWidget,
  },
  data() {
    return {
      selected_car: '',
      cars: [
        { id: '1', title: 'Lada Granta' },
        { id: '2', title: 'Hyundai Solaris' },
        { id: '3', title: 'BMW 3' },
      ],
      insurance: {
        min: 0,
        max: 15000000,
      },
      franchises: [
        { id: 0, top: 'Срок страхования', bottom: '12 месяцев' },
        {
          id: 1,
          top: 'Минимальная нетто-премия',
          bottom: '1 000 ₽',
        },
      ],
      summ: 0,
      promocode: '',
      counted: false,
    }
  },
  methods: {
    formatNumber(number) {
      if (!number) return 0
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    },
    count() {
      this.franchises[1].top = 'Минимальная стоимость'
      this.franchises[1].bottom = '47,356 ₽'
      this.counted = true
    },
    checkout() {
      this.$router.push('checkoutPage')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/global.scss';
.main {
  height: 100vh;
  position: relative;
  padding-top: 3em;
  padding-bottom: 3em;

  .title {
    font-weight: 500;
    font-size: 30px;
  }

  .subtitle {
    font-weight: 500;
    font-size: 18px;
    margin-top: 1.5em;
  }
}

.insurance,
.franchise,
.promocode-wrapper,
.button-wrapper {
  padding-top: 2em;
}

.insurance {
  .summ {
    font-weight: 500;
    font-size: 18px;
    color: $baseRed;
  }
}

.label {
  font-weight: 500;
  font-size: 18px;
}

.franchis-block {
  div {
    height: 140px;
  }
}
</style>
