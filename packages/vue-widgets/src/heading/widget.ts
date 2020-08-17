import { VueConstructor, Component } from 'vue';
import { Heading as BaseHeading } from '@pagebuilder/widgets';
import { Models, componentRegistry, formRegistry } from '@pagebuilder/vue-editor';
import form from './form';
import component from './component';

export default class Heading extends BaseHeading implements Models.Widget {
  setup(): void {
    componentRegistry.register(this.name, component);
    formRegistry.register(this.name, form);
  }
}
