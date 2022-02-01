import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

import breakpoints from '../styles/breakpoints';

import { ReactComponent as IconArrowLeft } from '../assets/shared/icon-arrow-left.svg';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0 15px;
  background: transparent;
  font-size: 13px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  user-select: none;
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
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(-1)} variant={variant}>
      <IconArrowLeft />
      {children}
    </Button>
  );
}

export default BackButton;
