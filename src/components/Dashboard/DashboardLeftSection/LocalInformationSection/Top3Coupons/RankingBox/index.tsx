import styled from '@emotion/styled';

import { RankingBoxProps, RankingBoxStyleProps } from '@/types/dashboard';
import theme from '@styles/theme';

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

  padding: 8px 0px 8px 12px;
  border: 2px solid #f2f4f5;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;

  color: #303437;
  font-size: 15px;
  font-weight: 700;

  background-color: #fff;

  ${theme.response.tablet} {
    font-size: 11px;
  }
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

  ${theme.response.tablet} {
    font-size: 10px;
  }
`;

const RankingContent = styled.div`
  white-space: nowrap;
`;
