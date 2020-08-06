import { Node, Widget, NodeFactory } from '@pagebuilder/core';

export default class Heading implements Widget {
  name = 'widget-heading';
  label = 'Heading';
  icon = '<i class="fa fa-heading"></i>';

  constructor() {
    NodeFactory.getInstance().extend(this.name, (options?: any): Node => {
      const node = new Node('h1');
      node.textContent = 'Write your title here';
      node.metadata.component = this.name;
      node.metadata.acceptChildren = false;
    
      return node;
    })
  }
}
