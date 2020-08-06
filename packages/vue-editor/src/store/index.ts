import Page, { Types as PageTypes } from './page';
import Editor from './editor';

const modules = {
  page: Page,
  editor: Editor
};

export default modules;

export { Page, PageTypes, Editor };