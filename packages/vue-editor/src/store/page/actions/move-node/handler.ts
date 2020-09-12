import { Action } from 'vuex';
import MoveNodePayload from './payload';
import State from '../../state';
import { TargetPosition } from '../../../../enums';
import { findNode } from '../../helpers'

const handler: Action<State, any> = ({state, rootState}, payload: MoveNodePayload) => {
  const node = findNode(payload.nodeUuid, state.root);
  const ref = payload.refNode ?? rootState.editor.dropTargetNode;
  const relPosition = rootState.editor.dropPosition;

  node.parent.removeChild(node);

  if (relPosition == TargetPosition.After) {
    ref.parent.insertChildAfter(node, ref);
  } else {
    ref.parent.insertChildBefore(node, ref);
  }
};

export default handler;