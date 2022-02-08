import styled from 'styled-components';

import CommentAuthor from './CommentAuthor';

import breakpoints from '../../styles/breakpoints';

const Wrapper = styled.div`
  position: relative;
`;

const CommentBody = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.text.color1};
  margin: 0;
  padding-left: 56px;
  @media (min-width: ${breakpoints.md}px) {
    font-size: 15px;
  }
`;

function CommentItem({ name, email, comment }) {
  return (
    <Wrapper className="comment-item">
      <CommentAuthor name={name} email={email} />
      <CommentBody>{comment}</CommentBody>
    </Wrapper>
  );
}

export default CommentItem;
