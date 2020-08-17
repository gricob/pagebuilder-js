import { Form } from '@pagebuilder/vue-editor';
import _ from 'lodash';

export default {
  extends: Form.Node,
  render(createElement) {

    const textInput = createElement(Form.Input, {
      props: {
        label: 'Text',
        value: this.node.textContent
      },
      on: {
        input: function(value){
          this.update(({textContent: value}));
        }.bind(this)
      }
    });

    const tagOptions = _.range(1, 7).map(level => {
      return { label: `H${level}`, value: `h${level}`  }
    })

    const tagSelect = createElement(Form.Select, {
      props: {
        label: 'Tag',
        value: this.node.tagName,
        options: tagOptions
      },
      on: {
        input: function(value){
          this.update(({tagName: value}));
        }.bind(this)
      }
    });

    return createElement('div', {
      class: 'pb-form__container'
    }, [textInput, tagSelect]);
  }
}