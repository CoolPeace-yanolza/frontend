import styled from '@emotion/styled';

const DailyReportSection = () => {
  return (
    <Container>
      <Title>우리 숙소 일간 리포트</Title>
    </Container>
  );
};

export default DailyReportSection;

const Container = styled.div`
  width: 100%;
  height: 379px;

  margin-top: 17px;
  padding: 38.5px 15px 0px 15px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;

  background-color: white;
`;

const Title = styled.div`
  font-size: 17px;
  font-weight: 700;
`;
