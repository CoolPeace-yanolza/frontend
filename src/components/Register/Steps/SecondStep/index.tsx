import ReactDOM from 'react-dom';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';

import {
  InputContainer,
  InputButton,
  InputCheckBox,
  InputWrapper,
  ErrorMessage
} from '@components/Register/common';
import RoomSelectModal from './RoomSelectModal';
import RoomSelectButton from './RoomSelectButton';
import RoomList from './RoomList';
import { RoomsType } from '@/types/register';
import { registerInputState, registerValidState } from '@recoil/index';

const SecondStep = () => {
  const [input, setInput] = useRecoilState(registerInputState);
  const [isValid, setIsValid] = useRecoilState(registerValidState);

  const [roomType, setRoomType] = useState(0);
  const [toAllRoom, setToAllRoom] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [rooms, setRooms] = useState<RoomsType>([]);

  const handleRoomTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setInput(prev => ({
        ...prev,
        roomType: [...prev.roomType, e.target.value]
      }));
    } else {
      setInput(prev => ({
        ...prev,
        roomType: prev.roomType.filter(element => element !== e.target.value)
      }));
    }

    setIsValid(prev => ({
      ...prev,
      isRoomTypeValid: true
    }));
  };

  const handleLabelChange = () => {
    setInput(prev => ({ ...prev, severalNights: !prev.severalNights }));
  };

  const handleIsAllRoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, isAllRoom: e.target.value });
    setIsValid(prev => ({
      ...prev,
      isAllRoomValid: true
    }));
  };

  return (
    <>
      {isOpen &&
        ReactDOM.createPortal(
          <RoomSelectModal
            value={2}
            setToAllRoom={setToAllRoom}
            rooms={rooms}
            setRooms={setRooms}
            onButtonClick={setIsOpen}
          />,
          document.getElementById('modal-root') as HTMLElement
        )}
      <InputContainer title="쿠폰을 적용할 유형을 선택해주세요.">
        <ButtonWrapper>
          <InputButton
            type="checkbox"
            id="dayuse"
            name="roomType"
            value="대실"
            isChecked={input.customerType === '대실'}
            buttonName="대실"
            onButtonChange={handleRoomTypeChange}
          />
          <InputButton
            type="checkbox"
            id="stay"
            name="roomType"
            value="숙박"
            isChecked={input.customerType === '숙박'}
            buttonName="숙박"
            state={1}
            currentInput={roomType}
            setState={setRoomType}
            onButtonChange={handleRoomTypeChange}
          />
        </ButtonWrapper>
        <InputWrapper
          whichInput={1}
          currentInput={roomType}
        >
          <ContentWrapper>
            <InputCheckBox
              id="severalNights"
              text="2박 이상 적용"
              onCheck={handleLabelChange}
            />
          </ContentWrapper>
        </InputWrapper>
        {!isValid.isRoomTypeValid && (
          <ErrorMessage>쿠폰 적용 유형 선택은 필수입니다.</ErrorMessage>
        )}
      </InputContainer>
      <InputContainer title="쿠폰을 적용할 객실을 선택해주세요.">
        <ButtonWrapper>
          <InputButton
            type="radio"
            id="true"
            name="toAllRoom"
            value="true"
            isChecked={input.customerType === 'true'}
            buttonName="모든 객실"
            state={1}
            setState={setToAllRoom}
            onButtonChange={handleIsAllRoomChange}
          />
          <RoomSelectButton
            type="radio"
            id="false"
            name="toAllRoom"
            value="false"
            buttonName="선택 객실"
            rooms={rooms.length}
            setState={setIsOpen}
            onButtonChange={handleIsAllRoomChange}
          />
        </ButtonWrapper>
        <InputWrapper
          whichInput={2}
          currentInput={toAllRoom}
        >
          <ContentWrapper>
            <RoomList rooms={rooms} />
          </ContentWrapper>
        </InputWrapper>
        {!isValid.isAllRoomValid && (
          <ErrorMessage>쿠폰 적용 객실 선택은 필수입니다.</ErrorMessage>
        )}
      </InputContainer>
    </>
  );
};

export default SecondStep;

const ButtonWrapper = styled.div`
  margin-top: 20px;

  display: flex;
  gap: 23px;
`;

const ContentWrapper = styled.div`
  padding-left: 134px;
`;
