import styled from 'styled-components';

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  line-height: 1;
  font-weight: 700;
  margin-bottom: 5px;
  letter-spacing: -0.19px;
`;

const LabelDesc = styled.p`
  color: ${({ theme }) => theme.text.color1};
  font-size: 0.875rem;
  margin: 0 0 1rem 0;
`;

const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0.8125rem 1.5rem;
  font-size: 0.9375rem;
  border-radius: 0.3125rem;
  background-color: ${({ theme }) => theme.textField.bg};
  color: ${({ theme }) => theme.textField.color};
  border: 1px solid ${({ theme }) => theme.textField.borderColor};
  outline: 0;
  &:focus {
    border-color: ${({ theme }) => theme.textField.active.borderColor};
  }
`;

function TextField({ label, labelDesc, id }) {
  return (
    <>
      {label && <Label htmlFor={id}>{label}</Label>}
      {labelDesc && <LabelDesc>{labelDesc}</LabelDesc>}
      <Input id={id} type="text" />
    </>
  );
}

export default TextField;
