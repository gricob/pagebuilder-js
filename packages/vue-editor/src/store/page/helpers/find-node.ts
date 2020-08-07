import { Node } from '@pagebuilder/core';

const findNode = (uuid: string, node: Node): Node|null => {
  if (uuid == node.uuid) {
    return node;
  }

  let _node = null;
  let i = 0;

  while (!_node && i < node.children.length) {
    _node = findNode(uuid, node.children[i]);
    ++i;
  }

  return _node;
}

export default findNode;