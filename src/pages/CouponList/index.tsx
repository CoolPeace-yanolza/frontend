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

const CouponList = () => {
  const [search, setSearch] = useState('');
  const [debouncePrefix, setDebouncePrefix] = useState('');
  const headerAccommodation = useRecoilValue(headerAccommodationState);
  const [registerDateClick, setRegisterDateClick] = useState<string>('1년');
  const [categoryTab, setCategoryTab] = useState<string>('전체');
  const observerRef = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('감시 대상이 뷰포트에 들어왔습니다.');
          // 무한 스크롤 로직, 예: fetchMore 함수를 호출하여 데이터 추가 로드
        }
      });
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []); // 의존성 배열에 필요한 상태 변수 추가 가능

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
          <div ref={observerRef}> 여기가 뷰포트에 들어오면 로딩합니다</div>
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
