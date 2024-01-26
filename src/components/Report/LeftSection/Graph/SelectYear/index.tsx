import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Dropdown, DropdownProps } from 'semantic-ui-react';
import styled from '@emotion/styled';

import { headerAccommodationState, selectedYearState } from '@recoil/index';
import { initYearSelectList } from '@utils/index';
import theme from '@styles/theme';

const SelectYear = () => {
  const selectYearReport = initYearSelectList();
  const [selectedYear, setSelectedYear] = useRecoilState(selectedYearState);
  const headerAccommodation = useRecoilValue(headerAccommodationState);

  useEffect(() => {
    setSelectedYear({ year: selectYearReport[0] });
  }, [headerAccommodation]);

  const handleSelect = (
    _e: React.SyntheticEvent<HTMLElement>,
    data: DropdownProps
  ) => {
    setSelectedYear({ year: Number(data.value) });
  };

  return (
    <StyledDropdown
      selection
      options={selectYearReport.map(item => ({
        key: item,
        text: item,
        value: item
      }))}
      onChange={handleSelect}
      value={selectedYear.year}
    />
  );
};

export default SelectYear;

const StyledDropdown = styled(Dropdown)`
  &.ui.dropdown {
    min-width: 200px;

    border-radius: 12px;
    padding: 10px 20px;

    display: flex;
    align-items: center;

    color: rgba(60, 60, 67, 0.6);
    background-color: rgba(247, 248, 252, 1);
    font-weight: 500;

    .text {
      color: rgba(60, 60, 67, 0.6);
    }
  }

  ${theme.response.tablet} {
    &.ui.dropdown {
      min-width: 100px;
      padding: 5px 15px;

      font-size: 12px;
    }

    .text {
      color: rgba(60, 60, 67, 0.6);
    }
  }
`;
