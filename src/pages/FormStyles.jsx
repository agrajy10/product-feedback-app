import styled from 'styled-components';

import Container from '../layout/Container';

import breakpoints from '../styles/breakpoints';

export const FormContainer = styled(Container)`
  max-width: 33.75rem;
  .field-wrap {
    margin-bottom: 1.5rem;
  }
`;

export const FormHeading = styled.h1`
  font-size: 1.125rem;
  margin: 0 0 1.5rem 0;
  @media (min-width: ${breakpoints.md}px) {
    font-size: 1.5rem;
  }
`;

export const FormBottom = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 1rem;
  @media (min-width: ${breakpoints.md}px) {
    display: flex;
    flex-direction: row-reverse;
    .cancel-btn,
    .delete-btn {
      min-width: unset;
      padding: 0.75rem 1.5rem;
    }
    .delete-btn {
      margin-right: auto;
    }
  }
`;

export const FormLinks = styled.div`
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.1;
  margin-top: 1.5625rem;
  p {
    margin-bottom: 0.3125rem;
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
