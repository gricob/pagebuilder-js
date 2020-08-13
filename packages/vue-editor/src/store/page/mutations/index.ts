import { MutationTree } from "vuex";
import { Node } from "@pagebuilder/core";
import State from "../state";

const types: Record<string, string> = {
  SET_ROOT: 'setRoot',
  SET_STYLESHEETS: 'setStylesheets',
}

const mutations: MutationTree<State> = {
  [types.SET_ROOT](state, root: Node) {
    state.root = root;
  },
  [types.SET_STYLESHEETS](state, stylesheets: string[]) {
    state.stylesheets = stylesheets;
  }
}

export { types };
export default mutations;