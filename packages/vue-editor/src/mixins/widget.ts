import { mapActions } from 'vuex';
import { Node } from '@pagebuilder/core';
import { actionTypes as editorActions } from '../store/editor';
import { WIDGET } from '../types';
import { Enum } from '..';
import DragOverPayload from '../store/editor/actions/drag-over/payload';
import DropPayload from '../store/editor/actions/drop/payload';

const Widget = {
  props: {
    node: {
      type: Node,
      required: true,
    },
    parent: {
      type: Node,
      required: true,
    },
  },
  mounted() {
    if (!this.node.metadata || this.node.metadata.acceptChildren) {
      return;
    }

    this.setUpListeners();
  },
  methods: {
    setUpListeners() {
      const el: HTMLElement = this.$el;

      el.addEventListener('dragenter', this.handleDragEnter);
      el.addEventListener('dragover', this.handleDragOver);
      el.addEventListener('drop', this.handleDrop);
    },
    ...mapActions('editor', [
      editorActions.DRAG_OVER,
      editorActions.DROP
    ]),
    handleDragEnter(event: DragEvent): void {
      event.preventDefault();
      event.stopPropagation();
    },
    handleDragOver(event: DragEvent): void {
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
    handleDrop(event: DragEvent): void {
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
    }
  }
};

export default Widget;
