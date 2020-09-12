import { DragType } from '../enums';
import { actionTypes as editorActions } from '../store/editor';
import { actionTypes as pageActions } from '../store/page';
import CreateNodePayload from '../store/editor/actions/create-node/payload';
import MoveNodePayload from '../store/page/actions/move-node/payload';

export default {
  methods: {
    onDragEnter(event: DragEvent): void {
      event.preventDefault();
      event.stopPropagation();
    },
    onDragOver(event: DragEvent): void {
      event.preventDefault();
      event.stopPropagation();
    },
    onDrop(event: DragEvent) {
      const widget = event.dataTransfer.getData(DragType.Widget);
      const node = event.dataTransfer.getData(DragType.Node);

      if (widget) {
        this.createNode(widget);
      } else if(node) {
        this.moveNode(node);
      }

      if (!widget && !node) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
    createNode(widget: string): void {
      const payload: CreateNodePayload = {
        refNode: this.node,
        widget
      };

      this.$store.dispatch('editor/' + editorActions.CREATE_NODE, payload);
    },
    moveNode(node: string): void {
      const payload: MoveNodePayload = {
        nodeUuid: node,
        refNode: this.node
      }

      this.$store.dispatch('page/' + pageActions.MOVE_NODE, payload)
    }
  }
};