import { Node } from '@pagebuilder/core';

export default {
  computed: {
    page() {
      return this.$store.state.page;
    }
  },
  mounted() {
    console.log(this.$options.components);
  },
  render(createElement) {
    const elements = [];
    
    this.page.root.children.forEach((child: Node) => {
      elements.push(createElement(child.metadata.component, {
      }));
    });
  
    return createElement('div', elements);
  }
};