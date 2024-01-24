import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';

import theme from '@styles/theme';
import { DayStyleProps } from '@/types/register';
import search from '@assets/icons/ic-register-search.svg';
import side from '@assets/icons/ic-register-side.svg';
import { previewState } from '@recoil/index';

const Preview = () => {
  const preview = useRecoilValue(previewState);

  return (
    <PreviewContainer>
      <Header>
        <IconWrapper>
          <PreviewIcon
            src={search}
            alt="미리보기 아이콘"
          />
        </IconWrapper>
        <Title>쿠폰 미리보기 ㅣ</Title>
        <Subtitle>고객님들께 제공 될 쿠폰 이미지를 확인해보세요!</Subtitle>
      </Header>
      <Coupon>
        <TopSection>
          <Customer>{preview.customer}</Customer>
          <Discount>{preview.discount}</Discount>
          <MinimumPrice>{preview.minimumPrice}</MinimumPrice>
        </TopSection>
        <BottomSection>
          <LeftSection>
            <span>
              {preview.roomType.length
                ? preview.roomType.join(', ')
                : '적용 유형'}
            </span>
            <span> / </span>
            <span>
              {(() => {
                if (preview.toAllRoom === 'true') {
                  return '모든 객실';
                } else if (preview.toAllRoom === 'false') {
                  return '선택 객실';
                } else {
                  return preview.toAllRoom;
                }
              })()}
            </span>
            <Day $hasValue={!!preview.day}>{preview.day}</Day>
          </LeftSection>
          <RightSection>
            <span>{preview.startDate}</span>
            <span>{preview.endDate}</span>
          </RightSection>
        </BottomSection>
        <SideImage
          src={side}
          alt="쿠폰 사이드 이미지"
        />
      </Coupon>
      <Description>
        <FirstLine>쿠폰의 이름은 고객 화면에서는 노출되지 않습니다.</FirstLine>
        <SecondLine>
          고객 분들께는 <span>대상고객+할인정보명</span>으로 보여집니다.
        </SecondLine>
      </Description>
    </PreviewContainer>
  );
};

export default Preview;

const PreviewContainer = styled.div`
  width: 100%;
  min-height: 430px;

  margin: 60px 0px 30px;
  border-radius: 20px;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Header = styled.div`
  width: 95%;
  height: 13%;

  padding: 3%;
  border-radius: 5px 50px 50px 5px;

  display: flex;
  align-items: center;
  gap: 4px;

  color: #fff;

  background: linear-gradient(89deg, #3182f6 0%, #6ab2ff 111.65%);
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.25);
`;

const IconWrapper = styled.div`
  width: 28px;
  height: 28px;

  overflow: hidden;
`;

const PreviewIcon = styled.img`
  width: 60px;
  height: 60px;

  object-position: -17px 0;
`;

const Title = styled.span`
  font-size: 1.1vw;
`;

const Subtitle = styled.span`
  font-size: 0.9vw;
`;

const Coupon = styled.div`
  position: relative;

  width: 380px;
  height: 189px;

  margin: 8% auto;
  padding: 30px 20px;
  border-radius: 13px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.25);

  overflow: hidden;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Customer = styled.div`
  font-size: 13px;
  font-weight: 600;
  text-decoration: underline;
  text-underline-position: under;
`;

const Discount = styled.div`
  margin-top: 4px;

  color: ${theme.colors.pink500};
  font-size: 25px;
  font-weight: 800;
`;

const MinimumPrice = styled.div`
  color: #9fa1a2;
  font-size: 13px;
`;

const BottomSection = styled.div`
  margin-right: 20px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const LeftSection = styled.div`
  font-size: 13px;
`;

const Day = styled.div<DayStyleProps>`
  margin-top: 3px;

  display: ${props => (props.$hasValue ? 'block' : 'none')};
`;

const RightSection = styled.div`
  color: #ff3478;
  font-size: 11px;
  font-weight: 700;
`;

const SideImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  font-size: 15px;
`;

const FirstLine = styled.div`
  color: #979c9e;
`;

const SecondLine = styled.div`
  color: #404446;

  & > span {
    font-weight: 700;
  }
`;
