import React, { useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import './Pagination.scss';
import Page from '../Page';

const Pagination = inject('pagesStore')(observer((
  { pagesStore }: any,
) => {
  useEffect(() => {
    pagesStore.getPages();
  }, []);

  return (
    <div className="Pagination">
      <button className="Pagination-Btn" type="button">⮜</button>
      <ul className="Pagination-List">
        {pagesStore.pages.map((page: IPage) => (
          <Page
            key={page.id}
            page={page}
            pagesStore={pagesStore}
          />
        ))}
      </ul>
      <button className="Pagination-Btn" type="button">⮞</button>
    </div>
  );
}));

export default Pagination;
