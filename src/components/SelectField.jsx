import styled from 'styled-components';
import Select from 'react-select';
import { useField } from 'formik';

import IconCheck from '../assets/shared/icon-check.svg';

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

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#F7F8FD',
    borderRadius: '5px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: state.isFocused ? '#4661E6' : '#F7F8FD',
    height: '48px',
    padding: '0 16px',
    fontSize: '15px',
    boxShadow: 'none',
    '&:hover': {
      borderColor: state.isFocused ? '#4661E6' : '#F7F8FD'
    }
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: '15px',
    color: '#3A4374'
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#4661E6',
    '&:hover': {
      color: '#4661E6'
    },
    svg: {
      width: '15px',
      height: '15px'
    }
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none'
  }),
  menu: (provided) => ({
    ...provided,
    background: '#FFFFFF',
    borderRadius: '10px',
    boxShadow: '0px 10px 40px -7px rgba(55, 63, 104, 0.350492)'
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: '16px',
    lineHeight: 1,
    borderTop: '1px solid rgba(151,151,151,0.15)',
    padding: '12px 24px',
    color: state.isSelected || state.isFocused ? '#AD1FEA' : '#647196',
    backgroundColor: '#FFFFFF',
    backgroundImage: state.isSelected ? `url(${IconCheck})` : '',
    backgroundPosition: 'calc(100% - 24px) center',
    backgroundRepeat: 'no-repeat',
    '&:first-of-type': {
      borderTop: 'none'
    },
    '&:hover': {
      color: '#AD1FEA'
    },
    '&:active': {
      backgroundColor: '#FFFFFF'
    }
  })
};

function SelectField({ label, labelDesc, options, value, onChange, id, ...props }) {
  const [_, meta] = useField(props);

  const defaultValue = (options, value) => options.find((option) => option.value === value);

  return (
    <>
      {label && <Label htmlFor={id}>{label}</Label>}
      {labelDesc && <LabelDesc>{labelDesc}</LabelDesc>}
      <Select
        styles={customStyles}
        id={id}
        isSearchable={false}
        value={defaultValue(options, value)}
        options={options}
        onChange={onChange}
      />
      {meta.touched && meta.error ? <Error>{meta.error}</Error> : ''}
    </>
  );
}

export default SelectField;
