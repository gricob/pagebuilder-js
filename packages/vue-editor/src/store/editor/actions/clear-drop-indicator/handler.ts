import { Action } from 'vuex';
import State from '../../state';
import { mutationTypes } from '../..';

const clearDropIndicatorHandler: Action<State, never> = ({state, commit}) => {
  if (state.dropIndicator) {
    state.dropIndicator.parentElement.removeChild(state.dropIndicator);
  }

  commit(mutationTypes.SET_DROP_INDICATOR, null);
}

export default clearDropIndicatorHandler;