import { VNode } from "vue";
import { mapActions } from 'vuex';
import { actionTypes as editorActions } from '../../store/editor';
import OpenOnSidebarPayload from "../../store/editor/actions/open-on-sidebar/payload";

export default {
  name: "PbSidebar",
  computed: {
    sidebarComponent() {
      return this.$store.state.editor.sidebarComponent;
    },
    sidebarComponentOptions() {
      return this.$store.state.editor.sidebarComponentOptions;
    }
  },
  methods: {
    ...mapActions('editor', [
      editorActions.OPEN_ON_SIDEBAR
    ]),
    createTopBar(createElement): VNode {
      const widgetsButton = createElement('button', {
        domProps: {
          innerHTML: '<i class="fa fa-th-large"></i>'
        },
        on: {
          click: this.onWidgetsButtonTapped
        }
      });

      const topBar = createElement('div', {
        class: 'pb-editor__sidebar-topbar'
      }, [widgetsButton]);
  
      return topBar;
    },
    onWidgetsButtonTapped() {
      const payload: OpenOnSidebarPayload = {
        component: 'PbWidgets'
      };

      this[editorActions.OPEN_ON_SIDEBAR](payload);
    }
  },
  render(createElement) {
    const topBar = this.createTopBar(createElement);

    const activeComponent = createElement(this.sidebarComponent, { ...this.sidebarComponentOptions });

    return createElement('div', [topBar, activeComponent])
  }
}