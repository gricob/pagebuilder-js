import { mapActions } from 'vuex';
import { actionTypes as editorActions } from '../../store/editor';
import { actionTypes as pageActions } from '../../store/page';

export default {
  props: {
    config: {
      type: Object,
      required: true
    },
    page: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions('page', [pageActions.SET_PAGE]),
    ...mapActions('editor', [editorActions.SET_CONFIGURATION]),
  },
  created() {
    this[pageActions.SET_PAGE](this.page);
    this[editorActions.SET_CONFIGURATION](this.config);
  },
  render(createElement) {
    const sidebarSlot = this.$slots.sidebar;
    const contentSlot = this.$slots.default;

    return createElement('div', {
      class: 'pagebuilder-editor__layout',
    }, [
      createElement('div', {
        class: 'pagebuilder-editor__sidebar-wrapper',
      }, [sidebarSlot]),
      createElement('div', {
        class: 'pagebuilder-editor__content-wrapper',
      }, [contentSlot])
    ])
  }
};
