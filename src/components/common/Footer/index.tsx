import styled from '@emotion/styled';

const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <Container>
      <Policy>
        <Text>이용약관</Text>
        <Text>|</Text>
        <BoldText>개인정보 처리방침</BoldText>
      </Policy>
      <Copyright>
        (주) 야놀자 Copyright © 2005-{thisYear} Yanolja Co., Ltd. All rights
        reserved.
      </Copyright>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  position: relative;
  bottom: 0;

  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
`;

const Policy = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 7px;
`;

const Text = styled.p`
  color: #404446;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

const BoldText = styled.p`
  color: #404446;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
`;

const Copyright = styled.p`
  color: #e3e5e5;
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  text-align: center;
`;
