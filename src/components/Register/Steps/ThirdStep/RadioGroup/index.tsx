import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';

import Radio from './Radio';
import { registerInputState, previewState } from '@recoil/index';

const RadioGroup = () => {
  const [input, setInput] = useRecoilState(registerInputState);
  const [preview, setPreview] = useRecoilState(previewState);

  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInput({ ...input, day: e.target.value });
    setPreview({ ...preview, day: e.target.value + ' 체크인 시 적용 가능' });
  };

  return (
    <Container>
      <Radio
        id="monday"
        name="days"
        value="월요일"
        text="월"
        onButtonChange={handleDayChange}
      />
      <Radio
        id="tuesday"
        name="days"
        value="화요일"
        text="화"
        onButtonChange={handleDayChange}
      />
      <Radio
        id="wednesday"
        name="days"
        value="수요일"
        text="수"
        onButtonChange={handleDayChange}
      />
      <Radio
        id="thursday"
        name="days"
        value="목요일"
        text="목"
        onButtonChange={handleDayChange}
      />
      <Radio
        id="friday"
        name="days"
        value="금요일"
        text="금"
        onButtonChange={handleDayChange}
      />
      <Radio
        id="saturday"
        name="days"
        value="토요일"
        text="토"
        onButtonChange={handleDayChange}
      />
      <Radio
        id="sunday"
        name="days"
        value="일요일"
        text="일"
        onButtonChange={handleDayChange}
      />
    </Container>
  );
};

export default RadioGroup;

const Container = styled.div`
  display: flex;
  gap: 8px;
`;
