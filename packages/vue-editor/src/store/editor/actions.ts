import Types from './types';
import { Configuration } from '@pagebuilder/core';
import { ActionTree } from 'vuex';
import State from './state';

const actions: ActionTree<State, any> = {
  [Types.ACTION.SET_CONFIGURATION]({commit}, configuration: Configuration) {
    commit(Types.MUTATION.SET_WIDGETS, configuration.widgets);
  }
}

export default actions;