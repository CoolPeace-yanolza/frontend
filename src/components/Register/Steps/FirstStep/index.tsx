import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';

import theme from '@styles/theme';
import {
  InputContainer,
  InputButton,
  InputField,
  InputCheckBox,
  ErrorMessage
} from '@components/Register/common';
import { LimitWrapperStyleProps } from '@/types/register';
import {
  registerInputState,
  registerValidState,
  previewState
} from '@recoil/index';
import {
  validateTitle,
  validateCustomerType,
  validateDiscountType,
  validateDiscountFlat,
  validateDiscountFlatRate,
  validateLabel,
  validateMaximumDiscount
} from '@utils/index';

const FirstStep = () => {
  const [input, setInput] = useRecoilState(registerInputState);
  const [isValid, setIsValid] = useRecoilState(registerValidState);
  const [preview, setPreview] = useRecoilState(previewState);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, title: e.target.value });
    validateTitle(e.target.value, setIsValid);
  };

  const handleCustomerTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, customerType: e.target.value });
    setPreview({ ...preview, customer: e.target.value + ' 대상' });
    validateCustomerType(e.target.value, setIsValid);
  };

  const handleDiscountTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, discountType: e.target.value });
    validateDiscountType(e.target.value, setIsValid);
  };

  const handleDiscountFlatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, discountFlat: e.target.value });
    setPreview({
      ...preview,
      discount: Number(e.target.value).toLocaleString() + '원 할인'
    });
    validateDiscountFlat(setIsValid);
  };

  const handleDiscountFlatRateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInput({ ...input, discountFlatRate: e.target.value });
    setPreview({
      ...preview,
      discount: e.target.value + '% 할인'
    });
    validateDiscountFlatRate(setIsValid);
  };

  const handleLabelChange = () => {
    setInput(prev => ({
      ...prev,
      hasLimit: !input.hasLimit
    }));
    validateLabel(setIsValid);
  };

  const handleMaximumDiscountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInput({ ...input, maximumDiscount: e.target.value });
    validateMaximumDiscount(setIsValid);
  };

  return (
    <>
      <InputContainer title="쿠폰의 이름을 입력해주세요.">
        <Input
          maxLength={20}
          placeholder="20자 내외로 입력하세요. ex) 크리스마스 이벤트 1"
          defaultValue={input.title}
          onChange={handleTitleChange}
        />
        {!isValid.isTitleValid && (
          <ErrorMessage>쿠폰명 입력은 필수입니다.</ErrorMessage>
        )}
      </InputContainer>
      <InputContainer title="누구에게 쿠폰을 제공하시겠어요?">
        <ButtonWrapper>
          <InputButton
            type="radio"
            id="all"
            name="customerType"
            value="모든 고객"
            isChecked={input.customerType === '모든 고객'}
            buttonName="모든 고객"
            onButtonChange={handleCustomerTypeChange}
          />
          <InputButton
            type="radio"
            id="first"
            name="customerType"
            value="첫방문 고객"
            isChecked={input.customerType === '첫방문 고객'}
            buttonName="첫방문 고객"
            onButtonChange={handleCustomerTypeChange}
          />
          <InputButton
            type="radio"
            id="revisit"
            name="customerType"
            value="재방문 고객"
            isChecked={input.customerType === '재방문 고객'}
            buttonName="재방문 고객"
            onButtonChange={handleCustomerTypeChange}
          />
        </ButtonWrapper>
        {!isValid.isCustomerTypeValid && (
          <ErrorMessage>쿠폰 제공 대상 설정은 필수입니다.</ErrorMessage>
        )}
      </InputContainer>
      <InputContainer title="어떤 쿠폰을 제공하시겠어요?">
        <ButtonWrapper>
          <InputButton
            type="radio"
            id="price"
            name="discountType"
            value="정액 할인"
            isChecked={input.discountType === '정액 할인'}
            buttonName="정액 할인"
            onButtonChange={handleDiscountTypeChange}
          />
          <InputButton
            type="radio"
            id="rate"
            name="discountType"
            value="정률 할인"
            isChecked={input.discountType === '정률 할인'}
            buttonName="정률 할인"
            onButtonChange={handleDiscountTypeChange}
          />
        </ButtonWrapper>
        {input.discountType === '정액 할인' && (
          <InputField
            placeholder="ex) 5000"
            defaultValue={input.discountFlat}
            text="원"
            onInputChange={handleDiscountFlatChange}
          />
        )}
        {input.discountType === '정률 할인' && (
          <ContentWrapper>
            <InputField
              placeholder="ex) 50"
              defaultValue={input.discountFlatRate}
              mode="percent"
              text="% 할인"
              onInputChange={handleDiscountFlatRateChange}
            />
            <InputCheckBox
              id="discountLimit"
              text="최대 할인 한도 설정하기"
              isChecked={input.hasLimit}
              onCheck={handleLabelChange}
            />
          </ContentWrapper>
        )}
        <LimitWrapper $hasLimit={input.hasLimit}>
          {input.discountType === '정률 할인' && (
            <InputField
              placeholder="ex) 5000"
              defaultValue={input.maximumDiscount}
              text="원"
              onInputChange={handleMaximumDiscountChange}
            />
          )}
        </LimitWrapper>
        {(!isValid.isDiscountTypeValid ||
          !isValid.isDiscountFlatValid ||
          !isValid.isDiscountFlatRateValid) && (
          <ErrorMessage>쿠폰 할인 설정은 필수입니다.</ErrorMessage>
        )}
        {!isValid.isThousands && (
          <ErrorMessage>1,000 원 단위로 입력 가능합니다.</ErrorMessage>
        )}
      </InputContainer>
    </>
  );
};

export default FirstStep;

const Input = styled.input`
  width: 348px;
  height: 40px;

  margin-top: 20px;
  border: none;
  border-radius: 30px;

  background-color: #f2f4f5;

  font-size: 15px;
  font-weight: 600;
  text-indent: 15px;

  outline: none;

  &::placeholder {
    color: #979c9e;
    font-weight: 500;
  }

  ${theme.response.tablet} {
    width: 44vw;
    height: 4.5vw;
    min-width: 220px;
    min-height: 24px;

    font-size: 1.7vw;

    &::placeholder {
      font-size: 1.7vw;
    }
  }

  @media (max-width: 550px) {
    font-size: 9px;

    &::placeholder {
      font-size: 9px;
    }
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;

  display: flex;
  gap: 23px;

  ${theme.response.tablet} {
    gap: 3vw;
  }

  @media (max-width: 550px) {
    gap: 16px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
`;

const LimitWrapper = styled.div<LimitWrapperStyleProps>`
  display: ${props => (props.$hasLimit ? 'block' : 'none')};
`;
