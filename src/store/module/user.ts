import * as types from '../mutations-types'
export default {
  state: {
    user:null,
  },
  getters: {
    user: (state :any) => state.user
  },
  mutations: {
    [ types.SET_USER ] (state :any,data :any) {
      state.user = data
    }
  },
  actions: {
    setUser (store:any ,data:any) {
      store.commit(types.SET_USER ,data)
    }
  }

}