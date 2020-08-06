import { MutationTree } from "vuex";
import { Node } from "@pagebuilder/core";
import State from "./state";
import Types from './types';

const mutations: MutationTree<State> = {
  [Types.MUTATION.SET_ROOT](state, root: Node) {
    state.root = root;
  }
}

export default mutations;