import { ReactNode } from 'react';

export type SidebarHeader = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SidebarStyleProps = {
  $issidebaropen: boolean;
  $istoggleopen: boolean;
  $userpath: string;
};

export type SidebarOpen = Pick<SidebarStyleProps, '$issidebaropen'>;
export type ToggleOpen = Pick<SidebarStyleProps, '$istoggleopen'>;
export type Opens = Omit<SidebarStyleProps, '$userpath'>;

export type CostumeNavLinkProps = {
  children: ReactNode;
  to: string;
  $issidebaropen?: boolean;
  $istoggleopen?: boolean;
  $userpath?: string;
};
