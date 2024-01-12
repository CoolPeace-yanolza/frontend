import styled from '@emotion/styled';

import { useRecoilState } from 'recoil';
import { headerAccomodationState } from '@recoil/index';

const Select = () => {
  /* HACK: 예시 데이터, 리액트 쿼리를 활용하여 넘겨 selectList 배열을 받음

    const { data: selectList } = useFetchAccommodation();

  */

  const selectList = [
    {
      accomodationId: 1,
      accomodationName: '영덕 아이스 풀빌라'
    },
    {
      accomodationId: 2,
      accomodationName: '영덕 아이스 풀빌라2'
    },
    {
      accomodationId: 3,
      accomodationName: '영덕 아이스 풀빌라3'
    },
    {
      accomodationId: 4,
      accomodationName: '영덕 아이스 풀빌라4'
    }
  ];

  const [headerAccomodation, setHeaderAccomodation] = useRecoilState(
    headerAccomodationState
  );

  console.log(headerAccomodation);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const accomodationId = Number(e.target.value);

    setHeaderAccomodation({
      accomodationId,
      accomodationName: `${e.target.children[accomodationId - 1].textContent}`
    });
  };

  return (
    <Container>
      <Accommodations
        name="Accommodations"
        onChange={handleSelect}
        value={headerAccomodation.accomodationId}
      >
        {selectList.map(item => (
          <Accommodation
            value={item.accomodationId}
            key={item.accomodationId}
          >
            {item.accomodationName}
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
