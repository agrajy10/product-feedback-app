import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonEl = styled.button`
  display: inline-block;
  padding: 0.8125rem;
  min-width: 158px;
  background-color: ${({ variant, theme }) => theme.button[variant].bg};
  color: ${({ variant, theme }) => theme.button[variant].color};
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1;
  border: none;
  border-radius: 0.625rem;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: ${({ variant, theme }) => theme.button[variant].hover.bg};
    color: ${({ variant, theme }) => theme.button[variant].hover.color};
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const LinkEl = styled(Link)`
  display: inline-block;
  padding: 0.8125rem;
  min-width: 158px;
  background-color: ${({ variant, theme }) => theme.button[variant].bg};
  color: ${({ variant, theme }) => theme.button[variant].color};
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1;
  border: none;
  border-radius: 0.625rem;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: ${({ variant, theme }) => theme.button[variant].hover.bg};
    color: ${({ variant, theme }) => theme.button[variant].hover.color};
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

function Button({ href, className, variant = 'primary', type = 'button', children, ...props }) {
  return href ? (
    <LinkEl to={href} className={className} variant={variant} {...props}>
      {children}
    </LinkEl>
  ) : (
    <ButtonEl type={type} className={className} variant={variant} {...props}>
      {children}
    </ButtonEl>
  );
}

export default Button;
