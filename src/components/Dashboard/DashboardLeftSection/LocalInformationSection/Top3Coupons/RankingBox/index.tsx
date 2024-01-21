import styled from '@emotion/styled';

import { RankingBoxProps, RankingBoxStyleProps } from '@/types/dashboard';

const RankingBox = ({ children, rank }: RankingBoxProps) => {
  return (
    <Container>
      <RankingBadge $rankingColor={rank}>{rank}위</RankingBadge>
      <RankingContent>{children}</RankingContent>
    </Container>
  );
};

export default RankingBox;

const Container = styled.div`
  position: relative;
  right: -20px;

  min-width: 100%;
  width: auto;

  padding: 5px 0px 5px 20px;
  border: 2px solid #f2f4f5;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  color: #303437;
  font-size: 17px;
  font-weight: 700;

  background-color: #fff;
`;

const RankingBadge = styled.div<RankingBoxStyleProps>`
  width: auto;

  padding: 5px 10px;
  border-radius: 14px;

  align-self: flex-start;

  color: #fff;
  font-size: 11px;

  background-color: ${props => {
    if (props.$rankingColor === 1) {
      return '#4777F0';
    } else if (props.$rankingColor === 2) {
      return '#65A0EB';
    } else {
      return '#00D39B';
    }
  }};
`;

const RankingContent = styled.div`
  margin-top: 8px;

  white-space: nowrap;
`;
