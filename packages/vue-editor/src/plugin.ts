import { Store } from 'vuex';
import { Configuration } from "@pagebuilder/core";
import { Widget } from "./models";
import modules from './store';

export default {
  install(Vue, config: Configuration) {
    Vue.prototype.$editor = config;

    this.registerStoreModules(Vue);
    this.setupWidgets(Vue, config.widgets);
  },
  registerStoreModules(Vue) {
    const store: Store<any> = Vue.store;

    if (!store) {
      throw new Error('Store is not present. Did you forget to call Vue.use(Vuex) before Vue.use(PageBuilder)?');
    }

    Object.keys(modules).forEach(name => store.registerModule(name, modules[name]));
  },
  setupWidgets(Vue, widgets: Widget[]) {
    widgets.forEach(widget => {
      widget.setup(Vue);
    })
  }
}