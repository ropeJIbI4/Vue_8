import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      currentSlide: 0
    }
  },
  mutations: {
    setCurrentSlide(state, slide) {
      state.currentSlide = slide
    }
  }
})