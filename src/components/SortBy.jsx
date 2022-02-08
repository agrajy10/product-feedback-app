import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { sortFeedbackList } from '../features/feedback/feedbackListSlice';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2px;
`;

const Label = styled.label`
  flex: 0 0 auto;
  font-size: 13px;
  color: #f2f4fe;
  white-space: nowrap;
`;

const Select = styled.select`
  flex: 1 1 0%;
  font-size: 14px;
  font-weight: 700;
  color: #f2f4fe;
  background: transparent;
  border: none;
  option {
    color: #000;
  }
`;

function SortBy() {
  const [value, setValue] = useState('most-upvotes');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortFeedbackList(value));
  }, [value]);

  const onChange = (e) => setValue(e.target.value);

  return (
    <Wrapper>
      <Label htmlFor="sortby">Sort By :</Label>
      <Select id="sortby" value={value} onChange={onChange}>
        <option value="most-upvotes">Most upvotes</option>
        <option value="least-upvotes">Least upvotes</option>
        <option value="most-comments">Most comments</option>
        <option value="least-comments">Least comments</option>
      </Select>
    </Wrapper>
  );
}

export default SortBy;
