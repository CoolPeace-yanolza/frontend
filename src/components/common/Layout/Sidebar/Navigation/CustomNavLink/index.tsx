import { NavLink as ReactRouterDomLink, NavLinkProps } from 'react-router-dom';

import { CustomNavLink } from '@/types/layout';

const CustomNavLink = ({
  children,
  to,
  $isSidebarOpen,
  $isToggleOpen,
  $userPath,
  ...props
}: CustomNavLink & NavLinkProps) => {
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

export default CustomNavLink;
