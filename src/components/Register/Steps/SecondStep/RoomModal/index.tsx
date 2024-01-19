import { useState, useRef } from 'react';
import styled from '@emotion/styled';

import { Backdrop } from '@components/common';
import { RoomModalProps, RoomModalStyleProps } from '@/types/register';
import close from '@assets/icons/ic-register-close.svg';
import sort from '@assets/icons/ic-register-sort.svg';
import filterChecked from '@assets/icons/ic-register-filter-checked.svg';
import filterUnchecked from '@assets/icons/ic-register-filter-unchecked.svg';
import listChecked from '@assets/icons/ic-register-checked.svg';
import listUnchecked from '@assets/icons/ic-register-unchecked.svg';

const list = [
  {
    id: 12,
    roomNumber: 101,
    roomType: '트윈베드룸',
    price: 10000
  },
  {
    id: 13,
    roomNumber: 102,
    roomType: '싱글베드룸',
    price: 20000
  }
];

const RoomModal = ({
  value,
  setToAllRoom,
  rooms,
  setRooms,
  onButtonClick
}: RoomModalProps) => {
  const [selectedRooms, setSelectedRooms] = useState([...rooms]);
  const backdropRef = useRef<HTMLDivElement>(null);

  setToAllRoom(value);

  const handleClose = () => {
    if (!rooms) {
      setToAllRoom(0);
    }
    onButtonClick(false);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backdropRef.current) {
      handleClose();
    }
  };

  const handleApply = () => {
    setRooms(selectedRooms);
    onButtonClick(false);
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const entireList: string[] = [];
      list.forEach(room => {
        entireList.push(room.roomType);
      });
      setSelectedRooms(entireList);
    } else {
      setSelectedRooms([]);
    }
  };

  const handleSelectOne = (
    e: React.ChangeEvent<HTMLInputElement>,
    roomType: string
  ) => {
    if (e.target.checked) {
      setSelectedRooms(prev => [...prev, roomType]);
    } else {
      setSelectedRooms(selectedRooms.filter(room => room !== roomType));
    }
  };

  return (
    <Backdrop
      backdropRef={backdropRef}
      onBackdropClick={handleBackdropClick}
    >
      <Container>
        <Header>
          적용 객실 설정
          <CloseButton
            $src={close}
            onClick={handleClose}
          />
        </Header>
        <Filter>
          <FilterCell>
            <label>
              <SelectAll
                type="checkbox"
                checked={selectedRooms.length === list.length ? true : false}
                $src={filterChecked}
                onChange={handleSelectAll}
              />
              <FilterCheckIcon $src={filterUnchecked} />
            </label>
          </FilterCell>
          <FilterCell>
            <SortButton>
              객실명
              <SortIcon src={sort} />
            </SortButton>
          </FilterCell>
          <FilterCell>
            <SortButton>
              객실 금액
              <SortIcon src={sort} />
            </SortButton>
          </FilterCell>
        </Filter>
        <ContentWrapper>
          {list.map((room, index) => {
            return (
              <List key={index}>
                <ListCell>
                  <label>
                    <SelectOne
                      type="checkbox"
                      checked={
                        selectedRooms.includes(room.roomType) ? true : false
                      }
                      $src={listChecked}
                      onChange={e => handleSelectOne(e, room.roomType)}
                    />
                    <ListCheckIcon $src={listUnchecked} />
                  </label>
                </ListCell>
                <ListCell>
                  {room.roomType.length < 8
                    ? room.roomType
                    : room.roomType.slice(0, 7) + '...'}
                </ListCell>
                <ListCell>{room.price.toLocaleString()}원</ListCell>
              </List>
            );
          })}
        </ContentWrapper>
        <Footer>
          <Button
            onClick={handleApply}
            disabled={
              selectedRooms.length === list.length || !selectedRooms.length
            }
          >
            {selectedRooms.length}개 적용하기
          </Button>
        </Footer>
      </Container>
    </Backdrop>
  );
};

export default RoomModal;

const Container = styled.div`
  width: 378px;
  height: 712px;

  background-color: #fff;
  border-radius: 20px;
  box-shadow:
    0px 17px 22px 0px rgba(0, 0, 0, 0.05),
    -0.73px 0.73px 0.73px -1.46px rgba(255, 255, 255, 0.35) inset;
`;

const Header = styled.div`
  height: 63px;

  padding: 5px 20px 0px 25px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 18px;
`;

const CloseButton = styled.button<RoomModalStyleProps>`
  width: 35px;
  height: 35px;

  padding: 0px;
  border: none;

  background: url(${props => props.$src}) center / contain;

  cursor: pointer;
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
`;

const FilterCell = styled.div`
  color: #fff;
  font-size: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectAll = styled.input<RoomModalStyleProps>`
  display: none;

  &:checked + div {
    background: url(${props => props.$src}) no-repeat;
  }
`;

const FilterCheckIcon = styled.div<RoomModalStyleProps>`
  width: 21px;
  height: 21px;

  background: url(${props => props.$src}) no-repeat;
`;

const SortButton = styled.button`
  border: none;

  display: flex;
  align-items: center;

  color: #fff;
  font-family: 'Noto Sans KR';
  font-size: 15px;

  background: transparent;
`;

const SortIcon = styled.img`
  width: 20px;
  height: 20px;

  margin-left: 10px;
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
`;

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  grid-template-rows: 46px;
`;

const ListCell = styled.div`
  font-size: 15px;
  font-weight: 400;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectOne = styled.input<RoomModalStyleProps>`
  display: none;

  &:checked + div {
    background: url(${props => props.$src}) no-repeat;
  }
`;

const ListCheckIcon = styled.div<RoomModalStyleProps>`
  width: 21px;
  height: 21px;

  background: url(${props => props.$src}) no-repeat;
`;

const Footer = styled.div`
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 170px;
  height: 44px;

  padding: 13px 16px;
  border: none;
  border-radius: 8px;

  color: #fff;
  font-size: 18px;
  font-weight: 700;

  background: #022c79;

  cursor: pointer;

  &:disabled {
    background: #cdcfd0;
  }
`;
