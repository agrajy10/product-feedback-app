import styled from 'styled-components';
import { Link } from 'react-router-dom';

import UpVoteButton from './UpVoteButton';

import breakpoints from '../styles/breakpoints';

import IconComments from '../assets/shared/icon-comments.svg';

const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.feedbackItem.bg};
  padding: 24px;
  border-radius: 10px;
  @media (min-width: ${breakpoints.md}px) {
    position: relative;
    padding: 28px 100px 28px 110px;
  }
`;

const FeedbackTitle = styled.h2`
  font-size: 13px;
  letter-spacing: -0.18px;
  margin: 0 0 9px 0;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color};
    &:hover {
      color: ${({ theme }) => theme.button.secondary.bg};
    }
  }
  @media (min-width: ${breakpoints.md}px) {
    font-size: 18px;
  }
`;

const FeedbackDesc = styled.p`
  font-size: 13px;
  margin: 0 0 12px 0;
  @media (min-width: ${breakpoints.md}px) {
    font-size: 16px;
  }
`;

const FeedbackCategory = styled.span`
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 10px;
  line-height: 1;
  background-color: ${({ theme }) => theme.category.bg};
  color: ${({ theme }) => theme.category.color};
  margin-bottom: 16px;
  @media (min-width: ${breakpoints.md}px) {
    margin-bottom: 0;
  }
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const FeedbackUpvoteButton = styled(UpVoteButton)`
  min-width: 42px;
  @media (min-width: ${breakpoints.md}px) {
    position: absolute;
    top: 28px;
    left: 32px;
  }
`;

const CommentCount = styled.span`
  display: inline-block;
  padding-left: 26px;
  font-size: 13px;
  letter-spacing: -0.13px;
  font-weight: 700;
  background: url(${IconComments}) no-repeat left center;
  @media (min-width: ${breakpoints.md}px) {
    position: absolute;
    top: 50%;
    right: 32px;
    transform: translateY(-50%);
    font-size: 16px;
  }
`;

function FeedbackItem({ id, title, details, category, upvotes, className, titleTag = 'h2' }) {
  return (
    <Wrapper className={className}>
      <FeedbackTitle as={titleTag}>
        <Link to={`/feedback/${id}`}>{title}</Link>
      </FeedbackTitle>
      <FeedbackDesc>{details}</FeedbackDesc>
      <FeedbackCategory>{category}</FeedbackCategory>
      <Footer>
        <FeedbackUpvoteButton upvotes={upvotes.length} />
        <CommentCount>0</CommentCount>
      </Footer>
    </Wrapper>
  );
}

export default FeedbackItem;
