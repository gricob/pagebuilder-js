import { Component } from "vue";

export default interface FormRegistryInterface {
  register(type: string, form: Component): void;
  getAll(): Record<string, Component>;
}