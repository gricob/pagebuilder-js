export default {
  render(createElement) {
    const sidebarSlot = this.$slots.sidebar;
    const contentSlot = this.$slots.default;

    console.log(contentSlot);
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
