import { useState } from 'react';
import styled from '@emotion/styled';

import user from '@assets/icons/ic-header-user.svg';
import UserModal from './UserModal';
import theme from '@styles/theme';

const User = () => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  return (
    <>
      <UserIcon
        src={user}
        alt="사용자 프로필"
        onClick={() => setIsUserModalOpen(prev => !prev)}
      />
      <UserModal isOpen={isUserModalOpen} />
    </>
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
