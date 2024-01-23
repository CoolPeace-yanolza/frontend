import styled from '@emotion/styled';
import { useNavigate, useLocation } from 'react-router-dom';

import { NavigationPath } from '@/types/dashboardHeader';
import theme from '@styles/theme';

const DashboardHeader = () => {
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

export default DashboardHeader;

const Container = styled.div`
  width: 100%;

  border-bottom: 2px solid #c5c5c57f;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  ${theme.response.tablet} {
    display: none;
  }
`;

const MenuContainer = styled.div`
  display: flex;
`;

const DashboardNavigation = styled.div<NavigationPath>`
  margin-right: 45px;
  padding: 10px 0;
  border-bottom: ${props =>
    props.$pathname === '/' ? '3px solid #001d6c' : 'none'};

  font-size: 17px;
  font-weight: 700;
  color: ${props => (props.$pathname === '/' ? '#001d6c' : '#757676')};

  cursor: pointer;
`;

const ReportPageNavigation = styled(DashboardNavigation)`
  border-bottom: ${props =>
    props.$pathname === '/coupons/report' ? '3px solid #001d6c' : 'none'};

  color: ${props =>
    props.$pathname === '/coupons/report' ? '#001d6c' : '#757676'};
`;

const Button = styled.button`
  width: 175px;
  height: 44px;

  margin-bottom: 10px;
  padding: 14px 20px;
  border: none;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(91deg, #ff3478 1.39%, #ff83ad 98.63%);
  color: white;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #b22655;
  }
`;
