import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Select from 'react-select';

import { sortFeedbackList } from '../features/feedback/feedbackListSlice';

import IconCheck from '../assets/shared/icon-check.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2px;
`;

const Label = styled.span`
  flex: 0 0 auto;
  font-size: 0.8125rem;
  color: #f2f4fe;
  white-space: nowrap;
`;

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#373F68',
    border: 'none',
    height: '3rem',
    padding: '0',
    fontSize: '0.9375rem',
    boxShadow: 'none',
    opacity: state.isFocused ? 0.75 : 1
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: '0.875rem',
    color: '#FFFFFF'
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#FFFFFF',
    svg: {
      width: '0.9375rem',
      height: '0.9375rem'
    },
    '&:hover': {
      color: '#FFFFFF'
    }
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none'
  }),
  menu: (provided) => ({
    ...provided,
    width: '15.9375rem',
    background: '#FFFFFF',
    borderRadius: '0.625rem',
    marginTop: '0.625rem',
    left: '-48px',
    boxShadow: '0px 10px 40px -7px rgba(55, 63, 104, 0.350492)'
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: '16px',
    lineHeight: 1,
    borderTop: '1px solid rgba(151,151,151,0.15)',
    padding: '0.75rem 1.5rem',
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

const options = [
  {
    value: 'most-upvotes',
    label: 'Most upvotes'
  },
  {
    value: 'least-upvotes',
    label: 'Least upvotes'
  },
  {
    value: 'most-comments',
    label: 'Most comments'
  },
  {
    value: 'least-comments',
    label: 'Least comments'
  }
];

function SortBy() {
  const [value, setValue] = useState('most-upvotes');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortFeedbackList(value));
  }, [value]);

  const defaultValue = (options, value) => options.find((option) => option.value === value);

  return (
    <Wrapper>
      <Label id="sortby">Sort By :</Label>
      <Select
        aria-labelledby="sortby"
        value={defaultValue(options, value)}
        options={options}
        onChange={(value) => setValue(value.value)}
        styles={customStyles}
      />
    </Wrapper>
  );
}

export default SortBy;
