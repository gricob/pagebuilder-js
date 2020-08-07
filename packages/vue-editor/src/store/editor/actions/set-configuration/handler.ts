import { Action } from "vuex";
import State from "../../state";
import { mutationTypes } from '../..';
import { Configuration } from '../../../../models';

const setConfigurationHandler: Action<State, Configuration> = ({commit}, config: Configuration) => {
  commit(mutationTypes.SET_WIDGETS, config.widgets);
}

export default setConfigurationHandler;