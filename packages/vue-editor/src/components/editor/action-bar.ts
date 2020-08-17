import { Node } from '@pagebuilder/core';
import { Action, editNode, removeNode } from '../../actions';
import Context from '../../models/context';

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
        removeNode
      ];
    },
    dispatchAction(action: Action) {
      const context: Context = {
        node: this.node,
        store: this.$store
      };

      action.handler(context);
    },
  },
  render(createElement) {
    const actions = this.configureActions();
    const actionElements = actions.map(action => createElement('button', {
      domProps: {
        innerHTML: action.label || action.title 
      },
      on: {
        click: () => this.dispatchAction(action),
      }
    }));

    const actionBar = createElement('div', {
      class: 'pb-editor__actionbar'
    }, [actionElements]);

    return createElement('div', {
      class: 'pb-editor__actionbar-wrapper'
    }, [actionBar]);
  }
}