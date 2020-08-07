import { Node } from '@pagebuilder/core';

export default {
  computed: {
    root() {
      return this.$store.state.page.root;
    }
  },
  render(createElement) {
    const elements = [];
    
    this.root.children.forEach((child: Node) => {
      elements.push(createElement(child.metadata.component, {
        props: {
          node: child,
          parent: this.root
        }
      }));
    });
  
    return createElement('div', elements);
  }
};