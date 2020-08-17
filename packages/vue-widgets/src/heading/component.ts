import { Node } from '@pagebuilder/core';

export default {
  props: {
    node: {
      type: Node,
      required: true,
    },
  },
  render(createElement) {
    return createElement(this.node.tagName, this.node.textContent);
  },
}