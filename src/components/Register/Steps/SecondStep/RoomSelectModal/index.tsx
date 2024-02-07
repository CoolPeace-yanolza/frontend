import { useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';

import theme from '@styles/theme';
import { Backdrop } from '@components/common';
import { RoomType, RoomSelectModalProps } from '@/types/register';
import close from '@assets/icons/ic-register-close.svg';
import sort from '@assets/icons/ic-register-sort.svg';
import filterChecked from '@assets/icons/ic-register-filter-checked.svg';
import filterUnchecked from '@assets/icons/ic-register-filter-unchecked.svg';
import listChecked from '@assets/icons/ic-register-checked.svg';
import listUnchecked from '@assets/icons/ic-register-unchecked.svg';
import { sliceName } from '@utils/index';
import { registerInputState, previewState } from '@recoil/index';

const RoomSelectModal = ({ setIsOpen }: RoomSelectModalProps) => {
  const [input, setInput] = useRecoilState(registerInputState);
  const [preview, setPreview] = useRecoilState(previewState);

  const [selectedRooms, setSelectedRooms] = useState([...input.selectedRooms]);
  const [sortedRooms, setSortedRooms] = useState([...input.rooms]);
  const [isSortedByNumber, setIsSortedByNumber] = useState(false);
  const [isSortedByPrice, setIsSortedByPrice] = useState(true);
  const backdropRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    if (!input.selectedRooms.length) {
      const falseRadioButton =
        document.querySelector<HTMLInputElement>('#false')!;
      falseRadioButton.checked = false;

      setInput({ ...input, toAllRooms: '' });
      setPreview({ ...preview, toAllRooms: '적용 객실' });
    }
    setIsOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backdropRef.current) {
      handleClose();
    }
  };

  const handleApply = () => {
    setInput({ ...input, selectedRooms: [...selectedRooms] });
    setIsOpen(false);
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRooms(e.target.checked ? [...sortedRooms] : []);
  };

  const handleSelectOne = (
    e: React.ChangeEvent<HTMLInputElement>,
    room: RoomType
  ) => {
    if (e.target.checked) {
      setSelectedRooms(prev => [...prev, room]);
    } else {
      setSelectedRooms(selectedRooms.filter(element => element !== room));
    }
  };

  const handleSort = (
    isSorted: boolean,
    compareFunction: (a: RoomType, b: RoomType) => number
  ) => {
    const sortedList = isSorted
      ? [...sortedRooms].reverse()
      : sortedRooms.sort(compareFunction);

    setIsSortedByNumber(prev => !prev);
    setIsSortedByPrice(prev => !prev);
    setSortedRooms(sortedList);
  };

  const handleSortByName = () => {
    handleSort(isSortedByNumber, (a, b) =>
      a.roomNumber.localeCompare(b.roomNumber)
    );
  };

  const handleSortByPrice = () => {
    handleSort(isSortedByPrice, (a, b) => a.price - b.price);
  };

  return (
    <Backdrop
      backdropRef={backdropRef}
      onBackdropClick={handleBackdropClick}
    >
      <Container>
        <Header>
          적용 객실 설정
          <CloseButton onClick={handleClose}>
            <CloseIcon
              src={close}
              alt="닫기 아이콘"
            />
          </CloseButton>
        </Header>
        <Filter>
          <FilterCell>
            <label>
              <SelectAll
                type="checkbox"
                checked={selectedRooms.length === sortedRooms.length}
                onChange={handleSelectAll}
              />
              <FilterCheckIcon
                src={
                  selectedRooms.length === sortedRooms.length
                    ? filterChecked
                    : filterUnchecked
                }
                alt="체크박스 아이콘"
              />
            </label>
          </FilterCell>
          <FilterCell>
            <SortButton onClick={handleSortByName}>
              객실명
              <SortIcon src={sort} />
            </SortButton>
          </FilterCell>
          <FilterCell>
            <SortButton onClick={handleSortByPrice}>
              객실 금액
              <SortIcon src={sort} />
            </SortButton>
          </FilterCell>
        </Filter>
        <ContentWrapper>
          {sortedRooms.map((room, index) => {
            return (
              <List key={index}>
                <ListCell>
                  <label>
                    <SelectOne
                      type="checkbox"
                      checked={selectedRooms.includes(room) ? true : false}
                      onChange={e => handleSelectOne(e, room)}
                    />
                    <ListCheckIcon
                      src={
                        selectedRooms.includes(room)
                          ? listChecked
                          : listUnchecked
                      }
                      alt="체크박스 아이콘"
                    />
                  </label>
                </ListCell>
                <ListCell>{sliceName(room.roomNumber)}</ListCell>
                <ListCell>{room.price.toLocaleString()}원</ListCell>
              </List>
            );
          })}
        </ContentWrapper>
        <Footer>
          <Button
            onClick={handleApply}
            disabled={
              selectedRooms.length === sortedRooms.length ||
              !selectedRooms.length
            }
          >
            {selectedRooms.length}개 적용하기
          </Button>
        </Footer>
      </Container>
    </Backdrop>
  );
};

