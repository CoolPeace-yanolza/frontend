import ReactDOM from 'react-dom';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';

import theme from '@styles/theme';
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
import {
  registerInputState,
  registerValidState,
  previewState
} from '@recoil/index';

const SecondStep = () => {
  const [input, setInput] = useRecoilState(registerInputState);
  const [isValid, setIsValid] = useRecoilState(registerValidState);
  const [preview, setPreview] = useRecoilState(previewState);

  const [isOpen, setIsOpen] = useState(false);

  const handleRoomTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    let updatedRoomType = [...input.roomType];

    if (value === '대실') {
      if (checked) {
        updatedRoomType = ['대실', ...updatedRoomType];
      } else {
        updatedRoomType = updatedRoomType.filter(element => element !== '대실');
      }
    } else {
      if (checked) {
        updatedRoomType = [...updatedRoomType, '숙박'];
      } else {
        if (updatedRoomType.includes('대실')) {
          updatedRoomType = updatedRoomType.slice(0, 1);
        } else {
          updatedRoomType = [];
        }

        if (input.severalNights) {
          setInput(prev => ({
            ...prev,
            severalNights: !prev.severalNights
          }));
        }
      }
    }

    setInput(prev => ({
      ...prev,
      roomType: updatedRoomType
    }));

    setPreview(prev => ({
      ...prev,
      roomType: updatedRoomType
    }));

    setIsValid(prev => ({
      ...prev,
      isRoomTypeValid: true
    }));
  };

  const handleLabelChange = () => {
    if (input.severalNights) {
      setInput(prev => ({
        ...prev,
        roomType: prev.roomType.filter(element => element !== '2박 이상'),
        severalNights: !prev.severalNights
      }));
      setPreview(prev => ({
        ...prev,
        roomType: prev.roomType.filter(element => element !== '2박 이상')
      }));
    } else {
      setInput(prev => ({
        ...prev,
        roomType: [...prev.roomType, '2박 이상'],
        severalNights: !prev.severalNights
      }));
      setPreview(prev => ({
        ...prev,
        roomType: [...prev.roomType, '2박 이상']
      }));
    }
  };

  const handleToAllRoomsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, toAllRooms: e.target.value });
    setPreview({
      ...preview,
      toAllRooms: e.target.value === 'true' ? '모든 객실' : '일부 객실'
    });
    setIsValid(prev => ({
      ...prev,
      isToAllRoomsValid: true
    }));
  };

  return (
    <>
      {isOpen &&
        ReactDOM.createPortal(
          <RoomSelectModal setIsOpen={setIsOpen} />,
          document.getElementById('modal-root') as HTMLElement
        )}
      <InputContainer title="쿠폰을 적용할 유형을 선택해주세요.">
        <ButtonWrapper>
          <InputButton
            type="checkbox"
            id="dayuse"
            name="roomType"
            value="대실"
            isChecked={input.roomType.includes('대실')}
            buttonName="대실"
            onButtonChange={handleRoomTypeChange}
          />
          <InputButton
            type="checkbox"
            id="stay"
            name="roomType"
            value="숙박"
            isChecked={input.roomType.includes('숙박')}
            buttonName="숙박"
            onButtonChange={handleRoomTypeChange}
          />
        </ButtonWrapper>
        <InputWrapper isSelected={input.roomType.includes('숙박')}>
          <ContentWrapper>
            <InputCheckBox
              id="severalNights"
              text="2박 이상 적용"
              isChecked={input.severalNights}
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
            name="toAllRooms"
            value="true"
            isChecked={input.toAllRooms === 'true'}
            buttonName="모든 객실"
            onButtonChange={handleToAllRoomsChange}
          />
          <RoomSelectButton
            type="radio"
            id="false"
            name="toAllRooms"
            value="false"
            isChecked={input.toAllRooms === 'false'}
            buttonName="선택 객실"
            setIsOpen={setIsOpen}
            onButtonChange={handleToAllRoomsChange}
          />
        </ButtonWrapper>
        <InputWrapper
          state="false"
          currentState={input.toAllRooms}
        >
          <ContentWrapper>
            <RoomList rooms={input.selectedRooms} />
          </ContentWrapper>
        </InputWrapper>
        {!isValid.isToAllRoomsValid && (
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

  ${theme.response.tablet} {
    padding-left: 15.7vw;
  }

  @media (max-width: 850px) {
    padding-left: 15.8vw;
  }

  @media (max-width: 800px) {
    padding-left: 16vw;
  }

  @media (max-width: 750px) {
    padding-left: 16.2vw;
  }

  @media (max-width: 700px) {
    padding-left: 16.5vw;
  }

  @media (max-width: 650px) {
    padding-left: 16.7vw;
  }

  @media (max-width: 600px) {
    padding-left: 17vw;
  }

  @media (max-width: 550px) {
    padding-left: 93px;
  }
`;
