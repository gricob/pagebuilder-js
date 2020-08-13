import { Action } from 'vuex';
import State from '../../state';
import OpenOnSidebarPayload from './payload';
import { formRegistry } from '../../../../services';

const handler: Action<State, OpenOnSidebarPayload> = ({state}, payload: OpenOnSidebarPayload) => {
  state.sidebarComponent = payload.component;
  state.sidebarComponentOptions = payload.options ? payload.options : {};
}

export default handler;