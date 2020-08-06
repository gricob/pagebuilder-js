import { Widget } from '@pagebuilder/core';
import { WIDGET } from '../../types';

export default {
  name: 'Widget',
  props: {
    widget: {
      type: Object as () => Widget,
      required: true,
    }
  },
  methods: {
    dragHandler(event: DragEvent) {
      event.dataTransfer.setData(WIDGET, this.widget.name.toString());
    },
  },
  render(createElement) {
    return createElement('div', {
      class: 'pagebuilder-widget',
      attrs: {
        draggable: true,
      },
      on: {
        dragstart: this.dragHandler
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
