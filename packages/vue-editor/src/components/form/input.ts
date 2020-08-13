export default {
  props: {
    type: {
      type: String,
      default: () => 'text'
    },
    value: {
      type: String,
      default: () => ''
    }
  },
  render(createElement) {
    let self = this;
    return createElement('input', {
      attrs: {
        type: this.type,
      },
      domProps: {
        value: this.value,
      },
      on: {
        input: function(event) {
          self.$emit('input', event.target.value);
        }
      }
    });
  }
}