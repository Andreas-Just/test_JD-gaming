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
    console.log(preparedPages)

    runInAction(() => {
      this.pages = preparedPages;
    });
  };
}

decorate(PagesStore, {
  pages: observable,
  getPages: action.bound,
});

const pagesStore = new PagesStore();

export default pagesStore;
