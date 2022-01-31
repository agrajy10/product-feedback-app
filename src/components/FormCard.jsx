import styled from 'styled-components';

import breakpoints from '../styles/breakpoints';

const Wrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  margin-top: 55px;
  padding: 44px 23px;
  @media (min-width: ${breakpoints.sm}px) {
    margin-top: 68px;
    padding: 52px 42px;
  }
`;

const Icon = styled.img`
  position: absolute;
  top: -20px;
  left: 23px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  z-index: 1;
  @media (min-width: ${breakpoints.sm}px) {
    width: 56px;
    height: 56px;
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
