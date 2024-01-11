import styled from '@emotion/styled';
import { useNavigate, useLocation } from 'react-router-dom';

const DashboardHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container>
      <Menucontainer>
        <DashboardNav
          className={location.pathname === '/' ? 'dashboard' : ''}
          onClick={() => {
            navigate('/');
          }}
        >
          대시보드
        </DashboardNav>
        <ReportNav
          className={location.pathname === '/report' ? 'report' : ''}
          onClick={() => {
            navigate('/report');
          }}
        >
          누적 리포트
        </ReportNav>
      </Menucontainer>
      <Button>쿠폰 등록하기</Button>
    </Container>
  );
};

export default DashboardHeader;

const Container = styled.div`
  position: relative;

  width: 100%;

  border-bottom: 2px solid #c5c5c57f;

  display: flex;
  justify-content: space-between;
`;

const Menucontainer = styled.div`
  display: flex;
`;

const DashboardNav = styled.div`
  margin-right: 45px;
  padding: 16px 0;
  border-bottom: none;
  font-size: 17px;
  font-weight: 700;
  color: #73757c;

  cursor: pointer;

  &.dashboard {
    border-bottom: 2px solid #001d6c;

    color: #001d6c;
  }
`;

const ReportNav = styled(DashboardNav)`
  &.report {
    border-bottom: 2px solid #001d6c;

    color: #001d6c;
  }
`;

const Button = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 175px;
  height: 44px;

  margin-bottom: 10px;
  padding: 14px 20px;
  border: none;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(273deg, #ff0a5c 43.78%, #ff4281 99.72%);
  color: white;
  font-size: 17px;

  cursor: pointer;
`;
