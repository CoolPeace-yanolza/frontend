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
          <Name>{userName}</Name>
          <Email>{userEmail}</Email>
        </UserInformation>
        <Logout onClick={handleLogout}>로그아웃</Logout>
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
  right: ${props => (props.$isOpen ? '60px' : '-400px')};
  top: 60px;

  width: 335px;
  height: 90px;

  border-radius: 20px 0 20px 20px;
  padding: 20px;

  display: flex;

  background-color: #e3e5e5;
  transition: all 0.3s;

  ${theme.response.tablet} {
    right: ${props => (props.$isOpen ? '35px' : '-400px')};
    top: 45px;

    width: 300px;
    height: 90px;
  }
`;

const UserInformation = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Name = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

const Email = styled.span`
  width: fit-content;

  border-bottom: 1px solid gray;

  font-size: 15px;
`;

const Logout = styled.button`
  width: 70px;

  padding: 0;
  border: none;
  border-bottom: 1px solid gray;

  align-self: flex-end;

  background-color: transparent;
  font-size: 15px;
  font-weight: 700;
  white-space: nowrap;
  text-decoration: none;
  transition: all 0.5s;
  text-decoration: none;
  cursor: pointer;
`;
