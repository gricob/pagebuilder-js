import { MutationTree } from 'vuex';
import State from '../state';
import { Widget } from '../../../models';
import { Node } from '@pagebuilder/core';
import { TargetPosition } from '../../../enums';

const types: Record<string, string> = {
  SET_WIDGETS: 'setWidgets',
  SET_DROP_INDICATOR: 'setDropIndicator',
  SET_DROP_TARGET_NODE: 'setDropTargetNode',
  SET_DROP_POSITION: 'setDropPosition',
};

const actions: MutationTree<State> = {
  [types.SET_WIDGETS](state, widgets: Widget[]) {
    state.widgets = widgets;
  },
  [types.SET_DROP_INDICATOR](state, el: HTMLElement | null) {
    state.dropIndicator = el;
  },
  [types.SET_DROP_TARGET_NODE](state, node: Node | null) {
    state.dropTargetNode = node;
  },
  [types.SET_DROP_POSITION](state, position: TargetPosition | null) {
    state.dropPosition = position;
  }
}

export { types };
export default actions;