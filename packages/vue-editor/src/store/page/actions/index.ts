import { Node } from '@pagebuilder/core';
import { ActionTree } from 'vuex';
import State from '../state';
import setPage from './set-page';
import insertNode from './insert-node';
import updateNode from './update-node';

const types: Record<string, string> = {
  SET_PAGE: 'setPage',
  INSERT_NODE: 'insertNode',
  UPDATE_NODE: 'updateNode',
};

const actions: ActionTree<State, any> = {
  [types.SET_PAGE]: setPage,
  [types.INSERT_NODE]: insertNode,
  [types.UPDATE_NODE]: updateNode,
}

export { types };
export default actions;