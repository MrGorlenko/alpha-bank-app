<template>
  <burger-menu-wrapper>
    <back-link :class="'back-link'" />
    <h2 :class="'title'">О компании</h2>

    <div class="container paragraphs">
      <p class="paragraph">
        «АльфаСтрахование» — крупнейшая частная страховая компания России с
        универсальным портфелем страховых услуг, включающим как комплексные
        программы защиты интересов бизнеса, так и широкий спектр страховых
        продуктов для частных лиц. Компания предлагает более 200 решений по всем
        ключевым видам страхования.
      </p>

      <p class="paragraph">
        Региональная сеть насчитывает 270 филиалов и отделений по всей стране.
      </p>

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
}

.paragraphs {
  padding-top: 2em;
}
</style>
