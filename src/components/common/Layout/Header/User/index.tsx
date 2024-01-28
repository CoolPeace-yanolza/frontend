import { useState, useRef } from 'react';
import styled from '@emotion/styled';

import user from '@assets/icons/ic-header-user.svg';
import UserModal from './UserModal';
import { useOutsideClick } from '@hooks/index';
import theme from '@styles/theme';

const User = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  useOutsideClick(modalRef, () => setIsUserModalOpen(false));

  return (
    <div ref={modalRef}>
      <UserIcon
        src={user}
        alt="사용자 프로필"
        onClick={() => {
          setIsUserModalOpen(prev => !prev);
        }}
      />
      <UserModal isOpen={isUserModalOpen} />
    </div>
  );
};

export default User;

const UserIcon = styled.img`
  position: relative;
  width: 40px;
  height: 40px;

  border-radius: 50%;

  cursor: pointer;

  ${theme.response.tablet} {
    width: 24px;
    height: 24px;
  }
`;
