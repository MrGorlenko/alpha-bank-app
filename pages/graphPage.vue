<template>
  <burger-menu-wrapper>
    <div class="container">
      <back-link :class="'back-link'" />
      <h2 :class="'title'">График прироста пользователей</h2>
      <img class="graph" src="~/static/graph.png" alt="" />
      <div class="paragraphs">
        <p class="paragraph">
          Клиентами «АльфаСтрахование» уже являются более 16 млн человек и свыше
          113 тыс. предприятий.
        </p>
        <p class="paragraph">
          Надежность и финансовую устойчивость компании подтверждают рейтинги
          ведущих рейтинговых агентств: ruАAA по шкале «Эксперт РА», ААА|ru| по
          шкале «Национального Рейтингового Агентства» и AAA.ru по шкале
          «Национальные Кредитные Рейтинги» (НКР).
        </p>
      </div>
    </div>
  </burger-menu-wrapper>
</template>

<script>
import burgerMenuWrapper from '~/views/burger-menu-wrapper.vue'
export default {
  components: { burgerMenuWrapper },
}
</script>

<style lang="scss" scoped>
.title {
  font-weight: 500;
  font-size: 17px;
  text-align: center;
  width: 80%;
  margin: auto;
}

.paragraphs {
  padding-top: 2em;
}

.graph {
  width: 100%;
  object-fit: contain;
  margin-top: 2em;
}
</style>
