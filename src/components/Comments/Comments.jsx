import styled from 'styled-components';

import CommentItem from './CommentItem';

import breakpoints from '../../styles/breakpoints';

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.white};
  padding: 1.5rem;
  border-radius: 0.625rem;
  margin: 1.5rem 0;
  & > h2 {
    margin: 0 0 1.5rem 0;
  }
  .comment-item:not(:last-child) {
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid rgba(140, 146, 179, 0.25);
  }
  @media (min-width: ${breakpoints.lg}px) {
    padding: 2rem;
    margin: 2rem 0;
    & > h2 {
      margin: 0 0 2rem 0;
    }
    .comment-item:not(:last-child) {
      padding-bottom: 2rem;
      margin-bottom: 2rem;
    }
  }
`;

function Comments({ comments }) {
  const commentsHeading = comments.length === 1 ? '1 Comment' : `${comments.length} Comments`;
  return (
    <Wrapper>
      <h2 className="h3">{commentsHeading}</h2>
      {comments.length > 0 ? (
        comments.map((comment, index) => {
          return <CommentItem key={index} {...comment} />;
        })
      ) : (
        <p>No comments yet.</p>
      )}
    </Wrapper>
  );
}

export default Comments;
