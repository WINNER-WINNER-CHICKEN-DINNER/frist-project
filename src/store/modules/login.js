import * as types from '../mutation-types'
import {AuthService} from '../../services/api/auth'

// state
const state = {
  user: {
    refreshToken: localStorage.refreshToken != null ? localStorage.refreshToken : ''
  }
}

// getters
const getters = {
  accessToken: state => {
    return state.accessToken
  }
}

// actions
const actions = {
  login ({commit, state}, data) {
    return AuthService.getLogin()
      .then(loginInfo => {
        commit(types.LOGIN_IN_SUCCESS, {loginInfo: loginInfo})
      })
  }
}

// mutations
const mutations = {
  [types.LOGIN_IN_SUCCESS] (state, {loginInfo}) {
    state.user.accessToken = loginInfo.accessToken
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
