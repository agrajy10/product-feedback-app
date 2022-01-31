import styled from 'styled-components';

import IconArrowDown from '../assets/shared/icon-arrow-down.svg';

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

const Select = styled.select`
  width: 100%;
  height: 3rem;
  padding: 0.8125rem 1.5rem;
  font-size: 0.9375rem;
  border-radius: 0.3125rem;
  background: ${({ theme }) => theme.textField.bg} url(${IconArrowDown}) no-repeat calc(100% - 22px)
    center;
  color: ${({ theme }) => theme.textField.color};
  border: 1px solid ${({ theme }) => theme.textField.borderColor};
  appearance: none;
  outline: 0;
  &:focus {
    border-color: ${({ theme }) => theme.textField.active.borderColor};
  }
`;

function SelectField({ label, labelDesc, id }) {
  return (
    <>
      {label && <Label htmlFor={id}>{label}</Label>}
      {labelDesc && <LabelDesc>{labelDesc}</LabelDesc>}
      <Select id={id}>
        <option value="">Feature</option>
        <option value="">Enhancement</option>
        <option value="">UI</option>
        <option value="">UX</option>
      </Select>
    </>
  );
}

export default SelectField;
