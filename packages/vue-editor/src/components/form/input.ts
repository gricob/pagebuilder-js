import { v4 as uuidv4 } from 'uuid';

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    }
  },
  render(createElement) {
    let self = this;

    const inputId = `pb-form_input-${uuidv4()}`;

    const input = createElement('input', {
      attrs: {
        type: this.type,
      },
      class: 'pb-form__control',
      domProps: {
        id: inputId,
        value: this.value,
      },
      on: {
        input: function(event) {
          self.$emit('input', event.target.value);
        }
      }
    });

    const label = createElement('label', {
      domProps: {
        htmlFor: inputId,
        innerHTML: this.label
      }
    });

    return createElement('div', {
      class: 'pb-form__group',
    }, [label, input]);
  }
}