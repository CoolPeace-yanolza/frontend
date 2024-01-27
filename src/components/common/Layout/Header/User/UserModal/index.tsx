import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

import { ErrorModal } from '@components/common';
import { postLogout } from 'src/api';
import { getCookies, deleteAllCookies } from '@utils/lib/cookies';
import { UserModal, UserModalStyleProps } from '@/types/layout';
import { ERROR_MODAL_MESSAGE } from 'src/constants';
import theme from '@styles/theme';
import { useQueryClient } from '@tanstack/react-query';

const UserModal = ({ isOpen }: UserModal) => {
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const userName = getCookies('userName');
  const userEmail = getCookies('userEmail');

  const ButtonFunc = () => setIsErrorModalOpen(false);

  const handleLogout = async () => {
    await postLogout();
    deleteAllCookies();
    queryClient.removeQueries({ queryKey: ['Accommodation'] });
    navigate('/login'), { replace: true };
    /* HACK: 로그아웃 에러 response 가 있을 경우 사용

      [ 대안 1 ]
      const response = await postLogout();

      if (response === undefined) {
        setIsErrorModalOpen(true);
      } else if (response?.status === 200) {
        deleteAllCookies();
        navigate('/login');
      }

      [ 대안 2 ]
        try {
          const response = await postLogout();
          deleteAllCookies();
          navigate('/login');
        }catch (error) {
          const modalContent = {
            text: '로그아웃에 실패하였습니다.',
            errorText: '잠시후 재시도 해주세요.'
          };

          const ButtonFunc = () => {};

          ErrorModal({ modalContent, ButtonFunc });
        } 

     */
  };

  return (
    <>
      <Modal $isOpen={isOpen}>
        <UserInformation>
          <Name $isOpen={isOpen}>{userName}</Name>
          <Email $isOpen={isOpen}>{userEmail}</Email>
        </UserInformation>
        <Logout
          $isOpen={isOpen}
          onClick={handleLogout}
        >
          로그아웃
        </Logout>
      </Modal>
      {isErrorModalOpen && (
        <ErrorModal
          modalContent={ERROR_MODAL_MESSAGE.USER_MODAL}
          ButtonFunc={ButtonFunc}
        />
      )}
    </>
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
  white-space: nowrap;
  transition: all 0.5s;

  cursor: pointer;
`;
