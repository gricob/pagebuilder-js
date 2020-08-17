import Action from './action';
import Context from '../models/context';
import OpenOnSidebarPayload from '../store/editor/actions/open-on-sidebar/payload';
import { actionTypes as editorActions } from '../store/editor';

const action: Action = {
  title: 'Edit',
  handler: (ctx: Context) => {
    const payload: OpenOnSidebarPayload = {
      component: ctx.node.metadata.component+'-form',
      options: {
        props: {
          node: ctx.node
        }
      }
    };

    ctx.store.dispatch('editor/' + editorActions.OPEN_ON_SIDEBAR, payload);
  },
};

export default action;