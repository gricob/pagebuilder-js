import Registry from './registry';
import { Component } from 'vue';

const componentRegistry: Registry<Component> = new Registry<Component>();
const formRegistry: Registry<Component> = new Registry<Component>();

export { componentRegistry, formRegistry };