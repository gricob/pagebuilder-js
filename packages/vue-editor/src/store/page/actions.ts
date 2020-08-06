import Types from './types';
import { Node } from '@pagebuilder/core';
import { ActionTree } from 'vuex';
import State from './state';

const findNode = (uuid: string, node: Node): Node|null => {
  if (uuid == node.uuid) {
    return node;
  }

  let _node = null;
  let i = 0;

  while (!_node && i < node.children.length) {
    _node = findNode(uuid, node.children[i]);
    ++i;
  }

  return _node;
}

const actions: ActionTree<State, any> = {
  [Types.ACTION.SET_PAGE]({ commit }, { root }) {
    commit(Types.MUTATION.SET_ROOT, root);
  },
  [Types.ACTION.INSERT_BEFORE]({ commit, state }, { parent, reference, child }) {
    const root = state.root;
  
    const _parent = findNode(parent.uuid, root);

    if (!_parent) {
      throw new Error(`Unable to found [${parent.uuid}] node`);
    }

    _parent.insertChildBefore(child, reference);

    commit(Types.MUTATION.SET_ROOT, root);
  },
  [Types.ACTION.INSERT_AFTER]({ commit, state }, { parent, reference, child }) {
    const root = state.root;
  
    const _parent = findNode(parent.uuid, root);

    if (!_parent) {
      throw new Error(`Unable to found [${parent.uuid}] node`);
    }

    _parent.insertChildAfter(child, reference);

    commit(Types.MUTATION.SET_ROOT, root);
  }
}

export default actions;