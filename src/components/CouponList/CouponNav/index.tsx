import styled from '@emotion/styled';
import React, { useState } from 'react';
import searchIcon from '@assets/icons/CouponList/ic_search.svg';
import centerIcon from '@assets/icons/CouponList/ic_period_center.svg';
import bannerIcon from '@assets/icons/CouponList/ic_speaker.svg';

const CouponNav = () => {
  const [isClick, setIsClick] = useState<string>('1년');

  const handleDateClick = (period: string) => {
    setIsClick(period);
  };
  return (
    <TabContainer>
      <TabBanner>
        <img
          src={bannerIcon}
          alt="bannerIcon"
        />
        <div>
          <TabBannerTitle>이번 달 우리 지역 인기 쿠폰</TabBannerTitle>
          <TabBannerContent>
            OO구에서 가장 많이 사용된 쿠폰은? 재방문 고객 20% 할인쿠폰 이에요!
          </TabBannerContent>
        </div>
      </TabBanner>

      <TabNavContainer>
        <TabWrap>
          <TapItemWrapper>
            <TabName>전체</TabName>
            <TabCount>8</TabCount>
          </TapItemWrapper>
          <TapItemWrapper>
            <TabName>노출 ON</TabName>
            <TabCount>2</TabCount>
          </TapItemWrapper>
          <TapItemWrapper>
            <TabName>노출 OFF</TabName>
            <TabCount>2</TabCount>
          </TapItemWrapper>
          <TapItemWrapper>
            <TabName>기간 만료</TabName>
            <TabCount>4</TabCount>
          </TapItemWrapper>
        </TabWrap>
        <SearchWrap>
          <SearchInput
            id="search"
            type="text"
            placeholder="관리 쿠폰명을 입력하세요."
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
          <SecondTabName>전체</SecondTabName>
          <SecondTabCount>20개</SecondTabCount>
          <CouponDescription>
            모든 쿠폰은 다운로드 후 14일까지 사용 가능하며, 등록 후 1년이 경과한
            쿠폰은 조회되지 않습니다.
          </CouponDescription>
        </TabBottomWrap>
        <ResisterPeriodWrap>
          <ResisterPeriodTitle>등록일 기준 최근</ResisterPeriodTitle>
          <ResisterPeriod
            isClick={isClick === '1년'}
            onClick={() => handleDateClick('1년')}
          >
            1년
          </ResisterPeriod>
          <img
            src={centerIcon}
            alt="centerIcon"
          />
          <ResisterPeriod
            isClick={isClick === '6개월'}
            onClick={() => handleDateClick('6개월')}
          >
            6개월
          </ResisterPeriod>
          <img
            src={centerIcon}
            alt="centerIcon"
          />
          <ResisterPeriod
            isClick={isClick === '3개월'}
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

const TabBanner = styled.div`
  height: 83px;

  display: flex;
  align-items: center;

  padding-left: 20px;
  border-radius: 12px;
  background: #1a2849;

  color: ${props => props.theme.colors.white};
  font-size: 17px;
  gap: 10px;
`;

const TabBannerTitle = styled.div`
  font-size: 12px;
  font-style: normal;
  margin-bottom: 6px;
`;
const TabBannerContent = styled.div`
  font-size: 17px;
  font-style: normal;
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
`;

const TabName = styled.div`
  color: #404040;
  font-size: 20px;
  font-weight: 700;
`;

const TabCount = styled.div`
  width: 70px;
  height: 40px;

  margin-left: 9.4px;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #404040;
  font-size: 20px;
  font-weight: 700;
  background-color: #f3f3f3;
  cursor: pointer;
`;

const SearchWrap = styled.form`
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

  color: ${props => props.theme.colors.white};
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

const ResisterPeriod = styled.div<{ isClick: boolean }>`
  margin: 0px 5px;

  font-size: 12px;
  cursor: pointer;
  color: ${props => (props.isClick ? '#404040' : '#A4A4A4')};
  font-weight: ${props => (props.isClick ? '700' : '400')};
`;
