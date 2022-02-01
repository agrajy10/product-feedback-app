import styled from 'styled-components';
import { Link } from 'react-router-dom';

import breakpoints from '../styles/breakpoints';

import { ReactComponent as IconArrowLeft } from '../assets/shared/icon-arrow-left.svg';

const LinkEl = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0 15px;
  background: transparent;
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme, variant }) => theme.goBackButton[variant].color};
  text-decoration: none;
  svg {
    color: ${({ theme, variant }) => theme.goBackButton[variant].arrow};
  }
  &:hover {
    text-decoration: underline;
  }
  @media (min-width: ${breakpoints.md}px) {
    font-size: 14px;
  }
`;

function BackButton({ children, variant = 'light' }) {
  return (
    <LinkEl to="/" variant={variant}>
      <IconArrowLeft />
      {children}
    </LinkEl>
  );
}

export default BackButton;
