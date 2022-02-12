import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import UpVoteButton from './UpVoteButton';

import breakpoints from '../styles/breakpoints';

import IconComments from '../assets/shared/icon-comments.svg';

const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.feedbackItem.bg};
  padding: 1.5rem;
  border-radius: 0.625rem;
  @media (min-width: ${breakpoints.md}px) {
    position: relative;
    padding: 1.75rem 6.25rem 1.75rem 6.875rem;
  }
`;

const FeedbackTitle = styled.h2`
  font-size: 0.8125rem;
  letter-spacing: -0.18px;
  margin: 0 0 0.5625rem 0;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color};
    &:hover {
      color: ${({ theme }) => theme.button.secondary.bg};
    }
  }
  @media (min-width: ${breakpoints.md}px) {
    font-size: 1.125rem;
  }
`;

const FeedbackDesc = styled.p`
  font-size: 0.8125rem;
  margin: 0 0 0.75rem 0;
  @media (min-width: ${breakpoints.md}px) {
    font-size: 1rem;
  }
`;

const FeedbackCategory = styled.span`
  display: inline-block;
  font-size: 0.8125rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 0.625rem;
  line-height: 1;
  background-color: ${({ theme }) => theme.category.bg};
  color: ${({ theme }) => theme.category.color};
  margin-bottom: 1rem;
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
  padding-left: 1.625rem;
  font-size: 0.8125rem;
  letter-spacing: -0.13px;
  font-weight: 700;
  background: url(${IconComments}) no-repeat left center;
  @media (min-width: ${breakpoints.md}px) {
    position: absolute;
    top: 50%;
    right: 32px;
    transform: translateY(-50%);
    font-size: 1rem;
  }
`;

const FeedbackItem = React.forwardRef(
  ({ id, title, details, category, comments, upvotes, className, titleTag = 'h2' }, ref) => {
    return (
      <Wrapper ref={ref} className={className}>
        <FeedbackTitle as={titleTag}>
          <Link to={`/feedback/${id}`}>{title}</Link>
        </FeedbackTitle>
        <FeedbackDesc>{details}</FeedbackDesc>
        <FeedbackCategory>{category}</FeedbackCategory>
        <Footer>
          <FeedbackUpvoteButton id={id} upvotes={upvotes} />
          <CommentCount>{comments.length}</CommentCount>
        </Footer>
      </Wrapper>
    );
  }
);

export default FeedbackItem;
