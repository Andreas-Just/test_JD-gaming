import React from 'react';
import cn from 'classnames';
import './Page.scss';
import { observer } from 'mobx-react';

type Props = {
  page: IPage;
  selectPage: (id: number) => void;
};

const Page: React.FC<Props> = (observer(({ page, selectPage }) => {
  const { id, name, isActive, display } = page;

  return (
    <li
      className={cn({
        Page: true,
        Page_active: isActive,
        Page_display: !display,
      })}
      onClick={() => selectPage(id)}
      aria-hidden="true"
    >
      {name}
    </li>
  );
}));

export default Page;
