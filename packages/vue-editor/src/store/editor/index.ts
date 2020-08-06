import State from "./state"
import mutations from './mutations';
import actions from './actions';

const state: State = {
  widgets: [],
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}