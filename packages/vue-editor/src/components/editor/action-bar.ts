import { Node } from '@pagebuilder/core';
import { Action, editNode, removeNode, moveNode } from '../../actions';
import Context from '../../models/context';
import { ActionEventType } from '../../enums';

export default {
  props: {
    node: {
      type: Node,
      required: true,
    }
  },
  methods: {
    configureActions(): Action[] {
      return [
        editNode,
        removeNode,
        moveNode
      ];
    },
    dispatchAction(action: Action, eventType: ActionEventType, event: Event) {
      const context: Context = {
        node: this.node,
        store: this.$store,
        event
      };

      if (action[eventType]) {
        action[eventType](context);
      }
    },
  },
  render(createElement) {
    const actions = this.configureActions();

    const actionElements = actions.map(action => {
      const attrs = {}
      if (action[ActionEventType.dragStart]) {
        attrs['draggable'] = true
      }

      return createElement('button', {
        domProps: {
          innerHTML: action.label || action.title 
        },
        attrs,
        on: {
          click: (event: Event) => this.dispatchAction(action, ActionEventType.click, event),
          dragstart: (event: DragEvent) => this.dispatchAction(action, ActionEventType.dragStart, event),
          dragend: (event: DragEvent) => this.dispatchAction(action, ActionEventType.dragEnd, event),
        }
      })
    });

    const actionBar = createElement('div', {
      class: 'pb-editor__actionbar'
    }, [actionElements]);

    return createElement('div', {
      class: 'pb-editor__actionbar-wrapper'
    }, [actionBar]);
  }
}