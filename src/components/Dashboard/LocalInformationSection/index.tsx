import styled from '@emotion/styled';

import LocalCouponUsage from './LocalCouponUsage';
import LocalTop3Coupons from './Top3Coupons';

const LocalInformationSection = () => {
  return (
    <Container>
      <LeftSection>
        <LocalCouponUsage />
      </LeftSection>
      <RightSection>
        <LocalTop3Coupons />
      </RightSection>
    </Container>
  );
};

export default LocalInformationSection;

const Container = styled.div`
  min-height: 327px;

  margin-top: 17px;
  padding: 30px 20px;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex: 4;
  gap: 12px;

  background-color: white;
`;

const LeftSection = styled.div`
  min-width: 480px;
  height: 100%;

  flex: 1;
`;

const RightSection = styled.div`
  width: 410px;
  height: 100%;
`;
