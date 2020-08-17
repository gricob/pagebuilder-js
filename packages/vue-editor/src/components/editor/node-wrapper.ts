import { mapActions } from 'vuex';
import { Node } from '@pagebuilder/core';
import { actionTypes as editorActions } from '../../store/editor';
import { Enum } from '../..';
import { WIDGET } from '../../types';
import DragOverPayload from '../../store/editor/actions/drag-over/payload';
import DropPayload from '../../store/editor/actions/drop/payload';
import ActionBar from './action-bar';

export default {
  props: {
    node: {
      type: Node,
      required: true,
    }
  },
  methods: {
    ...mapActions('editor', [
      editorActions.DRAG_OVER,
      editorActions.DROP,
    ]),
    onDragEnter(event: DragEvent): void {
      event.preventDefault();
      event.stopPropagation();
    },
    onDragOver(event: DragEvent): void {
      const el = event.target as HTMLElement;
      const rect = el.getBoundingClientRect();
      const offset = event.pageY - rect.top;
      const dragOverBefore = offset < (el.offsetHeight / 2);

      const payload: DragOverPayload = {
        refElement: this.$el,
        refNode: this.node,
        position: dragOverBefore
          ? Enum.TargetPosition.Before
          : Enum.TargetPosition.After
      };

      this[editorActions.DRAG_OVER](payload);

      event.preventDefault();
      event.stopPropagation();
    },
    onDrop(event: DragEvent): void {
      const widget = event.dataTransfer.getData(WIDGET);

      if (!widget) {
        return;
      }

      const payload: DropPayload = { 
        refNode: this.node, 
        widget
      };

      this[editorActions.DROP](payload);

      event.preventDefault();
      event.stopPropagation();
    },
  },
  render(createElement) {
    const actionBar = createElement(ActionBar, {
      props: {
        node: this.node
      }
    });
    
    const nodeElement = createElement(this.node.metadata.component, {
      props: {
        node: this.node
      },
    });

    return createElement('div', {
      class: 'pb-editor__widget',
      on: {
        dragover: this.onDragOver,
        dragenter: this.onDragEnter,
        drop: this.onDrop
      }
    }, [actionBar, nodeElement])
  }
}