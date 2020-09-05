import React, { useEffect, Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import { InView } from 'react-intersection-observer';
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
          <Fragment key={page.id}>
            <Page
              page={page}
              selectPage={() => pagesStore.selectPage(page.id)}
            />
            <InView
              as="li"
              className="Pagination-Plug"
              onChange={(inView) => pagesStore.hiddenPage(inView, page.id)}
            >
              {null}
            </InView>
          </Fragment>
        ))}
      </ul>
      <button className="Pagination-Btn" type="button">⮞</button>
    </div>
  );
}));

export default Pagination;
