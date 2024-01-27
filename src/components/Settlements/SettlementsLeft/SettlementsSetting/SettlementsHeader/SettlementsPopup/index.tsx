import styled from '@emotion/styled';

import { SettlementsPopupProps } from '@/types/settlements';

const SettlementsPopup: React.FC<SettlementsPopupProps> = ({ isOpen, onClose }) => {
  
  return (
    <PopupContainer isOpen={isOpen}>
      <PopupHeader>
        <PopupTitle>정산내역 안내</PopupTitle>
        <PopupCloseButton onClick={onClose}>X</PopupCloseButton>
      </PopupHeader>
      <PopupContent>
        <PopupContentHeader>
            <p><strong>⦁ 쿠폰 번호</strong>는 쿠폰을 등록하면 자동으로 발행되는 관리목적의 번호입니다.</p>
            <p><strong>⦁ 관리 쿠폰명</strong>은 사장님께서 직접 설정한 쿠폰명입니다.</p>
            <p><strong>⦁ 사용 건수</strong>는 쿠폰 적용일에 고객들이 쿠폰을 사용한 건 수입니다.</p>
            <p><strong>⦁ 구폰 적용일</strong>은 사용자가 쿠폰을 적용하여 결제(예약)를 한 날입니다.</p>
            <p><strong>⦁ 정산 완료일</strong>은 정산이 완료된 날로 매월 1일 (영업일 기준)입니다.</p>
        </PopupContentHeader>
        <PopupContentMiddle>
            <p>[정산 금액 관련]</p>
            <p><strong>⦁ 쿠폰 할인 금액</strong>은 쿠폰 적용일에 사용된 모든 쿠폰 금액의 합계입니다.</p>
            <p><strong>⦁ 쿠폰 취소 금액</strong>은 환불/취소를 통해 쿠폰 사용이 취소된 금액(- 표기)입니다.</p>
            <p><strong>⦁ 정산 금액</strong>은 “쿠폰 할인 금액 + 쿠폰 취소 금액” 입니다.</p>
        </PopupContentMiddle>
      </PopupContent>
    </PopupContainer>
  );
};

const PopupContainer = styled.div<{ isOpen: boolean; style?: React.CSSProperties }>`
  position: absolute;

  padding: 20px;
  margin-top: 22px;
  margin-left: 10px;
  border-radius: 13.87px;

  width: 548px;
  height: 344px;

  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  top: 50%;
  left: 100%;

  transform: translateY(-50%);
  background-color: white;
  box-shadow: 0px 2px 64px rgba(0, 0, 0, 0.1);

  z-index: 90;
`;


const PopupHeader = styled.div`
  margin-top: 10px;

  display: flex;
  flex-direction: row;

  text-align: center;
  align-items: center;
  justify-content: space-between;
`;

const PopupTitle = styled.h2`
  margin-left: 10px;

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

const PopupContentHeader = styled.div`
  margin-top: 25px;
  margin-left: 10px;

  p {
    font-size: 14px;
    font-weight: normal;
  }

  strong {
    font-weight: 800;
  }
`;

const PopupContentMiddle = styled.div`
  margin-top: 20px;
  margin-left: 10px;

  p {
    margin-bottom: 2px;

    font-size: 14px;
    font-weight: normal;
  }

  strong {
    font-weight: 800;
  }
`;


const PopupContent = styled.div`
  margin-top: 10px;
  
  line-height: 1.5;

  p {
    margin-bottom: 2px;
  }
`;

export default SettlementsPopup;
