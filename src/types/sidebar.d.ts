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

/*

1. d.ts -> .ts (export)

2. 타입 기반 타입 ->  권장 이지만, 
  -> 얼마나 쓰는지에 따라 쓸지 판단

3. 전체 옵셔널의 경우
  // 셋 중에 하나는 꼭 있어야하는 형태가 더 적절
  type SidebarStyleProps = {
    $isSidebarOpen?: boolean;
    $isToggleOpen?: boolean;
    $userPath?: string;
  };

*/
