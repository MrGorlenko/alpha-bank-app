<template>
  <div
    :class="'d-flex justify-content-center align-items-center flex-column h-100 w-100 main'"
  >
    <burger-icon
      class="burger-icon"
      :active="show_menu"
      @toggleBurger="toggleMenu"
    />

    <template v-if="!show_menu"><slot></slot></template>

    <template v-else>
      <img
        :src="require('~/static/circle-logo.png')"
        :class="[$style['burger-logo'], 'global-icon']"
        alt="2"
      />
      <div class="container">
        <div :class="[$style['burger-links']]">
          <burger-menu-link
            v-for="page in burger_pages"
            :key="page.title"
            :label="page.title"
            :link-to="page.link"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import BurgerMenuLink from '~/components/burger-menu-link.vue'
import BurgerIcon from '~/components/burger-icon.vue'

import '~/assets/css/global.scss'
export default {
  name: 'BurgerMenu',
  components: { BurgerMenuLink, BurgerIcon },
  data() {
    return {
      show_menu: false,
      burger_pages: [
        {
          title: 'Частые вопросы',
          link: 'faqPage',
        },
        {
          title: 'О компании',
          link: 'aboutPage',
        },
        {
          title: 'График роста пользователей',
          link: 'graphPage',
        },
      ],
    }
  },
  methods: {
    toggleMenu() {
      this.show_menu = !this.show_menu
    },
  },
}
</script>

<style lang="scss" module>
.burger-logo {
  position: absolute;
  top: 1em;
  left: 1em;
}

.burger-links {
  padding-top: 5em;
  width: 100%;
  a {
    margin-bottom: 1em;
  }
}
</style>
