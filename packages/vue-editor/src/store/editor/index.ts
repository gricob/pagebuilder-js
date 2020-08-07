import State from "./state"
import actions, { types as actionTypes } from './actions';
import mutations, { types as mutationTypes } from './mutations';

const state: State = {
  widgets: [],
  dropIndicator: null,
  dropTargetNode: null,
  dropPosition: null,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

export { actionTypes, mutationTypes };