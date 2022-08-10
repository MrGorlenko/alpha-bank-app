export const state = () => ({
  is_loaded: false,
})

export const getters = {
  is_loaded: (state) => state.is_loaded,
}

export const mutations = {
  LOAD(state) {
    state.is_loaded = true
  },
}

export const actions = {
  load({ commit }) {
    commit('LOAD')
  },
}
