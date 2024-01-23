// Layout
export type LayoutStyleProps = { $pathname: string };

// Header

export type HeaderAccommodation = {
  id: number;
  name: string;
  sido_id: number;
  sido: string;
  sigungu_id: number;
  sigungu: string;
  address: string;
};

export type HeaderAccommodationResult = {
  accommodation_responses: HeaderAccommodation[];
};

export type HeaderAccommodationData = HeaderAccommodation[];

// Sidebar
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

export type CustomNavLink = {
  children: React.ReactNode;
  to: string;
  $isSidebarOpen?: boolean;
  $isToggleOpen?: boolean;
  $userPath?: string;
};

// User
export type UserModal = {
  isOpen: boolean;
  setIsUserModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type UserModalStyleProps = {
  $isOpen: boolean;
};
