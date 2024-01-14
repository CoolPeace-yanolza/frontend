import { NavLink as ReactRouterDomLink, NavLinkProps } from 'react-router-dom';

import { CostumeNavLinkProps } from '@/types/layout';

const CostumeNavLink = ({
  children,
  to,
  $issidebaropen,
  $istoggleopen,
  $userpath,
  ...props
}: CostumeNavLinkProps & NavLinkProps) => {
  return (
    <ReactRouterDomLink
      to={to}
      end
      {...props}
    >
      {children}
    </ReactRouterDomLink>
  );
};

export default CostumeNavLink;
