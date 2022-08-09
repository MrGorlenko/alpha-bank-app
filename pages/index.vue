<template>
  <div>
    <template v-if="!loaded">
      <preload-page />
    </template>

    <template v-else>
      <burger-menu-wrapper
        :class="'d-flex justify-content-center align-items-center flex-column main'"
      >
        <img src="~/static/icon.png" :class="'icon'" alt="" />
        <h1 :class="'title'">Добро пожаловать!</h1>
        <h3 :class="'subtitle'">
          Выберите, пожалуйста, какой вопрос вас интересует
        </h3>
        <div class="d-flex flex-wrap justify-content-between container">
          <main-menu-link
            v-for="page in pages"
            :key="page.title"
            :class="'cell-link'"
            :link-to="page.link"
            :icon-src="page.icon"
            :label="page.title"
          />
        </div>
      </burger-menu-wrapper>
    </template>
  </div>
</template>

<script>
import MainMenuLink from '../components/main-menu-link.vue'
import preloadPage from '../components/preload-page.vue'
import BurgerMenuWrapper from '../views/burger-menu-wrapper.vue'
export default {
  name: 'IndexPage',

  components: { preloadPage, MainMenuLink, BurgerMenuWrapper },

  data() {
    return {
      loaded: false,
      show_menu: false,
      pages: [
        {
          title: 'Осаго',
          icon: require('~/static/osago-icon.png'),
          link: 'osagoPage',
        },
        {
          title: 'Каско',
          icon: require('~/static/casco-icon.png'),
          link: '',
        },
        {
          title: 'Выезд за рубеж',
          icon: require('~/static/departure-icon.png'),
          link: '',
        },
        {
          title: 'Имущество',
          icon: require('~/static/property-icon.png'),
          link: '',
        },
      ],
    }
  },

  created() {
    setTimeout(() => {
      this.loaded = true
    }, 3000)
  },

  methods: {
    toggleMenu() {
      this.show_menu = !this.show_menu
    },
  },
}
</script>

<style lang="scss" scoped>
.main {
  .loader {
    width: 260px;
    height: 130px;
  }

  .icon {
    width: 80px;
    height: 80px;
  }

  .title,
  .subtitle {
    text-align: center;
  }

  .title {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    font-weight: 500;
    font-size: 17px;
  }

  .subtitle {
    font-weight: 400;
    font-size: 14px;
    opacity: 0.6;
    width: 250px;
    margin-bottom: 2em;
  }

  .cell-link {
    width: 48%;
    height: 90px;
    margin-bottom: 1em;
  }
}

.burger-logo {
  position: absolute;
  top: 1em;
  left: 1em;
}

.burger-links {
  width: 100%;
  a {
    margin-bottom: 1em;
  }
}
</style>
