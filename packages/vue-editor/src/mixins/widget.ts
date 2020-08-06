import { mapActions } from 'vuex';
import { Node, NodeFactory } from '@pagebuilder/core';
import { PageTypes } from '../store';
import { WIDGET } from '../types';

const Widget = {
  props: {
    node: {
      type: Node,
      required: true,
    },
    parent: {
      type: Node,
      required: true,
    },
  },
  mounted() {
    if (!this.node.metadata || this.node.metadata.acceptChildren) {
      return;
    }

    this.setUpDropListeners();
  },
  methods: {
    setUpDropListeners() {
      let droppingBefore = undefined;

      const beforeIndicator = document.createElement('div');
      beforeIndicator.className = 'drop-indicator';
      beforeIndicator.style.display = 'none';

      const afterIndicator = document.createElement('div');
      afterIndicator.className = 'drop-indicator';
      afterIndicator.style.display = 'none';

      this.$el.parentNode.insertBefore(beforeIndicator, this.$el);
      this.$el.parentNode.insertBefore(afterIndicator, this.$el.nextSibling);

      this.$el.addEventListener('dragover', (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const offset = event.pageY - rect.top;
        droppingBefore = offset < (event.currentTarget.offsetHeight / 2);

        beforeIndicator.style.display = droppingBefore ? 'block' : 'none';
        afterIndicator.style.display = !droppingBefore ? 'block' : 'none';

        event.preventDefault();
        event.stopPropagation();
      });

      this.$el.addEventListener('dragenter', (event) => {
        event.preventDefault();
        event.stopPropagation();
      });

      const clearIndicators = () => {
        beforeIndicator.style.display = 'none';
        afterIndicator.style.display = 'none';
      }

      this.$el.addEventListener('dragleave', () => {
        clearIndicators();
      });

      this.$el.addEventListener('drop', (event) => {
        clearIndicators();

        const widget = event.dataTransfer.getData(WIDGET);

        if (!widget) {
          return;
        }

        const node = NodeFactory.getInstance().create(widget);
        
        if (droppingBefore) {
          this.insertBefore({ parent: this.parent, reference: this.node, child: node })
        } else {
          this.insertAfter({ parent: this.parent, reference: this.node, child: node });
        }

        event.preventDefault();
        event.stopPropagation();
      });
    },
    ...mapActions('page', [PageTypes.ACTION.INSERT_AFTER, PageTypes.ACTION.INSERT_BEFORE])
  }
};

export default Widget;
