import { Action } from "vuex";
import State from "../../state";
import { mutationTypes } from '../..';
import { types } from '..';

const createDropIndicatorHandler: Action<State, DragEvent> = ({dispatch, commit, state}, sibling: HTMLElement) => {
  if (state.dropIndicator !== null && state.dropIndicator === sibling) {
    return;
  }

  dispatch(types.CLEAR_DROP_INDICATOR);

  const indicator: HTMLDivElement = document.createElement('div');
  indicator.className = 'pagebuilder__drop-indicator';
  indicator.style.borderBottom = '8px solid red';
  indicator.style.height = '0';

  commit(mutationTypes.SET_DROP_INDICATOR, indicator)
}

export default createDropIndicatorHandler;