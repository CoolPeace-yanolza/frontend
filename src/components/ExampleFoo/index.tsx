import ExampleBar from './ExampleBar';
import ExampleBaz from './ExampleBaz';
import useExample from '@/hooks/useExample';

const ExampleFoo = () => {
  const example: useExampleType = useExample();

  return (
    <>
      {example}
      <ExampleBar />
      <ExampleBaz />
    </>
  );
};

export default ExampleFoo;
