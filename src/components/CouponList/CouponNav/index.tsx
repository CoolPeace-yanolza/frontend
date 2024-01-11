import styled from '@emotion/styled';
import React from 'react';

const CouponNav = () => {
  return (
    <div>
      <TabBanner>
        현재 우리 숙소의 가장 인기있는 쿠폰은? 재방문 고객 20% 할인쿠폰 이에요!{' '}
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
            type="text"
            placeholder="관리 쿠폰명을 입력하세요."
          ></SearchInput>
          <SearchButton>검색</SearchButton>
        </SearchWrap>
      </TabNavContainer>
    </div>
  );
};

export default CouponNav;

const TabContainer = styled.div``;

const TabBanner = styled.div`
  height: 83px;
  margin: 14px 34.5px;

  display: flex;
  align-items: center;
  padding-left: 50px;

  border-radius: 12px;
  background: #1a2849;

  color: ${props => props.theme.colors.white};
  font-size: 17px;
`;

const TabNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 17px 34.5px;
  padding-bottom: 17px;

  border-bottom: 1px solid #dde1e6;
`;

const TabWrap = styled.div`
  display: flex;
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

  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 9.4px;
  color: #404040;
  font-size: 20px;
  font-weight: 700;

  background-color: #f3f3f3;
  border-radius: 20px;
`;

const SearchWrap = styled.div`
  display: flex;
`;

const SearchInput = styled.input`
  width: 311px;
  height: 37.123px;

  padding-left: 49px;
  border: none;
  border-radius: 12.374px;
  background: #f3f3f3;
  color: #646464;
  font-size: 14px;
`;

const SearchButton = styled.button`
  width: 75px;
  height: 37px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 13px;

  color: ${props => props.theme.colors.white};
  background-color: #1a2849;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
