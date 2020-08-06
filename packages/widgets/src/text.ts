import { Node, Widget, NodeFactory } from '@pagebuilder/core';

export default class Text implements Widget {
  name = 'widget-text';
  label = 'Text';
  icon = '<i class="fa fa-align-left"></i>';
  constructor() {
    NodeFactory.getInstance().extend(this.name, (options?: any): Node => {
      const node = new Node('p');
      node.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum id ante non varius. In ex orci, accumsan vel hendrerit non, fringilla a velit. Morbi hendrerit pretium urna nec ultricies. Proin a laoreet quam. Vestibulum ipsum nibh, interdum pulvinar ultrices eu, euismod vel lorem. Duis dictum, est vel laoreet accumsan, justo diam pretium metus, eu scelerisque dolor leo et ipsum. Pellentesque lacinia porta nunc, et imperdiet purus sollicitudin sit amet. Sed massa risus, dapibus id nunc sit amet, dapibus elementum justo. Fusce id elit tortor. Maecenas sed odio volutpat, mollis orci at, commodo nulla. Vestibulum nec ante ultrices, euismod est at, fringilla ante. Integer quis libero sapien.';
      node.metadata.acceptChildren = false;
      node.metadata.component = this.name;
    
      return node;
    });
  }
}
