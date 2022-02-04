import styled from 'styled-components';

import Container from '../layout/Container';

import breakpoints from '../styles/breakpoints';

export const FormContainer = styled(Container)`
  max-width: 540px;
  .field-wrap {
    margin-bottom: 24px;
  }
`;

export const FormHeading = styled.h1`
  font-size: 18px;
  margin: 0 0 24px 0;
  @media (min-width: ${breakpoints.md}px) {
    font-size: 24px;
  }
`;

export const FormBottom = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 16px;
  @media (min-width: ${breakpoints.md}px) {
    display: flex;
    flex-direction: row-reverse;
    .cancel-btn,
    .delete-btn {
      min-width: unset;
      padding: 12px 24px;
    }
    .delete-btn {
      margin-right: auto;
    }
  }
`;

export const FormLinks = styled.div`
  text-align: center;
  font-size: 14px;
  line-height: 1.1;
  margin-top: 25px;
  p {
    margin-bottom: 5px;
  }
  a {
    color: ${({ theme }) => theme.button.primary.bg};
    &:hover {
      text-decoration: none;
    }
  }
  @media (min-width: ${breakpoints.md}px) {
    text-align: right;
  }
`;
