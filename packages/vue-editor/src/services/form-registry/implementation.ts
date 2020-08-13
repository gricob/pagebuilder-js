import { Component } from "vue";
import FormRegistryInterface from "./interface";

export default class FormRegistry implements FormRegistryInterface {
  private registry: Record<string, Component> = {};

  register(type: string, form: Component) {
    this.registry[type] = form;
  }

  getAll(): Record<string, Component> {
    return this.registry;
  }
}