import { TargetPosition } from "../../../../enums";

export default interface DragOverPayload {
  refElement: HTMLElement,
  refNode: Node; 
  position: TargetPosition
}