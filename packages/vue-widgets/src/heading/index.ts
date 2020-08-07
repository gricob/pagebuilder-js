import { VueConstructor } from 'vue';
import { Heading as BaseHeading } from '@pagebuilder/widgets';
import { Mixins, Models } from '@pagebuilder/vue-editor';

export default class Heading extends BaseHeading implements Models.Widget {
  setup(vue: VueConstructor): void {
    const component = vue.extend({
      name: this.name,
      mixins: [Mixins.Widget],
      render(createElement) {
        return createElement(this.node.tagName, this.node.textContent);
      }
    });

    vue.component(this.name, component);
  }
}
