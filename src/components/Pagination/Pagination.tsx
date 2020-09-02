import React, { useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import { useInView } from 'react-intersection-observer';
import './Pagination.scss';
import Page from '../Page';

const Pagination = inject('pagesStore')(observer((
  { pagesStore }: any,
) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  console.log(inView);

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
            ref={ref}
            page={page}
            selectPage={() => pagesStore.selectPage(page.id)}
          />
        ))}
      </ul>
      <button className="Pagination-Btn" type="button">⮞</button>
    </div>
  );
}));

export default Pagination;
