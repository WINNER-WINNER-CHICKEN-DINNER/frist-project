import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import { state, mutations } from './mutations'
import login from './modules/login'

Vue.use(Vuex)

let isDebugMode = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    login
  },
  strict: isDebugMode
})

export default store
