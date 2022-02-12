import styled from 'styled-components';

import CommentAuthor from './CommentAuthor';

import breakpoints from '../../styles/breakpoints';

const Wrapper = styled.article`
  position: relative;
`;

const CommentBody = styled.p`
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.text.color1};
  margin: 0;
  padding-left: 3.5rem;
  @media (min-width: ${breakpoints.md}px) {
    font-size: 0.9375rem;
  }
`;

function CommentItem({ comment, ...rest }) {
  return (
    <Wrapper className="comment-item">
      <CommentAuthor {...rest} />
      <CommentBody>{comment}</CommentBody>
    </Wrapper>
  );
}

export default CommentItem;
