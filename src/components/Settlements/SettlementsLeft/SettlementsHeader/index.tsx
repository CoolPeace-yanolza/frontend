import styled from '@emotion/styled';

import settlementsAdminIcon from '@assets/icons/settlements-admin.svg';
import informationIcon from '@assets/icons/information-circle-outline.svg'

const SettlementsHeader = () => {
  return (
    <Container>
      <Header>
        <SettlementsAdminIcon
            src={settlementsAdminIcon}
            alt="정산" />
        <HeaderText>
            정산내역
        </HeaderText>
      </Header>
      <Middle>
        <MiddleText>
            쿠폰 프로모션에 적용한 정산 내역을 확인할 수 있습니다.
        </MiddleText>
        <InformationIcon
         src={informationIcon}
         alt="정보" />
      </Middle>
    </Container>
  )
}

export default SettlementsHeader;

const Container = styled.nav`
    margin-left: 43px;
    margin-top: 96px;
`;

const Header = styled.nav`
    margin-bottom: 30px;

    display: flex;

    align-items: center;
`;

const SettlementsAdminIcon = styled.img`
    width: 44px;
    height: 34.57px;

    margin-right: 10px;
`;

const HeaderText = styled.div`
    font-size: 32px;
    font-weight: bold;
    color: white;
`;

const Middle = styled.div`
    display: flex;

    align-items: center;
`;

const MiddleText = styled.div`
    margin-right: 5px;

    font-size: 18px;
    color: white;
`;

const InformationIcon = styled.img`
    margin-bottom: 5px;
`;

