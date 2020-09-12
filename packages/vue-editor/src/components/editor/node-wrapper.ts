import { mapActions } from 'vuex';
import { Node } from '@pagebuilder/core';
import { actionTypes as editorActions } from '../../store/editor';
import { Enum } from '../..';
import DragOverPayload from '../../store/editor/actions/drag-over/payload';
import CreateNodePayload from '../../store/editor/actions/create-node/payload';
import ActionBar from './action-bar';
import { DragType } from '../../enums';

export default {
  props: {
    node: {
      type: Node,
      required: true,
    }
  },
  computed: {
    isFormOpen() {
      return this.node === this.$store.state.editor.sidebarComponentOptions?.props?.node;
    }
  },
  methods: {
    ...mapActions('editor', [
      editorActions.DRAG_OVER,
      editorActions.CREATE_NODE,
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
      const widget = event.dataTransfer.getData(DragType.Widget);

      if (!widget) {
        return;
      }

      const payload: CreateNodePayload = { 
        refNode: this.node, 
        widget
      };

      this[editorActions.CREATE_NODE](payload);

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
      class: {
        'pb-editor__widget': true,
        'is-form-open': this.isFormOpen,
      },
      on: {
        dragover: this.onDragOver,
        dragenter: this.onDragEnter,
        drop: this.onDrop
      }
    }, [actionBar, nodeElement])
  }
}