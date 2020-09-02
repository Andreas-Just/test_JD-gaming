import React from 'react';
import cn from 'classnames';
import './Page.scss';

type Props = {
  // ref: (node?: Element | null | undefined) => void;
  // children: React.ReactNode;
  page: IPage;
  selectPage: (id: number) => void;
};

const Page = React.forwardRef<HTMLLIElement, Props>(({ page, selectPage }, ref) => {
  const { id, name, isActive } = page;

  return (
    <li
      className={cn({
        Page: true,
        Page_active: isActive,
      })}
      onClick={() => selectPage(id)}
      aria-hidden="true"
      ref={ref}
    >
      {name}
    </li>
  );
});

export default Page;
