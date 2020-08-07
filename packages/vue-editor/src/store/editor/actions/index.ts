import { ActionTree } from 'vuex';
import State from '../state';
import dragOverHandler from './drag-over';
import dropHandler from './drop';
import clearDropIndicatorHandler from './clear-drop-indicator';
import setConfigurationHandler from './set-configuration';
import dragEndHandler from './drag-end';
import createDropIndicatorHandler from './create-drop-indicator';

const types: Record<string, string> = {
  SET_CONFIGURATION: 'setConfiguration',
  DRAG_OVER: 'dragOver',
  DROP: 'drop',
  DRAG_LEAVE: 'dragLeave',
  DRAG_END: 'dragEnd',
  CLEAR_DROP_INDICATOR: 'clearDropIndicator',
  CREATE_DROP_INDICATOR: 'createDropIndicator',
}

const actions: ActionTree<State, any> = {
  [types.SET_CONFIGURATION]: setConfigurationHandler,
  [types.DRAG_OVER]: dragOverHandler,
  [types.DRAG_END]: dragEndHandler,
  [types.DROP]: dropHandler,
  [types.CLEAR_DROP_INDICATOR]: clearDropIndicatorHandler,
  [types.CREATE_DROP_INDICATOR]: createDropIndicatorHandler
}

export { types };
export default actions;