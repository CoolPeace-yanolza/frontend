import styled from '@emotion/styled';
import { useState } from 'react';

import settlementsAdminIcon from '@assets/icons/settlements-admin.svg';
import informationIcon from '@assets/icons/information-circle-outline.svg';
import SettlementsPopup from './SettlementsPopup';

const SettlementsHeader = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

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
        <InformationContainer>
        <InformationIcon
         src={informationIcon}
         alt="정보"
         onClick={handlePopupToggle} />
        <SettlementsPopup isOpen={isPopupOpen} onClose={handlePopupToggle} />
      </InformationContainer>
      </Middle>
    </Container>
  )
}

export default SettlementsHeader;

const Container = styled.nav`
  margin-left: 43px;
  margin-top: 96px;

  @media (max-width: 900px) {
    display: none;
  }
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

const InformationContainer = styled.div`
  display: flex;
  align-items: center;
`;

const InformationIcon = styled.img`
  margin-bottom: 5px;

  cursor: pointer;
`;