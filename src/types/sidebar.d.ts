type SidebarHeader = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type SidebarStyleProps = {
  $isSidebarOpen: boolean;
  $isToggleOpen: boolean;
  $userPath: string;
};

type SidebarOpen = Pick<SidebarStyleProps, '$isSidebarOpen'>;
type ToggleOpen = Pick<SidebarStyleProps, '$isToggleOpen'>;
type Opens = Omit<SidebarStyleProps, '$userPath'>;
