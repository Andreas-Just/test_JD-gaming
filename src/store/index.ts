import { decorate, observable, configure } from 'mobx';
import { pagesServer } from '../helpers/pagesServer';

configure({ enforceActions: 'observed' });

class Store {
  pages: IPage[] = pagesServer;
}

decorate(Store, {
  pages: observable,
});

export default new Store();
