import styled from '@emotion/styled';
import theme from '@styles/theme';

import { useRecoilState } from 'recoil';
import { headerAccommodationState } from '@recoil/index';
import useGetHeaderAccommodation from '@hooks/queries/useGetHeaderAccommodation';
import { useEffect } from 'react';

const Select = () => {
  const { data: selectList } = useGetHeaderAccommodation();

  const [headerAccommodation, setHeaderAccommodation] = useRecoilState(
    headerAccommodationState
  );

  useEffect(() => {
    setHeaderAccommodation(selectList[0]);
  }, []);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectId = Number(e.target.value);

    const selectAccommodation = selectList.find(
      select => select.id === selectId
    );

    selectAccommodation ? setHeaderAccommodation(selectAccommodation) : null;
  };

  return (
    <Container>
      <Accommodations
        name="Accommodations"
        onChange={handleSelect}
        value={headerAccommodation.id}
      >
        {selectList.map(item => (
          <Accommodation
            value={item.id}
            key={item.id}
          >
            {item.name}
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

  font-weight: 500;

  color: rgba(60, 60, 67, 0.6);
  background-color: rgba(247, 248, 252, 1);
  outline-color: ${theme.colors.brand};

  appearance: none;

  &::-ms-expand {
    display: none;
  }

  ${theme.response.tablet} {
    width: 150px;
    height: 30px;

    margin-right: 0;
    padding: 0 20px;

    font-size: 12px;
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
