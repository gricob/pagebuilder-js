import Action from './action';
import Context from '../models/context';
import RemoveNodePayload from '../store/page/actions/remove-node/payload';
import { actionTypes as pageActions } from '../store/page';

const action: Action = {
  title: 'Remove',
  onClick: (ctx: Context) => {
    const payload: RemoveNodePayload = {
      node: ctx.node
    };

    ctx.store.dispatch('page/' + pageActions.REMOVE_NODE, payload);
  },
};

export default action;