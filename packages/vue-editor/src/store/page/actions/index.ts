import { Node } from '@pagebuilder/core';
import { ActionTree } from 'vuex';
import State from '../state';
import setPage from './set-page';
import insertNode from './insert-node';

const types: Record<string, string> = {
  SET_PAGE: 'setPage',
  INSERT_NODE: 'insertNode',
};

const actions: ActionTree<State, any> = {
  [types.SET_PAGE]: setPage,
  [types.INSERT_NODE]: insertNode,
}

export { types };
export default actions;