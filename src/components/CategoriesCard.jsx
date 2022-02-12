import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { filterFeedbackList } from '../features/feedback/feedbackListSlice';

const Wrapper = styled.div`
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 0.625rem;
`;

const CategoriesList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 14px;
  line-height: 1;
`;

const Category = styled.label`
  position: relative;
  display: block;
  input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
  span {
    display: block;
    text-align: center;
    font-size: 0.8125rem;
    font-weight: 600;
    color: ${({ theme }) => theme.category.color};
    background-color: ${({ theme }) => theme.category.bg};
    white-space: nowrap;
    padding: 0.375rem 1rem;
    border: 1px solid ${({ theme }) => theme.category.bg};
    border-radius: 0.625rem;
    cursor: pointer;
    user-select: none;
  }
  span:hover {
    color: ${({ theme }) => theme.category.hover.color};
    background-color: ${({ theme }) => theme.category.hover.bg};
  }
  input:checked + span {
    color: ${({ theme }) => theme.category.active.color};
    background-color: ${({ theme }) => theme.category.active.bg};
    border-color: ${({ theme }) => theme.category.active.bg};
  }
  input:focus + span {
    outline: 2px dashed ${({ theme }) => theme.category.active.bg};
  }
`;

const categories = ['All', 'UI', 'UX', 'Enhancement', 'Feature', 'Bug'];

function CategoriesCard() {
  const activeCategory = useSelector((state) => state.feedbackList.activeCategory);
  const dispatch = useDispatch();

  const onChange = (e) => dispatch(filterFeedbackList(e.target.value));

  return (
    <Wrapper>
      <CategoriesList
        role="radiogroup"
        aria-label="Filter feedback by categories"
        aria-activedescendant={activeCategory}>
        {categories.map((category, index) => {
          return (
            <Category key={index} htmlFor={category}>
              <input
                type="radio"
                name="category"
                id={category}
                value={category}
                checked={activeCategory === category}
                onChange={onChange}
              />
              <span>{category}</span>
            </Category>
          );
        })}
      </CategoriesList>
    </Wrapper>
  );
}

export default CategoriesCard;
