import { Action } from 'vuex';
import RemoveNodePayload from './payload';
import State from '../../state';
import { actionTypes as editorActions } from '../../../editor';
import OpenOnSidebarPayload from '../../../editor/actions/open-on-sidebar/payload';

const handler: Action<State, any> = ({dispatch, rootState}, payload: RemoveNodePayload) => {
  const parent = payload.node.parent;

  parent.removeChild(payload.node);

  if(payload.node === rootState.editor.sidebarComponentOptions.props.node) {
    const openOnSidebarPayload: OpenOnSidebarPayload = {
      component: 'pb-widgets',
    };

    dispatch('editor/' + editorActions.OPEN_ON_SIDEBAR, openOnSidebarPayload, { root: true });
  }
}

export default handler;