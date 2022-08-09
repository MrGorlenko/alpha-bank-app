<template>
  <div :class="$style.block" @click="toggleShowAnswer">
    <p :class="$style.question">
      {{ question }}
    </p>

    <p v-if="show_answer" :class="$style.answer">{{ answer }}</p>

    <button :class="$style.button">
      <img
        :src="
          !show_answer
            ? require('~/static/plus.svg')
            : require('~/static/minus.svg')
        "
        alt=""
      />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: String,
      default: '',
    },
    answer: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      show_answer: false,
    }
  },
  methods: {
    toggleShowAnswer() {
      this.show_answer = !this.show_answer
    },
  },
}
</script>

<style lang="scss" module>
.block {
  position: relative;
  background: #ffffff;
  box-shadow: 0px 5px 24px rgba(48, 40, 98, 0.06);
  border-radius: 10px;
  padding: 1.4em 0.6em;
}

.question {
  font-weight: 400;
  font-size: 17px;
  margin-top: 0;
  margin-bottom: 0;
  width: 95%;
}

.answer {
  font-weight: 400;
  font-size: 14px;
  color: rgba($color: #000000, $alpha: 0.6);
  margin-top: 1em;
}

.button {
  width: 14px;
  height: 14px;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 1.4em;
  right: 1em;
}
</style>
