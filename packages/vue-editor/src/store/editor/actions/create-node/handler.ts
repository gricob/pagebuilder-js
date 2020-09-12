import { Action } from "vuex";
import { NodeFactory } from '@pagebuilder/core';
import State from '../../state';
import CreateNodePayload from './payload';
import { actionTypes, mutationTypes } from '../../';
import { actionTypes as pageActions } from '../../../page';
import InsertNodePayload from "../../../page/actions/insert-node/payload";

const dropHandler: Action<State, any> = ({dispatch, commit, state}, payload: CreateNodePayload) => {
  dispatch(actionTypes.CLEAR_DROP_INDICATOR);

  const node = NodeFactory.getInstance().create(payload.widget);

  const insertNodePayload: InsertNodePayload = {
    ref: payload.refNode ?? state.dropTargetNode,
    node,
    position: state.dropPosition
  }

  commit(mutationTypes.SET_DROP_TARGET_NODE, null);
  dispatch(`page/${pageActions.INSERT_NODE}`, insertNodePayload, { root: true });
}

export default dropHandler;