import { Configuration as BaseConfiguration } from '@pagebuilder/core';
import Widget from './widget';

export default interface Configuration extends BaseConfiguration {
  widgets: Widget[]
}