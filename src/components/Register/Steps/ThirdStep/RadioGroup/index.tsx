import styled from '@emotion/styled';

import Radio from './Radio';

const RadioGroup = () => {
  return (
    <Container>
      <Radio
        id="monday"
        name="days"
        text="월"
      />
      <Radio
        id="tuesday"
        name="days"
        text="화"
      />
      <Radio
        id="wednesday"
        name="days"
        text="수"
      />
      <Radio
        id="thursday"
        name="days"
        text="목"
      />
      <Radio
        id="friday"
        name="days"
        text="금"
      />
      <Radio
        id="saturday"
        name="days"
        text="토"
      />
      <Radio
        id="sunday"
        name="days"
        text="일"
      />
    </Container>
  );
};

export default RadioGroup;

const Container = styled.div`
  display: flex;
  gap: 8px;
`;
