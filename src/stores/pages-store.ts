import { decorate, observable, configure, action, runInAction } from 'mobx';
import { getData } from '../helpers/api';

configure({ enforceActions: 'observed' });

class PagesStore {
  pages: IPage[] = [];

  getPages = async () => {
    const pagesFromServer = await getData<string>();

    const preparedPages = pagesFromServer
      .map((page: string, idx: number) => ({
        id: idx,
        name: page,
        isActive: false,
      }));

    runInAction(() => {
      this.pages = preparedPages;
    });
  };

  selectPage(id: number) {
    if (this.pages[id].isActive) {
      return;
    }

    const pages = this.pages.map(page => (
      page.id === id
        ? { ...page, isActive: true }
        : { ...page, isActive: false }
    ));

    this.pages = pages;
  }
}

decorate(PagesStore, {
  pages: observable,
  selectPage: action,
  getPages: action.bound,
});

const pagesStore = new PagesStore();

export default pagesStore;
