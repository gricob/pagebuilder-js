import { MutationTree } from "vuex";
import { Node } from "@pagebuilder/core";
import State from "../state";

const types: Record<string, string> = {
  SET_ROOT: 'setRoot',
}

const mutations: MutationTree<State> = {
  [types.SET_ROOT](state, root: Node) {
    state.root = root;
  }
}

export { types };
export default mutations;