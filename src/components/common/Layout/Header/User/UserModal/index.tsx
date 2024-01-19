import styled from '@emotion/styled';

import { UserModal, UserModalStyleProps } from '@/types/layout';
import theme from '@styles/theme';

const UserModal = ({ isOpen }: UserModal) => {
  // HACK: cookie에서 사용자 정보 가져오기

  return (
    <Modal $isOpen={isOpen}>
      <UserInformation>
        <Name $isOpen={isOpen}>김사장님</Name>
        <Email $isOpen={isOpen}>yanolja123@yanolja.com</Email>
      </UserInformation>
      <Logout $isOpen={isOpen}>로그아웃</Logout>
    </Modal>
  );
};

export default UserModal;

const Modal = styled.div<UserModalStyleProps>`
  position: absolute;
  right: 60px;
  top: 60px;

  width: ${props => (props.$isOpen ? '335px' : 0)};
  height: ${props => (props.$isOpen ? '90px' : 0)};

  border-radius: 20px 0 20px 20px;
  padding: ${props => (props.$isOpen ? '20px' : 0)};

  display: flex;

  background-color: #e3e5e5;
  transition: all 0.5s;

  ${theme.response.tablet} {
    right: 35px;
    top: 45px;

    width: ${props => (props.$isOpen ? '300px' : 0)};
  }
`;

const UserInformation = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Name = styled.span<UserModalStyleProps>`
  transition: all 0.5s;
  font-size: ${props => (props.$isOpen ? '16px' : 0)};
  font-weight: 700;
`;

const Email = styled.span<UserModalStyleProps>`
  width: fit-content;

  border-bottom: 1px solid gray;

  transition: all 0.5s;
  font-size: ${props => (props.$isOpen ? '15px' : 0)};
`;

const Logout = styled.button<UserModalStyleProps>`
  width: 70px;

  padding: 0;
  border: none;
  border-bottom: 1px solid gray;

  align-self: flex-end;

  background-color: transparent;
  font-size: ${props => (props.$isOpen ? '15px' : 0)};
  font-weight: 700;
  transition: all 0.5s;
`;
