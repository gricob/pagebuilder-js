import { mapActions } from 'vuex';
import { WIDGET } from '../../types';
import { actionTypes as editorActions } from '../../store/editor';
import DropPayload from '../../store/editor/actions/drop/payload';

export default {
  props: {
    vue: {
      type: Function,
      required: false,
    }
  },
  computed: {
    stylesheets() {
      return this.$store.state.page.stylesheets;
    }
  },
  render(h) {
    return  h('iframe', {
      class: 'pagebuilder-editor__frame',
    	on: {
        load: this.renderChildren
      },
    });
  },
  beforeUpdate() {
    if (this.frameApp) {
      this.frameApp.children = Object.freeze(this.$slots.default);
    }
  },  
  methods: {
    ...mapActions('editor', [editorActions.DROP]),
    handleDrag(event: DragEvent) {
      event.preventDefault();
      event.stopPropagation();
    },
    handleDrop(event: DragEvent): void {
      const widget = event.dataTransfer.getData(WIDGET);

      if (!widget) {
        return;
      }

      const payload: DropPayload = {
        widget
      };

      this[editorActions.DROP](payload);

      event.preventDefault();
      event.stopPropagation();
    },
    renderChildren() {
      const children = this.$slots.default;
      const document = this.$el.contentDocument;
      const head = document.head;

      const viewport: HTMLMetaElement = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1';
      
      const stylesheets: string[] = this.stylesheets;
      stylesheets.forEach(stylesheet => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';

        head.appendChild(link);
        
        link.href = stylesheet;
      });

      const body: HTMLBodyElement = document.body;     
      const el = document.createElement('div');
      body.appendChild(el)

      body.addEventListener('dragenter', this.handleDrag);
      body.addEventListener('dragover', this.handleDrag);
      body.addEventListener('drop', this.handleDrop);

      const frameApp = new this.constructor({
        name: 'editorFrameApp',
        store: this.$store,
        data: { children: children }, 
        render(h) {
          return h('div', this.children)
        },
      })

      frameApp.$mount(el);

      this.frameApp = frameApp;
    }
  }
};