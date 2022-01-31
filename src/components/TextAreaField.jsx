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

const TextArea = styled.textarea`
  width: 100%;
  height: ${({ height }) => height}px;
  padding: 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.textField.bg};
  color: ${({ theme }) => theme.textField.color};
  border: 1px solid ${({ theme }) => theme.textField.borderColor};
  outline: 0;
  margin-bottom: 16px;
  &::placeholder {
    color: #8c92b3;
  }
  &:focus {
    border-color: ${({ theme }) => theme.textField.active.borderColor};
  }
`;

function TextAreaField({ label, labelDesc, height = 80 }) {
  return (
    <>
      {label && <Label>{label}</Label>}
      {labelDesc && <LabelDesc>{labelDesc}</LabelDesc>}
      <TextArea height={height} />
    </>
  );
}

export default TextAreaField;
