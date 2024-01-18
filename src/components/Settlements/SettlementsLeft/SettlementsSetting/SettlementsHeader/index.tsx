import styled from '@emotion/styled';
import { useState } from 'react';

import settlementsAdminIcon from '@assets/icons/settlements-admin.svg';
import informationIcon from '@assets/icons/information-circle-outline.svg'

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
      {isPopupOpen && (
        <PopupContainer>
            <PopupHeader>
          <PopupTitle>정산내역 안내</PopupTitle>
          <PopupCloseButton onClick={handlePopupToggle}>X</PopupCloseButton>
          </PopupHeader>
          <PopupContent>
            <PopupContentHeader>
            <p><strong>쿠폰 번호</strong>는 쿠폰을 등록하면 자동으로 발행되는 관리목적의 번호입니다.</p>
            <p><strong>관리 쿠폰명</strong>은 사장님께서 직접 설정한 쿠폰명입니다.</p>
            <p><strong>사용 건수</strong>는 쿠폰 적용일에 고객들이 쿠폰을 사용한 건 수입니다.</p>
            <p><strong>구폰 적용일</strong>은 사용자가 쿠폰을 적용하여 결제(예약)를 한 날입니다.</p>
            <p><strong>정산 완료일</strong>은 정산이 완료된 날로 매월 10일 (영업일 기준)입니다.</p>
            </PopupContentHeader>
            <PopupContentMiddle>
            <p>[정산 금액 관련]</p>
            <p><strong>쿠폰 할인 금액</strong>은 쿠폰 적용일에 사용된 모든 쿠폰 금액의 합계입니다.</p>
            <p><strong>쿠폰 취소 금액</strong>은 환불/취소를 통해 쿠폰 사용이 취소된 금액(- 표기)입니다.</p>
            <p><strong>정산 금액</strong>은 “쿠폰 할인 금액 + 쿠폰 취소 금액” 입니다.</p>
            </PopupContentMiddle>
          </PopupContent>
        </PopupContainer>
      )}
      </InformationContainer>
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

const InformationContainer = styled.div`
  display: flex;
  align-items: center;
`;

const InformationIcon = styled.img`
    margin-bottom: 5px;
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 53%;
  left: 48%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0px 2px 64px rgba(0, 0, 0, 0.1);
  z-index: 999;
  
`;

const PopupHeader = styled.div`
  display: flex;
  flex-direction: row;

  text-align: center;
  align-items: center;
  justify-content: space-between;
`;

const PopupTitle = styled.h2`
  font-size: 20px;
  font-weight: 900;
`;

const PopupCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const PopupContent = styled.div`
  margin-top: 10px;
  line-height: 1.5;

  p {
    margin-bottom: 10px;
  }
`;

const PopupContentHeader = styled.div`
  margin-top: 30px;
  p {
    margin-bottom: 10px;

    font-size: 14px;
    font-weight: normal;
  }
  strong {
    font-weight: 900;
  }
`;

const PopupContentMiddle = styled.div`
  margin-top: 20px;
  p {
    font-size: 14px;
    margin-bottom: 10px;
    font-weight: normal;
  }
  strong {
    font-weight: 900;
  }
`;
