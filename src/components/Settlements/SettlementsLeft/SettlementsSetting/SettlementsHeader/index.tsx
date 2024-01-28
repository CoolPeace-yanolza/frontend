import styled from '@emotion/styled';
import { useState, useEffect, useRef } from 'react';

import settlementsAdminIcon from '/images/ic-sidebar-settlement.png';
import informationIcon from '@assets/icons/information-circle-outline.svg';
import SettlementsPopup from './SettlementsPopup';
import theme from '@styles/theme';

const SettlementsHeader = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isPopupOpen && ref.current && !ref.current.contains(event.target as Node)) {
        setIsPopupOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isPopupOpen]);

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
        <InformationContainer ref={ref}>
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

  ${theme.response.tablet} {
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
  height: 44px;

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
  position: relative;
`;

const InformationIcon = styled.img`
  cursor: pointer;
`;