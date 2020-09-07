import React, { useEffect } from 'react';
import cn from 'classnames';
import './Page.scss';
import { observer } from 'mobx-react';
import { useInView } from 'react-intersection-observer'

type Props = {
  page: IPage;
  pagesStore: any;
};

const Page: React.FC<Props> = (observer(({ page, pagesStore }) => {
  const { id, name, isActive, display } = page;
  const [ref, inView, entry] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (entry) {
      pagesStore.hiddenPage(inView, page.id);
    }
  }, [inView, page, entry]);

  return (
    <li
      className={cn({
        Page: true,
        Page_active: isActive,
        Page_display: !display,
      })}
      onClick={() => pagesStore.selectPage(id)}
      aria-hidden="true"
      ref={ref}
    >
      {name}
    </li>
  );
}));

export default Page;
