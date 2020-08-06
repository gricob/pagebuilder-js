export default {
  computed: {
    stylesheets() {
      return this.$store.state.page.stylesheets;
    }
  },
  render(h) {
    return  h('iframe', {
      class: 'pagebuilder-editor__frame',
    	on: { load: this.renderChildren }
    })
  },
  beforeUpdate() {
    this.iApp.children = Object.freeze(this.$slots.default)
  },  
  methods: {
    renderChildren() {
      const children = this.$slots.default;
      const document = this.$el.contentDocument;
      const head = document.head;

      const viewport = document.createElement('meta');
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

      const body = document.body;     
      const el = document.createElement('div');
      body.appendChild(el)
/*
      const iApp = new Vue({
        name: 'editorFrameApp',
        data: { children: children }, 
        render(h) {
          return h('div', this.children)
        },
      })

      iApp.$mount(el);

      this.iApp = iApp;
      */
    }
  }
};