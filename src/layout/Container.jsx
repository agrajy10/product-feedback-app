import styled from 'styled-components';

import breakpoints from '../styles/breakpoints';

const Wrapper = styled.div`
  width: 100%;
  max-width: 72.375rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin: 0 auto;
  @media (min-width: ${breakpoints.md}px) {
    padding-top: 56px;
    padding-bottom: 120px;
  }
  @media (min-width: ${breakpoints.lg}px) {
    padding-top: 94px;
    padding-bottom: 130px;
  }
`;

function Container({ className, children }) {
  return <Wrapper className={className}>{children}</Wrapper>;
}

export default Container;
