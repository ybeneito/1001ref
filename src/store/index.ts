import { createStore } from 'vuex'

export default createStore({
  state: {
    slider: [20,40],
    tags: [
          {
            "name": "bli",
            "selected": false
        },
        { 
          "name": "bla",
          "selected": true
        },
        { "name": "blou",
          "selected": true
        }
        ]
  },
  mutations: {
    getAsked(state){
      const askedPrice = state.slider
      const askedTags = state.tags.filter(tag => tag.selected == true)
      console.log(askedTags, askedPrice)
    }
  },
  getters: {
    getState(state) {
      return state
    }
  },
  actions: {
  },
  modules: {
  }
})
