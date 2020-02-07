import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Link = ({ href, to, children }) => {
  const props = {
    className: 'link'
  };

  return href ? (
    <a href={href} {...props}>
      {children}
    </a>
  ) : (
    <RouterLink to={to} {...props}>
      {children}
    </RouterLink>
  );
};

export default Link;
