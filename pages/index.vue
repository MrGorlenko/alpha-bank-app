<template>
  <div>
    <template v-if="!isLoaded">
      <div
        :class="'d-flex justify-content-center align-items-center flex-column main'"
      >
        <preload-page />
      </div>
    </template>

    <template v-else>
      <burger-menu-wrapper>
        <div :class="'d-flex  align-items-center flex-column main'">
          <img
            :src="require('~/static/icon.png')"
            :class="'icon global-icon'"
            alt="1"
          />
          <h1 :class="'title'">Добро пожаловать!</h1>
          <h3 :class="'subtitle'">
            Выберите, пожалуйста, какой продукт вас интересует
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

  computed: {
    isLoaded() {
      return this.$store.getters.is_loaded
    },
  },

  created() {
    this.loadPage()
  },

  methods: {
    loadPage() {
      if (this.isLoaded) return
      setTimeout(() => {
        this.loaded = true
        this.$store.dispatch('load')
      }, 3000)
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
