import { Form } from '@pagebuilder/vue-editor';

export default {
  extends: Form.Node,
  render(createElement) {
    return createElement(Form.Input, {
      props: {
        value: this.node.textContent
      },
      on: {
        input: function(value){
          this.update(({textContent: value}));
        }.bind(this)
      }
    });
  }
}