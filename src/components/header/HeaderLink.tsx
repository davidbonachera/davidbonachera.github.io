import React, { ReactNode } from 'react';

import { Link } from '../link/Link';


interface HeaderLinkProps {
  name: string;
  to: string;
  icon?: ReactNode;
}

export const HeaderLink = ({ name, to, icon }: HeaderLinkProps) => {
  const isLink = typeof to !== 'undefined';
  const isExternal = isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(to || '');

  const content = () => (
    <>
      {icon && React.cloneElement(icon as any, { className: "s.link__icon" })}
      {name}
    </>
  );

  if (isExternal) {
    return (
      <a target="_blank" rel="noopener noreferrer" href={to}>
        {content()}
      </a>
    );
  }

  return (
    <Link to={to}>
      {content()}
    </Link>
  );
};
