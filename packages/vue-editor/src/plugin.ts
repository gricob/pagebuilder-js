import { Store } from 'vuex';
import { Configuration } from "@pagebuilder/core";
import { Widget } from "./models";
import modules from './store';
import { Widgets, Form, Sidebar, NodeWrapper } from './components';
import { formRegistry, componentRegistry } from './services';

export default {
  install(Vue, config: Configuration) {
    Vue.prototype.$editor = config;

    this.registerStoreModules(Vue);
    this.setupWidgets(Vue, config.widgets);
    this.setupEditorComponents(Vue);
    this.registerComponents(Vue);
    this.registerForms(Vue);
  },
  registerStoreModules(Vue) {
    const store: Store<any> = Vue.store;

    if (!store) {
      throw new Error('Store is not present. Did you forget to call Vue.use(Vuex) before Vue.use(PageBuilder)?');
    }

    Object.keys(modules).forEach(name => store.registerModule(name, modules[name]));
  },
  setupEditorComponents(Vue) {
    Vue.component('PbWidgets', Widgets);
    Vue.component('PbSidebar', Sidebar);
    Vue.component('PbNodeWrapper', NodeWrapper);
    Vue.component('PbFormInput', Form.Input);
    Vue.component('PbFormSelect', Form.Select);
  },
  registerComponents(Vue) {
    const components = componentRegistry.getAll();
    
    for(const widget in components) {
      Vue.component(widget, components[widget]);
    }
  },
  registerForms(Vue) {
    const formComponents = formRegistry.getAll();
    
    for(const widget in formComponents) {
      Vue.component(widget + '-form', formComponents[widget]);
    }
  },
  setupWidgets(Vue, widgets: Widget[]) {
    widgets.forEach(widget => {
      widget.setup();
    })
  }
}