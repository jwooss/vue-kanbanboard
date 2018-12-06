import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store(
  {
    state,
    getters,
    mutations,
    actions,
  }
)

const { token } = localStorage
store.commit('LOGIN', token)

export default store
