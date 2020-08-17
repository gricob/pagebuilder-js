import RegistryInterface from "./interface";

export default class Registry<T> implements RegistryInterface {
  private registry: Record<string, T> = {};

  register(type: string, element: T) {
    this.registry[type] = element;
  }

  getAll(): Record<string, T> {
    return this.registry;
  }
}