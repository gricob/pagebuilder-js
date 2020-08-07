import { Action } from "vuex";
import { actionTypes, mutationTypes } from '../..';
import State from "../../state";
import { TargetPosition } from '../../../../enums';
import DragOverPayload from "./payload";

const dragOverHandler: Action<State, DragOverPayload> = ({dispatch, commit, state}, payload: DragOverPayload) => {
  dispatch(actionTypes.CREATE_DROP_INDICATOR, payload.refElement.nextSibling);
  commit(mutationTypes.SET_DROP_TARGET_NODE, payload.refNode);
  commit(mutationTypes.SET_DROP_POSITION, payload.position);

  const parent: HTMLElement = payload.refElement.parentElement;

  switch (payload.position) {
    case TargetPosition.After:
      parent.insertBefore(state.dropIndicator, payload.refElement.nextSibling);
      break;
    case TargetPosition.Before:
      parent.insertBefore(state.dropIndicator, payload.refElement);
      break;
  }
}

export default dragOverHandler;