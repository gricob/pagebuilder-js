import { mapActions } from 'vuex';
import { Widget } from '@pagebuilder/core';
import { actionTypes as editorActions } from '../../store/editor';
import { DragType } from '../../enums';

export default {
  name: 'Widget',
  props: {
    widget: {
      type: Object as () => Widget,
      required: true,
    }
  },
  methods: {
    ...mapActions('editor', [editorActions.DRAG_END]),
    handleDrag(event: DragEvent) {
      event.dataTransfer.setData(DragType.Widget, this.widget.name.toString());
    },
  },
  render(createElement) {
    return createElement('div', {
      class: 'pagebuilder-widget',
      attrs: {
        draggable: true,
      },
      on: {
        dragstart: this.handleDrag,
        dragend: this[editorActions.DRAG_END]
      }
    }, [
      createElement('div', {
        class: 'pagebuilder-widget__icon',
        domProps: {
          innerHTML: this.widget.icon,
        }
      }),
      createElement('div', {
        class: 'pagebuilder-widget__label',
      }, this.widget.label)
    ])
  }
};
