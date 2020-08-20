import React, { useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import './Pagination.scss';

const Pagination = inject('pagesStore')(observer(({ pagesStore }: any) => {
  // console.log(store.getPages)

  useEffect(() => {
    pagesStore.getPages();
  }, []);

  return (
    <div className="Pagination">
      <button className="Pagination-Btn" type="button">⮜</button>
      <ul className="Pagination-List">
        {pagesStore.pages.map((page: IPage) => (
          <li key={page.id} className="Pagination-Item">
            {page.name}
          </li>
        ))}
      </ul>
      <button className="Pagination-Btn" type="button">⮞</button>
    </div>
  );
}));

export default Pagination;
