import { useState } from 'react';
import styled from '@emotion/styled';

const Select = () => {
  // HACK: 예시 데이터, 백엔드에 리스트로 넘겨 받기
  const selectList = [
    '영덕 아이스 풀빌라',
    '영덕 아이스 풀빌라2',
    '영덕 아이스 풀빌라3',
    '영덕 아이스 풀빌라4'
  ];
  const [selected, setSelected] = useState(selectList[0]);

  // HACK: select 값에 따른 API 요청을 어떻게 보낼 건지 논의 필요
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelected(e.target.value);

  return (
    <Container>
      <Accommodations
        onChange={handleSelect}
        value={selected}
      >
        {selectList.map(item => (
          <Accommodation
            value={item}
            key={item}
          >
            {item}
          </Accommodation>
        ))}
      </Accommodations>
      <SelectBtn></SelectBtn>
    </Container>
  );
};

export default Select;

const Container = styled.div`
  position: relative;
`;

const Accommodations = styled.select`
  position: relative;

  width: 200px;
  height: 40px;

  margin-right: 30px;
  border: none;
  border-radius: 12px;
  padding: 10px 20px;

  display: inline-block;

  font-weight: 500;

  color: rgba(60, 60, 67, 0.6);
  background-color: rgba(247, 248, 252, 1);
  outline-color: ${props => props.theme.colors.brand};

  appearance: none;

  &::-ms-expand {
    display: none;
  }
`;

const Accommodation = styled.option`
  position: absolute;
  top: 0;
  right: 0;
`;

const SelectBtn = styled.div`
  position: absolute;
  top: 16px;
  right: 45px;

  width: 0;
  height: 0;

  border-style: solid;
  border-width: 8px 5px 0 5px;
  border-color: #9c9c9c transparent transparent transparent;

  pointer-events: none;
`;
