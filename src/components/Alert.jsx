import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  padding: 10px 20px;
  font-size: 14px;
  background-color: ${({ theme, variant }) => theme.alert[variant].bg};
  color: ${({ theme, variant }) => theme.alert[variant].color};
  border-radius: 10px;
  margin-bottom: 20px;
`;

function Alert({ variant = 'error', children }) {
  return (
    <Wrapper variant={variant} role="alert">
      {children}
    </Wrapper>
  );
}

export default Alert;
