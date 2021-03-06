import { Action } from "vuex";
import State from "../../state";
import { mutationTypes } from '../..';
import SetPagePayload from './payload';

const setPage: Action<State, SetPagePayload> = ({commit}, payload: SetPagePayload) => {
  commit(mutationTypes.SET_ROOT, payload.root);
  commit(mutationTypes.SET_STYLESHEETS, payload.stylesheets);
}

export default setPage;