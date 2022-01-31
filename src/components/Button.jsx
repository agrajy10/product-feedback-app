import styled from 'styled-components';

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
`;

function Button({ variant = 'primary', type = 'button', children }) {
  return (
    <ButtonEl type={type} variant={variant}>
      {children}
    </ButtonEl>
  );
}

export default Button;
