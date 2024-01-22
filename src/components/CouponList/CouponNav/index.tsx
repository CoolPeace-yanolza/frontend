import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import theme from '@styles/theme';
import searchIcon from '@assets/icons/ic-couponlist-search.svg';
import centerIcon from '@assets/icons/ic-couponlist-period-center.svg';
import { couponListState, headerAccommodationState } from '@recoil/index';
import {
  CategoryTabStyleProps,
  ResisterDateStyleProps
} from '@/types/couponList';
import { useGetCouponList } from '@hooks/queries/useCouponList';

const CouponNav = () => {
  const [resisterDateClick, setResisterDateClick] = useState<string>('1년');
  const [categoryTab, setCategoryTab] = useState<string>('전체');
  const [searchText, setSearchText] = useState<string>('');
  const headerAccommodation = useRecoilValue(headerAccommodationState);
  const setGlobalCoupons = useSetRecoilState(couponListState);
  const [searchAPI, setSearchAPI] = useState<string>('');

  const handleDateClick = (period: string) => {
    setResisterDateClick(period);
    setSearchAPI('');
  };

  const handleCategoryTab = (tab: string) => {
    setCategoryTab(tab);
    setSearchAPI('');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchAPI(searchText);
    setSearchText('');
  };

  const { data: coupons } = useGetCouponList(
    headerAccommodation.id,
    resisterDateClick !== '1년' ? resisterDateClick : undefined,
    categoryTab !== '전체' ? categoryTab : undefined,
    searchAPI
  );

  useEffect(() => {
    setGlobalCoupons(coupons);
  }, [headerAccommodation.id, resisterDateClick, categoryTab, searchAPI]);

  return (
    <TabContainer>
      <TabNavContainer>
        <TabWrap>
          <TapItemWrapper onClick={() => handleCategoryTab('전체')}>
            <TabName>전체</TabName>
            <TabCount $categoryTab={categoryTab === '전체'}>
              {coupons.category.all}
            </TabCount>
          </TapItemWrapper>
          <TapItemWrapper onClick={() => handleCategoryTab('노출 ON')}>
            <TabName>노출 ON</TabName>
            <TabCount $categoryTab={categoryTab === '노출 ON'}>
              {coupons?.category.exposure_on}
            </TabCount>
          </TapItemWrapper>
          <TapItemWrapper onClick={() => handleCategoryTab('노출 OFF')}>
            <TabName>노출 OFF</TabName>
            <TabCount $categoryTab={categoryTab === '노출 OFF'}>
              {coupons?.category.exposure_off}
            </TabCount>
          </TapItemWrapper>
          <TapItemWrapper onClick={() => handleCategoryTab('만료')}>
            <TabName>만료</TabName>
            <TabCount $categoryTab={categoryTab === '만료'}>
              {coupons?.category.expiration}
            </TabCount>
          </TapItemWrapper>
        </TabWrap>
        <SearchWrap onSubmit={handleSearch}>
          <SearchInput
            id="search"
            type="text"
            value={searchText}
            placeholder="관리 쿠폰명을 입력하세요."
            onChange={handleSearchChange}
          ></SearchInput>
          <SearchImg
            src={searchIcon}
            alt="search"
          />
          <SearchButton type="submit">검색</SearchButton>
        </SearchWrap>
      </TabNavContainer>
      <TabBottomContainer>
        <TabBottomWrap>
          <SecondTabName>{categoryTab}</SecondTabName>
          <SecondTabCount>{coupons?.content.length}개</SecondTabCount>
          <CouponDescription>
            모든 쿠폰은 다운로드 후 14일까지 사용 가능하며, 등록 후 1년이 경과한
            쿠폰은 조회되지 않습니다.
          </CouponDescription>
        </TabBottomWrap>
        <ResisterPeriodWrap>
          <ResisterPeriodTitle>등록일 기준 최근</ResisterPeriodTitle>
          <ResisterPeriod
            $resisterDateClick={resisterDateClick === '1년'}
            onClick={() => handleDateClick('1년')}
          >
            1년
          </ResisterPeriod>
          <img
            src={centerIcon}
            alt="centerIcon"
          />
          <ResisterPeriod
            $resisterDateClick={resisterDateClick === '6개월'}
            onClick={() => handleDateClick('6개월')}
          >
            6개월
          </ResisterPeriod>
          <img
            src={centerIcon}
            alt="centerIcon"
          />
          <ResisterPeriod
            $resisterDateClick={resisterDateClick === '3개월'}
            onClick={() => handleDateClick('3개월')}
          >
            3개월
          </ResisterPeriod>
        </ResisterPeriodWrap>
      </TabBottomContainer>
    </TabContainer>
  );
};

export default CouponNav;

const TabContainer = styled.div`
  margin: 14px 50px;
`;

const TabNavContainer = styled.div`
  margin: 19px 0px;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  border-bottom: 1px solid #dde1e6;
`;

const TabWrap = styled.div`
  margin-bottom: 19px;

  display: flex;
  flex-wrap: wrap;
`;

const TapItemWrapper = styled.div`
  margin-right: 28.2px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const TabName = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #404446;
`;

const TabCount = styled.div<CategoryTabStyleProps>`
  width: 70px;
  height: 40px;

  margin-left: 9.4px;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  font-weight: 700;
  background-color: #f3f3f3;

  color: ${props => (props.$categoryTab ? theme.colors.white : '#404040')};
  background: ${props => (props.$categoryTab ? '#404446' : '#F2F4F5')};
`;

const SearchWrap = styled.form`
  position: relative;

  display: flex;
  flex-wrap: wrap;
`;

const SearchInput = styled.input`
  width: 311px;
  height: 37.123px;

  margin: 0px 13px 5px 0px;
  padding-left: 51px;
  border: none;
  border-radius: 12.374px;

  background: #f3f3f3;
  color: #646464;
  font-size: 14px;
`;

const SearchImg = styled.img`
  position: absolute;

  margin-top: 7px;
  margin-left: 20px;
`;

const SearchButton = styled.button`
  width: 75px;
  height: 37px;

  border: none;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.white};
  background-color: #1a2849;
  cursor: pointer;
`;

const TabBottomContainer = styled.div`
  margin: 23.88px 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TabBottomWrap = styled.div`
  display: flex;
  align-items: center;
`;

const SecondTabName = styled.div`
  margin-right: 5px;

  color: #a4a4a4;
  font-size: 14px;
  font-weight: 700;
`;

const SecondTabCount = styled.div`
  margin-right: 19px;

  color: #1a2849;
  font-size: 14px;
  font-weight: 700;
`;

const CouponDescription = styled.div`
  color: #a4a4a4;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
`;

const ResisterPeriodWrap = styled.div`
  display: flex;
  align-items: center;
`;

const ResisterPeriodTitle = styled.div`
  color: #a4a4a4;
  font-size: 12px;
  font-weight: 400;
  margin: 0px 5px;
`;

const ResisterPeriod = styled.div<ResisterDateStyleProps>`
  margin: 0px 5px;

  font-size: 12px;
  cursor: pointer;
  color: ${props => (props.$resisterDateClick ? '#404040' : '#A4A4A4')};
  font-weight: ${props => (props.$resisterDateClick ? '700' : '400')};
`;
