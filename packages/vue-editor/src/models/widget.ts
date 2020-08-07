import { VueConstructor } from 'vue';
import { Widget as BaseWidget } from '@pagebuilder/core';

export default interface Widget extends BaseWidget {
  setup(vue: VueConstructor): void;
}