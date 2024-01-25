import {
  CouponHeader,
  CouponNav,
  CouponMain,
  CouponBanner
} from '@components/CouponList';
import styled from '@emotion/styled';
import { useGetCouponList } from '@hooks/queries/useCouponList';
import { useCallback, useState } from 'react';
import { debounce } from 'lodash';
import { useRecoilValue } from 'recoil';
import { headerAccommodationState } from '@recoil/index';

const CouponList = () => {
  const [search, setSearch] = useState('');
  const [debouncePrefix, setDebouncePrefix] = useState('');
  const headerAccommodation = useRecoilValue(headerAccommodationState);
  const [registerDateClick, setRegisterDateClick] = useState<string>('1년');
  const [categoryTab, setCategoryTab] = useState<string>('전체');

  const { data: coupons } = useGetCouponList(
    headerAccommodation.id,
    registerDateClick !== '1년' ? registerDateClick : undefined,
    categoryTab !== '전체' ? categoryTab : undefined,
    debouncePrefix
  );

  const debounceOnChange = useCallback(
    debounce((value: string) => {
      setDebouncePrefix(value);
    }, 500),
    []
  );
  const handleChangeSearch = (value: string) => {
    setSearch(value);
    debounceOnChange(value);
  };

  const handleChangeDate = (value: string) => {
    setRegisterDateClick(value);
  };

  const handleChangeCategory = (value: string) => {
    setCategoryTab(value);
  };

  console.log(coupons);
  return (
    <CouponListContainer>
      {coupons && (
        <>
          <CouponHeader />
          <CouponBanner />
          <CouponNav
            all={coupons.category.all}
            exposure_on={coupons.category.exposure_on}
            exposure_off={coupons.category.exposure_off}
            expiration={coupons.category.expiration}
            length={coupons.content.length}
            search={search}
            onSearchChange={handleChangeSearch}
            registerDateClick={registerDateClick}
            onRegisterDateChange={handleChangeDate}
            categoryTab={categoryTab}
            onCategoryTabChange={handleChangeCategory}
          />
          <CouponMain coupons={coupons} />
        </>
      )}
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
