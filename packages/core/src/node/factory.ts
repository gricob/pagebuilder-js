import Node from './node';

export default class Factory {
  private static instance: Factory;
  private factoryMap: Record<string, Function> = {};

  create(type: string, options?: Record<string, any>): Node {
    if (this.factoryMap[type]) {
      return this.factoryMap[type](options);
    }

    throw new Error(`Type ${type} is not supported. Did you forget to call extend method?`);
  }

  extend(type: string, factory: (options?: any) => Node) {
    this.factoryMap[type] = factory;
  }

  static getInstance(): Factory {
    if (!this.instance) {
      this.instance = new Factory();
    }

    return this.instance;
  }
}
