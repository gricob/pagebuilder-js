import { Node } from "@pagebuilder/core";
import { TargetPosition } from "../../../../enums";

export default interface InsertNodePayload {
  ref: Node;
  node: Node;
  position: TargetPosition
}