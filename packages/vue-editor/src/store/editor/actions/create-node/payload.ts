import { Node } from "@pagebuilder/core";

export default interface CreateNodePayload {
  widget: string;
  refNode?: Node;
}
