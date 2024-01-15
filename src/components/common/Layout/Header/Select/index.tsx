import styled from '@emotion/styled';
import theme from '@styles/theme';

import { useRecoilState } from 'recoil';
import { headerAccommodationState } from '@recoil/index';

const Select = () => {
  /* HACK: 예시 데이터, 리액트 쿼리를 활용하여 넘겨 selectList 배열을 받음

    const { data: selectList } = useFetchAccommodation();

  */

  const selectList = [
    {
      accommodationId: 1,
      accommodationName: '영덕 아이스 풀빌라'
    },
    {
      accommodationId: 2,
      accommodationName: '영덕 아이스 풀빌라2'
    },
    {
      accommodationId: 3,
      accommodationName: '영덕 아이스 풀빌라3'
    },
    {
      accommodationId: 4,
      accommodationName: '영덕 아이스 풀빌라4'
    }
  ];

  const [headerAccommodation, setHeaderAccommodation] = useRecoilState(
    headerAccommodationState
  );

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const accommodationId = Number(e.target.value);

    setHeaderAccommodation({
      accommodationId,
      accommodationName: `${e.target.children[accommodationId - 1].textContent}`
    });
  };

  return (
    <Container>
      <Accommodations
        name="Accommodations"
        onChange={handleSelect}
        value={headerAccommodation.accommodationId}
      >
        {selectList.map(item => (
          <Accommodation
            value={item.accommodationId}
            key={item.accommodationId}
          >
            {item.accommodationName}
          </Accommodation>
        ))}
      </Accommodations>
      <SelectButton></SelectButton>
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
  outline-color: ${theme.colors.brand};

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

const SelectButton = styled.div`
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
