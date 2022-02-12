import styled from 'styled-components';

import breakpoints from '../styles/breakpoints';

const Wrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.white};
  border-radius: 0.625rem;
  margin-top: 3.4375rem;
  padding: 2.75rem 1.4375rem;
  @media (min-width: ${breakpoints.md}px) {
    margin-top: 4.25rem;
    padding: 3.25rem 2.625rem;
  }
`;

const Icon = styled.img`
  position: absolute;
  top: -20px;
  left: 23px;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  z-index: 1;
  @media (min-width: ${breakpoints.md}px) {
    width: 3.5rem;
    height: 3.5rem;
    top: -28px;
    left: 42px;
  }
`;

function FormCard({ icon, children }) {
  return (
    <Wrapper>
      <Icon src={icon} alt="" />
      {children}
    </Wrapper>
  );
}

export default FormCard;
