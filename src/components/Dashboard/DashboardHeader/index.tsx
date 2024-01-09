import styled from '@emotion/styled';

const DashboardHeader = () => {
  return (
    <StyledContainer>
      <StyledMenuContainer>
        <StyledMenu>쿠폰현황</StyledMenu>
        <StyledMenu>누적리포트</StyledMenu>
      </StyledMenuContainer>
      <StyledButton>쿠폰 등록하기</StyledButton>
    </StyledContainer>
  );
};

export default DashboardHeader;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 0 20px 0 20px;

  background-color: red;

  box-sizing: border-box;
`;

const StyledMenuContainer = styled.div`
  display: flex;
`;

const StyledMenu = styled.div`
  padding: 40px;

  color: black;

  cursor: pointer;
`;

const StyledButton = styled.button`
  display: flex;

  padding: 1rem;

  color: pink;

  align-self: flex-end;
`;
