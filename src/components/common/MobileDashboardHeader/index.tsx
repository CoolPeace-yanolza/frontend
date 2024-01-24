import styled from '@emotion/styled';
import { useNavigate, useLocation } from 'react-router-dom';

import { NavigationPath } from '@/types/dashboardHeader';
import theme from '@styles/theme';

const MobileDashboardHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container>
      <MenuContainer>
        <DashboardNavigation
          $pathname={location.pathname}
          onClick={() => {
            navigate('/');
          }}
        >
          대시보드
        </DashboardNavigation>
        <ReportPageNavigation
          $pathname={location.pathname}
          onClick={() => {
            navigate('/coupons/report');
          }}
        >
          누적 리포트
        </ReportPageNavigation>
      </MenuContainer>
      <Button
        onClick={() => {
          navigate('/coupons/register');
        }}
      >
        쿠폰 등록하기
      </Button>
    </Container>
  );
};

export default MobileDashboardHeader;

const Container = styled.div`
  display: none;

  ${theme.response.tablet} {
    width: 100%;

    border-bottom: 2px solid #c5c5c57f;
    padding: 0 15px;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    font-size: 11px;
    font-weight: 700;
    z-index: 100;
  }
`;

const MenuContainer = styled.div`
  ${theme.response.tablet} {
    display: flex;
  }
`;

const DashboardNavigation = styled.div<NavigationPath>`
  ${theme.response.tablet} {
    margin-right: 30px;
    padding: 10px 0;
    border-bottom: ${props =>
      props.$pathname === '/' ? '3px solid #001d6c' : 'none'};

    color: ${props => (props.$pathname === '/' ? '#001d6c' : '#757676')};
    white-space: nowrap;
    cursor: pointer;
  }
`;

const ReportPageNavigation = styled(DashboardNavigation)`
  ${theme.response.tablet} {
    border-bottom: ${props =>
      props.$pathname === '/coupons/report' ? '3px solid #001d6c' : 'none'};

    color: ${props =>
      props.$pathname === '/coupons/report' ? '#001d6c' : '#757676'};
  }
`;

const Button = styled.button`
  ${theme.response.tablet} {
    width: 90px;
    height: 25px;

    margin-bottom: 5px;
    border: none;
    border-radius: 6px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(91deg, #ff3478 1.39%, #ff83ad 98.63%);
    color: white;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      background: #b22655;
    }
  }
`;
