import Vuex from 'vuex';
import { Node } from '@pagebuilder/core';
import State from './state';
import mutations from './mutations';
import actions from './actions';
import Types from './types';

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

export { Types };