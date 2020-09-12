import Droppable from '../../mixins/droppable';

export default {
  mixins: [Droppable],
  computed: {
    stylesheets() {
      return this.$store.state.page.stylesheets;
    },
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

      body.addEventListener('dragenter', this.onDragEnter);
      body.addEventListener('dragover', this.onDragOver);
      body.addEventListener('drop', this.onDrop);

      const frameApp = new this.constructor({
        name: 'editorFrameApp',
        store: this.$store,
        data: { children: children }, 
        render(createElement) {
          return createElement('div', this.children)
        },
      })

      frameApp.$mount(el);

      this.frameApp = frameApp;
    }
  }
};