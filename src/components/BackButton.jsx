import styled from 'styled-components';
import { Link } from 'react-router-dom';

import breakpoints from '../styles/breakpoints';

import IconArrowLeft from '../assets/shared/icon-arrow-left.svg';

const LinkEl = styled(Link)`
  display: inline-block;
  padding-left: 23px;
  background: url(${IconArrowLeft}) no-repeat left center;
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.color};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media (min-width: ${breakpoints.md}px) {
    font-size: 14px;
  }
`;

function BackButton({ children }) {
  return <LinkEl to="/">{children}</LinkEl>;
}

export default BackButton;
