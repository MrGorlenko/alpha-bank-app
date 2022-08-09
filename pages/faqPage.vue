<template>
  <burger-menu-wrapper>
    <back-link :class="'back-link'" />
    <h2 :class="'title'">Частые вопросы</h2>
    <div class="container">
      <div class="faqs">
        <faq-question-block
          v-for="faq in faqs"
          :key="faq.id"
          :question="faq.question"
          :answer="faq.answer"
        />
      </div>
    </div>
  </burger-menu-wrapper>
</template>

<script>
import FaqQuestionBlock from '~/components/faq-question-block.vue'
import BurgerMenuWrapper from '~/views/burger-menu-wrapper.vue'
export default {
  components: { BurgerMenuWrapper, FaqQuestionBlock },
  data() {
    return {
      faqs: [
        {
          id: 0,
          question: 'Как рассчитать стоимость полиса ОСАГО?',
          answer:
            'Для самостоятельного расчета стоимости полиса ОСАГО воспользуйтесь калькулятором на нашем сайте',
        },
        {
          id: 1,
          question:
            'Куда обращаться для внесения изменений в договор (увеличения периода использования, изменения количества водителей и т.п.)?',
          answer: 'Ответ на вопрос',
        },
        {
          id: 2,
          question:
            'Какие документы необходимы для расторжения договора ОСАГО при продаже ТС?',
          answer: 'Ответ на вопрос',
        },
        {
          id: 3,
          question:
            'Что будет, если допустить ошибку при заполнении данных о водителях?',
          answer: 'Ответ на вопрос',
        },
        {
          id: 4,
          question: 'С какой даты расторгается договор при продаже ТС?',
          answer: 'Ответ на вопрос',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.title {
  font-weight: 500;
  font-size: 17px;
  text-align: center;
}

.faqs {
  & > div {
    margin-top: 1em;
  }
}
</style>
