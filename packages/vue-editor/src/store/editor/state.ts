import { Widget } from '../../models';
import { Node } from '@pagebuilder/core';
import { TargetPosition } from '../../enums';

export default interface State {
  widgets: Widget[],
  dropIndicator: HTMLElement | null;
  dropTargetNode: Node | null;
  dropPosition: TargetPosition | null;
  sidebarComponent: string;
  sidebarComponentOptions: object;
}