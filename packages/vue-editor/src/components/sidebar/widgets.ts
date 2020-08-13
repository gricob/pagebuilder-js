import { Widget } from '@pagebuilder/core';
import { Widget as WidgetComponent } from '../atoms';

export default {
  name: 'PbWidgets',
  computed: {
    widgets() {
      return this.$store.state.editor.widgets;
    },
  },
  render(createElement) {
    let widgetElements = [];
    this.widgets.forEach(function(widget) {
      widgetElements.push(
        createElement(WidgetComponent, {
          props: {
            widget
          }
        })
      )
    }.bind(this));

    return createElement('div', {
      class: 'pagebuilder-sidebar__widgets',
    }, widgetElements);
  }
};