export default RoomSelectModal;

const Container = styled.div`
  width: 378px;
  height: 712px;

  background-color: #fff;
  border-radius: 20px;
  box-shadow:
    0px 17px 22px 0px rgba(0, 0, 0, 0.05),
    -0.73px 0.73px 0.73px -1.46px rgba(255, 255, 255, 0.35) inset;

  ${theme.response.tablet} {
    width: 270px;
    height: 535px;
  }
`;

const Header = styled.div`
  height: 63px;

  padding: 5px 20px 0px 25px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 18px;
  font-weight: 600;

  ${theme.response.tablet} {
    height: 55px;

    font-size: 13px;
  }
`;

const CloseButton = styled.button`
  width: 35px;
  height: 35px;

  padding: 0px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  background: #fff;

  cursor: pointer;
`;

const CloseIcon = styled.img`
  width: 35px;
  height: 35px;

  ${theme.response.tablet} {
    width: 26px;
    height: 26px;
  }
`;

const Filter = styled.div`
  height: 63px;

  background: linear-gradient(
    122deg,
    #111f3f 37.38%,
    rgba(26, 40, 73, 0.75) 87.92%
  );

  display: grid;
  grid-template-columns: 1fr 2fr 2fr;

  ${theme.response.tablet} {
    height: 50px;
  }
`;

const FilterCell = styled.div`
  color: #fff;
  font-size: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectAll = styled.input`
  display: none;
`;

const FilterCheckIcon = styled.img`
  width: 21px;
  height: 21px;

  ${theme.response.tablet} {
    width: 17px;
    height: 17px;
  }
`;

const SortButton = styled.button`
  border: none;

  display: flex;
  align-items: center;

  color: #fff;
  font-family: 'Noto Sans KR';
  font-size: 15px;

  background: transparent;

  ${theme.response.tablet} {
    font-size: 12px;
  }
`;

const SortIcon = styled.img`
  width: 20px;
  height: 20px;

  margin-left: 10px;

  ${theme.response.tablet} {
    width: 15px;
    height: 15px;
  }
`;

const ContentWrapper = styled.div`
  height: 480px;

  padding: 10px 0px;

  display: flex;
  flex-direction: column;

  box-shadow:
    0px 17px 22px 0px rgba(0, 0, 0, 0.05),
    -0.73px 0.73px 0.73px -1.46px rgba(255, 255, 255, 0.35) inset;

  overflow: auto;

  ${theme.response.tablet} {
    height: 355px;

    padding: 5px 0px;
  }
`;

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  grid-template-rows: 46px;

  ${theme.response.tablet} {
    grid-template-rows: 38px;
  }
`;

const ListCell = styled.div`
  font-size: 15px;
  font-weight: 400;

  display: flex;
  justify-content: center;
  align-items: center;

  ${theme.response.tablet} {
    font-size: 12px;
  }
`;

const SelectOne = styled.input`
  display: none;
`;

const ListCheckIcon = styled.img`
  width: 21px;
  height: 21px;

  ${theme.response.tablet} {
    width: 17px;
    height: 17px;
  }
`;

const Footer = styled.div`
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${theme.response.tablet} {
    height: 75px;
  }
`;

const Button = styled.button`
  width: 170px;
  height: 44px;

  border: none;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 18px;
  font-weight: 700;

  background: #022c79;

  cursor: pointer;

  &:disabled {
    background: #cdcfd0;
  }

  ${theme.response.tablet} {
    width: 135px;
    height: 34px;

    font-size: 13px;
  }
`;
