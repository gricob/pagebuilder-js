import { v4 as uuidv4 } from 'uuid';
import NodeStyle from './style';

export default class Node {
  readonly uuid: string;

  tagName: string;

  attributes: Record<string, any> = {};

  textContent?: string;

  style: NodeStyle = {};

  children: Node[] = [];

  metadata: Record<string, any> = {};

  constructor(tagName: string) {
    this.uuid = uuidv4();
    this.tagName = tagName;
  }

  insertChildBefore(newNode: Node, existingNode: Node) {
    const index = this.children.indexOf(existingNode);

    if (index < 0) {
      throw new Error(`The node ${existingNode.uuid} is not a child of ${this.uuid}`);
    }

    this.children.splice(index, 0, newNode);
  }

  insertChildAfter(newNode: Node, existingNode: Node) {
    const index = this.children.indexOf(existingNode);

    if (index < 0) {
      throw new Error(`The node ${existingNode.uuid} is not a child of ${this.uuid}`);
    }

    this.children.splice(index + 1, 0, newNode);
  }

  appendChild(child: Node) {
    this.children.push(child);
  }

  hasChildren(): boolean {
    return this.children.length > 0;
  }
}