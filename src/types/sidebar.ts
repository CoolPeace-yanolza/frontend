export type SidebarHeader = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SidebarStyleProps = {
  $isSidebarOpen: boolean;
  $isToggleOpen: boolean;
  $userPath: string;
};

export type SidebarOpen = Pick<SidebarStyleProps, '$isSidebarOpen'>;
export type ToggleOpen = Pick<SidebarStyleProps, '$isToggleOpen'>;
export type Opens = Omit<SidebarStyleProps, '$userPath'>;
