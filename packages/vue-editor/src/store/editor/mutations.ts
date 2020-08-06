import { MutationTree } from 'vuex';
import State from './state';
import Types from './types';
import { Widget } from '../../models';

const actions: MutationTree<State> = {
  [Types.MUTATION.SET_WIDGETS](state, widgets: Widget[]) {
    state.widgets = widgets;
  }
}

export default actions;