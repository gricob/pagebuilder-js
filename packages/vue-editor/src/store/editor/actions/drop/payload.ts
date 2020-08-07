import { Node } from "@pagebuilder/core";
import { TargetPosition } from "../../../../enums";

export default interface DropPayload {
  widget: string;
  refNode?: Node;
}
