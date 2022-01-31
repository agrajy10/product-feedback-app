import styled from 'styled-components';

import CommentItem from './CommentItem';

import breakpoints from '../../styles/breakpoints';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
  padding: 24px;
  border-radius: 10px;
  margin: 24px 0;
  & > h2 {
    margin: 0 0 24px 0;
  }
  .comment-item:not(:last-child) {
    padding-bottom: 24px;
    margin-bottom: 24px;
    border-bottom: 1px solid rgba(140, 146, 179, 0.25);
  }
  @media (min-width: ${breakpoints.lg}px) {
    padding: 32px;
    margin: 32px 0;
    & > h2 {
      margin: 0 0 32px 0;
    }
    .comment-item:not(:last-child) {
      padding-bottom: 32px;
      margin-bottom: 32px;
    }
  }
`;

function Comments() {
  return (
    <Wrapper>
      <h2 className="h3">4 Comments</h2>
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </Wrapper>
  );
}

export default Comments;
