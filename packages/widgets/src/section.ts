import { Node, Widget, NodeFactory } from '@pagebuilder/core';

export default class Section implements Widget {
  name = 'widget-section';
  label = 'Section';
  icon = '<i class="fa fa-columns"></i>';
  constructor() {
    NodeFactory.getInstance().extend(this.name, (options?: any): Node => {
      const node = new Node('section');
        node.attributes.class = 'flex mx-auto';
        node.metadata.component = 'widget-section';
  
        const columnsTemplate: string[] = options?.columnsTemplate ?? ['100%'];
  
        columnsTemplate.forEach(columnClass => {
          const column = new Node('div');
          column.attributes.class = columnClass;
          column.metadata.acceptChildren = true;
  
          node.appendChild(column);
        });
      
        return node;
    });
  }
}
