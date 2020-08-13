import { Action } from 'vuex';
import RemoveNodePayload from './payload';
import State from '../../state';

const handler: Action<State, RemoveNodePayload> = ({}, payload: RemoveNodePayload) => {
  const parent = payload.node.parent;

  parent.removeChild(payload.node);
}

export default handler;