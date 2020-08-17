import { Node } from "@pagebuilder/core";
import { Store } from "vuex";

export default interface Context {
  node: Node;
  store: Store<any>;
}