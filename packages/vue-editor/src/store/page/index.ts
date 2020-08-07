import Vuex from 'vuex';
import { Node } from '@pagebuilder/core';
import State from './state';
import actions, { types as actionTypes } from './actions';
import mutations, { types as mutationTypes } from './mutations';

const state: State = {
  root: new Node('div'),
  stylesheets: [],
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}

export { actionTypes, mutationTypes };