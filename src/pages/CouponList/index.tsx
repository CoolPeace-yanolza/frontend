import {
  CouponHeader,
  CouponNav,
  CouponMain,
  CouponBanner
} from '@components/CouponList';
import styled from '@emotion/styled';
import { useCallback, useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
import { useRecoilValue } from 'recoil';
import { headerAccommodationState } from '@recoil/index';
import { useGetCouponList } from '@hooks/queries/useCouponList';
import { CouponListResponse } from '@/types/couponList';

const CouponList = () => {
  const [search, setSearch] = useState('');
  const [debouncePrefix, setDebouncePrefix] = useState('');
  const headerAccommodation = useRecoilValue(headerAccommodationState);
  const [registerDateClick, setRegisterDateClick] = useState<string>('1년');
  const [categoryTab, setCategoryTab] = useState<string>('전체');
  const observerRef = useRef(null);
  const [page, setPage] = useState(1);
  const couponRef = useRef<CouponListResponse | null>(null);

  const { data: coupons } = useGetCouponList(
    headerAccommodation.id,
    registerDateClick !== '1년' ? registerDateClick : undefined,
    categoryTab !== '전체' ? categoryTab : undefined,
    debouncePrefix,
    page * 10
  );

  const debounceOnChange = useCallback(
    debounce((value: string) => {
      setDebouncePrefix(value);
    }, 500),
    []
  );

  useEffect(() => {
    if (coupons) {
      couponRef.current = coupons;
    }
  }, [coupons]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(page);
          if (couponRef.current && page <= couponRef.current.total_pages) {
            setPage(prev => prev + 1);
          }
        }
      });
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [page]);

  const handleChangeSearch = (value: string) => {
    setSearch(value);
    debounceOnChange(value);
  };

  const handleChangeDate = (value: string) => {
    setRegisterDateClick(value);
    setPage(1);
  };

  const handleChangeCategory = (value: string) => {
    setCategoryTab(value);
    setPage(1);
  };

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
          <ObserverContainer ref={observerRef}></ObserverContainer>
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

const ObserverContainer = styled.div`
  width: 100%;
  height: 10px;
`;
