import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { filterFeedbackList } from '../features/feedback/feedbackListSlice';

const Wrapper = styled.div`
  background-color: #ffffff;
  padding: 24px;
  border-radius: 10px;
`;

const CategoriesList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 14px;
  line-height: 1;
`;

const Category = styled.button`
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.category.color};
  background-color: ${({ theme }) => theme.category.bg};
  white-space: nowrap;
  padding: 6px 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  &:hover {
    color: ${({ theme }) => theme.category.hover.color};
    background-color: ${({ theme }) => theme.category.hover.bg};
  }
  &.active {
    color: ${({ theme }) => theme.category.active.color};
    background-color: ${({ theme }) => theme.category.active.bg};
  }
`;

const categories = ['All', 'UI', 'UX', 'Enhancement', 'Feature', 'Bug'];

function CategoriesCard() {
  const activeCategory = useSelector((state) => state.feedbackList.activeCategory);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <CategoriesList>
        {categories.map((category, index) => {
          return (
            <li key={index}>
              <Category
                type="button"
                onClick={() => dispatch(filterFeedbackList(category))}
                className={category === activeCategory ? 'active' : ''}>
                {category}
              </Category>
            </li>
          );
        })}
      </CategoriesList>
    </Wrapper>
  );
}

export default CategoriesCard;
