import { Action } from 'vuex';
import State from '../../state';
import UpdateNodePayload from './payload';

const handler: Action<State, UpdateNodePayload> = ({}, payload: UpdateNodePayload) => {
  const node = payload.node;
  const newData = payload.newData;

  for (const attr in newData) {
    node[attr] = newData[attr];
  }
}

export default handler;