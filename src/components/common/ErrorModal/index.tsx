import styled from '@emotion/styled';

import ErrorIcon from '@assets/icons/ic-error.svg';
import { ErrorModalProps } from '@/types/errorModal';

const ErrorModal = ({ modalContent, ButtonFunc }: ErrorModalProps) => {
  return (
    <Backdrop>
      <Modal>
        <>
          <Icon
            src={ErrorIcon}
            alt="에러 아이콘"
          />
          <Text>{modalContent.text}</Text>
          <ErrorText>{modalContent.errorText}</ErrorText>
          <ConfirmButton onClick={ButtonFunc}>확인</ConfirmButton>
        </>
      </Modal>
    </Backdrop>
  );
};

export default ErrorModal;

const Backdrop = styled.div`
  position: fixed;

  width: 100vw;
  height: 100vh;

  background: rgba(66, 66, 66, 0.5);

  z-index: 110;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 517px;
  height: 249px;

  padding: 59px auto 32px;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.25);
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;

  margin-bottom: 14px;
`;

const Text = styled.p`
  color: #404446;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
`;

const ErrorText = styled.p`
  margin-bottom: 28px;

  color: #da1e28;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
`;

const ConfirmButton = styled.button`
  width: 220px;
  height: 44px;

  border-radius: 12px;
  border: none;

  color: #fff;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;

  background-color: #1a2849;

  &:hover {
    background-color: #5f6980;
    cursor: pointer;
  }
`;
