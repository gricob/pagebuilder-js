import { Node } from "@pagebuilder/core";

export default interface UpdateNodePayload {
  node: Node;
  newData: Record<string, any>;
}