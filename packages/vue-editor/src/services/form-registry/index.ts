import Interface from './interface';
import Implementation from './implementation';
import FormRegistryInterface from './interface';
import FormRegistry from './implementation';

const formRegistry: FormRegistryInterface = new FormRegistry();

export default formRegistry;
export { Interface, Implementation };