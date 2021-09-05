import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state){
      state.count++
    }
  },
  getters: {
    double: function(state){
      return state.count**2;
    }
  },
  actions: {
    increment : function(context){
      context.commit('increment')
    }
  }
})
