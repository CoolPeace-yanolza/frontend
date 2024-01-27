import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { Dropdown, DropdownProps } from 'semantic-ui-react';

import { headerAccommodationState } from '@recoil/index';
import useGetHeaderAccommodation from '@hooks/queries/useGetHeaderAccommodation';
import theme from '@styles/theme';

const Select = () => {
  const { data: selectList } = useGetHeaderAccommodation();
  const [headerAccommodation, setHeaderAccommodation] = useRecoilState(
    headerAccommodationState
  );

  const handleSelect = (
    _e: React.SyntheticEvent<HTMLElement>,
    data: DropdownProps
  ) => {
    const selectId = Number(data.value);

    const selectAccommodation = selectList.find(
      select => select.id === selectId
    );

    selectAccommodation ? setHeaderAccommodation(selectAccommodation) : null;
  };

  return (
    <StyledDropdown
      selection
      options={selectList.map(item => ({
        key: item.id,
        text: item.name,
        value: item.id
      }))}
      onChange={handleSelect}
      value={headerAccommodation.id}
    />
  );
};

export default Select;

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
      min-width: 180px;

      margin-right: 15px;
      padding: 5px 15px;

      font-size: 12px;
    }

    .text {
      color: rgba(60, 60, 67, 0.6);
    }
  }
`;
