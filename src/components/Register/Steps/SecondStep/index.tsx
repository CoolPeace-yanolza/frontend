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
    if (e.target.value === '대실') {
      if (e.target.checked) {
        setInput(prev => ({
          ...prev,
          roomType: ['대실', ...prev.roomType]
        }));
        setPreview(prev => ({
          ...prev,
          roomType: ['대실', ...prev.roomType]
        }));
      } else {
        setInput(prev => ({
          ...prev,
          roomType: prev.roomType.filter(element => element !== '대실')
        }));
        setPreview(prev => ({
          ...prev,
          roomType: prev.roomType.filter(element => element !== '대실')
        }));
      }
    } else {
      if (e.target.checked) {
        setInput(prev => ({
          ...prev,
          roomType: [...prev.roomType, '숙박']
        }));
        setPreview(prev => ({
          ...prev,
          roomType: [...prev.roomType, '숙박']
        }));
      } else {
        if (input.roomType.includes('대실')) {
          setInput(prev => ({
            ...prev,
            roomType: prev.roomType.slice(0, 1)
          }));
          setPreview(prev => ({
            ...prev,
            roomType: prev.roomType.slice(0, 1)
          }));
        } else {
          setInput(prev => ({
            ...prev,
            roomType: []
          }));
          setPreview(prev => ({
            ...prev,
            roomType: []
          }));
        }
        if (input.severalNights) {
          setInput(prev => ({
            ...prev,
            severalNights: !prev.severalNights
          }));
        }
      }
    }

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

  const handleIsAllRoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, isAllRoom: e.target.value });
    setPreview({ ...preview, toAllRoom: e.target.value });
    setIsValid(prev => ({
      ...prev,
      isAllRoomValid: true
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
            name="toAllRoom"
            value="true"
            isChecked={input.isAllRoom === 'true'}
            buttonName="모든 객실"
            onButtonChange={handleIsAllRoomChange}
          />
          <RoomSelectButton
            type="radio"
            id="false"
            name="toAllRoom"
            value="false"
            isChecked={input.isAllRoom === 'false'}
            buttonName="선택 객실"
            setIsOpen={setIsOpen}
            onButtonChange={handleIsAllRoomChange}
          />
        </ButtonWrapper>
        <InputWrapper
          state="false"
          currentState={input.isAllRoom}
        >
          <ContentWrapper>
            <RoomList rooms={input.rooms} />
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
