import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 72.375rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin: 0 auto;
`;

function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Container;
