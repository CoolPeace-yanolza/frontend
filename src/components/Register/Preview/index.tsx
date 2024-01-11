import styled from '@emotion/styled';

const Preview = () => {
  return <PreviewContainer>Preview</PreviewContainer>;
};

export default Preview;

const PreviewContainer = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;
