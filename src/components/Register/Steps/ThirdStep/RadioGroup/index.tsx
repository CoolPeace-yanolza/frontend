import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';

import Radio from './Radio';
import { registerInputState, previewState } from '@recoil/index';

const RadioGroup = () => {
  const [input, setInput] = useRecoilState(registerInputState);
  const [preview, setPreview] = useRecoilState(previewState);

  const days = [
    {
      id: 'monday',
      value: '월요일'
    },
    {
      id: 'tuesday',
      value: '화요일'
    },
    {
      id: 'wednesday',
      value: '수요일'
    },
    {
      id: 'thursday',
      value: '목요일'
    },
    {
      id: 'friday',
      value: '금요일'
    },
    {
      id: 'saturday',
      value: '토요일'
    },
    {
      id: 'sunday',
      value: '일요일'
    }
  ];

  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, day: e.target.value });
    setPreview({ ...preview, day: e.target.value + ' 체크인 시 적용 가능' });
  };

  return (
    <Container>
      {days.map((day, index) => (
        <Radio
          key={index}
          id={day.id}
          name="days"
          value={day.value}
          isChecked={input.day === day.value}
          text={day.value.slice(0, 1)}
          onButtonChange={handleDayChange}
        />
      ))}
    </Container>
  );
};

export default RadioGroup;

const Container = styled.div`
  display: flex;
  gap: 8px;
`;
