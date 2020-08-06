import { Heading as BaseHeading } from '@pagebuilder/widgets';
import { Mixins } from '@pagebuilder/vue-editor';

export default class Heading extends BaseHeading {
  readonly component: Object;

  constructor() {
    super();

    this.component = {
      name: this.name,
      mixins: [Mixins.Widget],
      render(createElement) {
        return createElement(this.node.tagName, this.node.textContent);
      }
    };
  }
}
