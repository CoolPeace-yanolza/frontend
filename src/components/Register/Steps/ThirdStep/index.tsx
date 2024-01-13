import { InputAccordion } from '@components/Register/common';

const ThirdStep = () => {
  const temp = <div>temp</div>;

  return (
    <>
      <InputAccordion
        title="결제금액에 따라 달라요."
        content={temp}
      ></InputAccordion>
      <InputAccordion
        title="특정 요일에 사용이 가능해요."
        content={temp}
      ></InputAccordion>
    </>
  );
};

export default ThirdStep;
