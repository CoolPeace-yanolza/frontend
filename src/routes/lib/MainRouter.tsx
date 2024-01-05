import { useState } from 'react';
import styled from '@emotion/styled';
import Example from '@pages/Example';
import { css } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';

const MainRouter = () => {
  const [primary, setPrimary] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <EmotionExampleWrapper>
            <EmotionExample
              $primary={primary}
              onClick={() => setPrimary(prev => !prev)}
            >
              쿨피스 응원 버튼
              <br />
              (emotion props 사용 예시)
            </EmotionExample>
            <Example />
          </EmotionExampleWrapper>
        }
      />
      <Route
        path="/login"
        element={<></>}
      />
      <Route
        path="/signup"
        element={<></>}
      />
    </Routes>
  );
};

export default MainRouter;

const EmotionExampleWrapper = styled.div`
  /* 0. emotipn 변수 */
  /* 1. position */
  /* 2. width / height */
  width: 100vw;
  height: 100vh;

  /* 3. margin / border / padding */
  /* 4. display */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* 나머지 디자인 */
  /* 5. 인터렉션 */
  /* 6. props에 따른 스타일 */
`;

const EmotionExample = styled.button<{ $primary?: boolean }>`
  /* 0. emotipn 변수 */
  --accent-color: purple;

  /* 1. position */

  /* 2. width / height */
  width: 300px;
  height: 90px;

  /* 3. margin / border / padding */
  margin: 0.5rem 1rem;
  border-radius: 3px;
  border: 1px solid var(--accent-color);
  padding: 5px;

  /* 4. display */
  display: inline-block;

  /* 나머지 디자인 */
  color: var(--accent-color);
  background: transparent;

  font-size: 15px;
  font-weight: 600;

  transition: all 200ms ease-in-out;

  /* 5. 인터렉션 */
  &:hover {
    filter: brightness(0.85);
  }

  &:active {
    filter: brightness(1);
  }

  /* 6. props에 따른 스타일 */
  ${props =>
    props.$primary &&
    css`
      background: var(--accent-color);
      color: white;

      opacity: 0.7;
    `}
`;
