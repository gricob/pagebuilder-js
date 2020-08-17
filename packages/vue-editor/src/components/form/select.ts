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
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    createOptionElements(createElement) {
      const optionElements = this.options.map(option => createElement('option', {
        domProps: {
          value: option.value,
          innerHTML: option.label,
        }
      }));

      return optionElements;
    }
  },
  render(createElement) {
    let self = this;

    const selectId = `pb-form_input-${uuidv4()}`;

    const select = createElement('select', {
      attrs: {
        type: this.type,
      },
      class: 'pb-form__control',
      domProps: {
        id: selectId,
        value: this.value,
      },
      on: {
        input: function(event) {
          self.$emit('input', event.target.value);
        }
      }
    }, this.createOptionElements(createElement));

    const label = createElement('label', {
      domProps: {
        htmlFor: selectId,
        innerHTML: this.label
      }
    });

    return createElement('div', {
      class: 'pb-form__group',
    }, [label, select]);
  }
}