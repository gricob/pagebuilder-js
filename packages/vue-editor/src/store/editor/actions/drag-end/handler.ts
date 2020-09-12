import { Action } from "vuex";
import State from "../../state";
import { mutationTypes } from '../..';
import { types } from '..';

const dragEndHandler: Action<State, DragEvent> = ({dispatch, commit, state}, event: DragEvent) => {
  dispatch(types.CLEAR_DROP_INDICATOR);

  commit(mutationTypes.SET_DROP_TARGET_NODE, null);
}

export default dragEndHandler;