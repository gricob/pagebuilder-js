import { Component } from "vue";

export default interface RegistryInterface {
  register(type: string, form: Component): void;
  getAll(): Record<string, Component>;
}