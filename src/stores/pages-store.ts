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
        display: true,
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

  hiddenPage(bool: boolean, id: number) {
    if (bool) {
      return;
    } else {
      console.log(this.pages[id].isActive);

      if (this.pages[id].isActive) {
        const idx: number = this.pages.find(page => (
          page.display && !page.isActive
        ))?.id || 0;

        this.pages[idx].display = false;
      } else {
        this.pages[id].display = false;
      }
    }
  }
}

decorate(PagesStore, {
  pages: observable,
  getPages: action.bound,
  selectPage: action,
  hiddenPage: action,
});

const pagesStore = new PagesStore();

export default pagesStore;
