import Action from './action';
import Context from '../models/context';
import { DragType } from '../enums'
import { actionTypes as editorActions } from '../store/editor'

const action: Action = {
  title: 'Move',
  onDragStart: (ctx: Context) => {
      (ctx.event as DragEvent).dataTransfer.setData(DragType.Node, ctx.node.uuid);
  },
  onDragEnd: (ctx: Context) => {
    ctx.store.dispatch('editor/' + editorActions.DRAG_END)
  }
};

export default action;