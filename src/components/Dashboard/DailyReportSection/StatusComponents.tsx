import styled from '@emotion/styled';

const StatusComponent01 = () => (
  <>
    <HeaderText>
      <span style={{ color: '#FF3478' }}>곧 만료되는 쿠폰</span> 이 있습니다.
    </HeaderText>
    <SubText>
      새 쿠폰을 등록하여
      <br />
      예약율을 더욱 높여보세요!
    </SubText>
  </>
);

const StatusComponent02 = () => (
  <>
    <HeaderText>
      현재 내 숙소에서
      <br />
      <span style={{ color: '#FF3478' }}>노출 중인 쿠폰이 없습니다.</span>
    </HeaderText>
    <SubText>
      새 쿠폰을 등록하여
      <br />
      예약율을 더욱 높여보세요!
    </SubText>
  </>
);

const StatusComponent03 = () => (
  <>
    <HeaderText>
      현재 내 숙소에서
      <br />
      <span style={{ color: '#FF3478' }}>등록된 쿠폰이 없습니다.</span>
    </HeaderText>
    <SubText>
      새 쿠폰을 등록하여
      <br />
      예약율을 더욱 높여보세요!
    </SubText>
  </>
);

const StatusComponent04 = () => (
  <>
    <HeaderText>
      지금 <span style={{ color: '#FF3478' }}>숙소 쿠폰 사용 상태</span> 를
      <br />
      확인해보세요.
    </HeaderText>
    <SubText>
      쿠폰을 통해 예약율을
      <br />
      더욱 높일 수 있어요!
    </SubText>
  </>
);

export const getMatchedComponent = (condition: number) => {
  switch (condition) {
    case 1:
      return <StatusComponent01 />;
    case 2:
      return <StatusComponent02 />;
    case 3:
      return <StatusComponent03 />;
    case 4:
      return <StatusComponent04 />;
  }
};

const HeaderText = styled.div`
  width: 100%;

  font-size: 15px;
  font-weight: 700;
  line-height: 1.4;
`;

const SubText = styled.div`
  width: 100%;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
`;
