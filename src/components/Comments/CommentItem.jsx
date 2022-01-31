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

const ReplyButton = styled.button`
  display: inline-block;
  position: absolute;
  top: 5px;
  right: 0;
  border: none;
  background: transparent;
  font-size: 13px;
  font-weight: 700;
  color: #4661e6;
`;

function CommentItem() {
  return (
    <Wrapper className="comment-item">
      <CommentAuthor />
      <CommentBody>
        Second this! I do a lot of late night coding and reading. Adding a dark theme can be great
        for preventing eye strain and the headaches that result. It’s also quite a trend with modern
        apps and apparently saves battery life.
      </CommentBody>
      <ReplyButton type="button">Reply</ReplyButton>
    </Wrapper>
  );
}

export default CommentItem;
