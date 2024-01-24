import {
  CouponHeader,
  CouponNav,
  CouponMain,
  CouponBanner
} from '@components/CouponList';
import styled from '@emotion/styled';

const CouponList = () => {
  return (
    <CouponListContainer>
      <CouponHeader />
      <CouponBanner />
      <CouponNav />
      <CouponMain />
    </CouponListContainer>
  );
};

export default CouponList;

const CouponListContainer = styled.div`
  @media (max-width: 656px) {
    min-height: 100vh;
    background: #f2f3f5;
  }
`;
