import { Node } from "@pagebuilder/core";

export default interface MoveNodePayload {
  nodeUuid: string;
  refNode: Node;
}