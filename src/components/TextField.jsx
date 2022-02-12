import styled from 'styled-components';
import { useField } from 'formik';

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  line-height: 1;
  font-weight: 700;
  margin-bottom: 0.3125rem;
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
  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.textField.error.borderColor : theme.textField.borderColor};
  outline: 0;
  &:focus {
    border-color: ${({ theme, error }) =>
      error ? theme.textField.error.borderColor : theme.textField.active.borderColor};
  }
`;

const Error = styled.span`
  display: block;
  font-size: 0.875rem;
  line-height: 2;
  color: ${({ theme }) => theme.textField.error.color};
`;

function TextField({ label, labelDesc, id, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      {label && <Label htmlFor={id}>{label}</Label>}
      {labelDesc && <LabelDesc>{labelDesc}</LabelDesc>}
      <Input id={id} error={meta.touched && meta.error ? true : false} {...field} {...props} />
      {meta.touched && meta.error ? <Error>{meta.error}</Error> : ''}
    </>
  );
}

export default TextField;
