import styled from '@emotion/styled';
import theme from '@styles/theme';

export interface ModalProps {
  modalText: string;
  subText: boolean;
  onConfirmClick(): void;
  onCloseClick(): void;
}

const Modal = ({
  modalText,
  subText,
  onConfirmClick,
  onCloseClick
}: ModalProps) => {
  const handleConfirmClick = () => {
    onConfirmClick();
  };

  const handleModalClose = () => {
    onCloseClick();
  };

  return (
    <ModalContainer>
      <ModalWrap>
        <ModalText>{modalText}</ModalText>
        {subText && (
          <ModalSubText>삭제한 쿠폰은 복구할 수 없습니다.</ModalSubText>
        )}
        <ButtonWrap>
          <CancelButton onClick={handleModalClose}>취소</CancelButton>
          <ConfirmButton onClick={handleConfirmClick}>확인</ConfirmButton>
        </ButtonWrap>
      </ModalWrap>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: rgba(66, 66, 66, 0.5);
`;

const ModalWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-40%, -50%);

  width: 517px;
  height: 228px;

  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: var(--Main-Color-White, #fff);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 900px) {
    width: 336px;
    height: 210px;

    transform: translate(-50%, -50%);
  }
`;

const ModalText = styled.div`
  margin-top: 69px;

  color: #404446;
  font-size: 15px;
  font-weight: 500;
  line-height: 22px; /* 146.667% */
`;

const ModalSubText = styled.div`
  color: #da1e28;
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 16px;

  margin-top: 38px;
  margin-bottom: 33px;
`;

const ConfirmButton = styled.button`
  width: 158px;
  height: 44px;

  border-radius: 12px;
  border: none;

  color: ${theme.colors.white};
  background: #1a2849;
  cursor: pointer;

  &:hover {
    background: #5f6980;
  }

  @media (max-width: 900px) {
    width: 140px;
    height: 40px;
  }
`;
const CancelButton = styled.button`
  width: 158px;
  height: 44px;

  border-radius: 12px;
  border: none;

  color: ${theme.colors.white};
  background: #b1b1b1;
  cursor: pointer;

  &:hover {
    background: #404446;
  }

  @media (max-width: 900px) {
    width: 140px;
    height: 40px;
  }
`;
