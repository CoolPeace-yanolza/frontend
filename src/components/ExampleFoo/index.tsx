import { useExample } from '@hooks/index';
import ExampleBar from './ExampleBar';
import ExampleBaz from './ExampleBaz';
import ExampleToast from '@components/common/ExampleToast';

const ExampleFoo = () => {
  const example = useExample();

  return (
    <>
      {example}
      <ExampleBar />
      <ExampleBaz />
      <ExampleToast />
    </>
  );
};

export default ExampleFoo;
