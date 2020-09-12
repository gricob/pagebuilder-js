import { ActionTree } from 'vuex';
import State from '../state';
import dragOverHandler from './drag-over';
import createNode from './create-node';
import clearDropIndicatorHandler from './clear-drop-indicator';
import setConfigurationHandler from './set-configuration';
import dragEndHandler from './drag-end';
import createDropIndicatorHandler from './create-drop-indicator';
import openOnSidebar from './open-on-sidebar';

const types: Record<string, string> = {
  SET_CONFIGURATION: 'setConfiguration',
  DRAG_OVER: 'dragOver',
  CREATE_NODE: 'createNode',
  DRAG_LEAVE: 'dragLeave',
  DRAG_END: 'dragEnd',
  CLEAR_DROP_INDICATOR: 'clearDropIndicator',
  CREATE_DROP_INDICATOR: 'createDropIndicator',
  OPEN_ON_SIDEBAR: 'openOnSidebar',
}

const actions: ActionTree<State, any> = {
  [types.SET_CONFIGURATION]: setConfigurationHandler,
  [types.DRAG_OVER]: dragOverHandler,
  [types.DRAG_END]: dragEndHandler,
  [types.CREATE_NODE]: createNode,
  [types.CLEAR_DROP_INDICATOR]: clearDropIndicatorHandler,
  [types.CREATE_DROP_INDICATOR]: createDropIndicatorHandler,
  [types.OPEN_ON_SIDEBAR]: openOnSidebar,
}

export { types };
export default actions;