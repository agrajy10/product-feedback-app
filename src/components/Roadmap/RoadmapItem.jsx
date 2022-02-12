import styled from 'styled-components';
import { Link } from 'react-router-dom';

import UpVoteButton from '../UpVoteButton';

import breakpoints from '../../styles/breakpoints';

import IconComments from '../../assets/shared/icon-comments.svg';

const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.feedbackItem.bg};
  padding: 1.5rem;
  border-radius: 0.625rem;
  border-top: 6px solid ${({ theme, status }) => theme.roadmap[status]};
`;

const Status = styled.p`
  position: relative;
  font-size: 0.8125rem;
  margin: 0 0 1rem 0;
  padding-left: 1rem;
  color: ${({ theme }) => theme.text.color1};
  text-transform: capitalize;
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${({ theme, status }) => theme.roadmap[status]};
  }
  @media (min-width: ${breakpoints.lg}px) {
    font-size: 1rem;
  }
`;

const FeedbackTitle = styled.h3`
  font-size: 0.8125rem;
  letter-spacing: -0.18px;
  margin: 0 0 0.5625rem 0;
  a {
    color: ${({ theme }) => theme.color};
    text-decoration: none;
  }
  a:hover {
    color: #4661e6;
  }
  @media (min-width: ${breakpoints.lg}px) {
    font-size: 1.125rem;
  }
`;

const FeedbackDesc = styled.p`
  font-size: 0.8125rem;
  margin: 0 0 0.75rem 0;
  color: ${({ theme }) => theme.text.color1};
  @media (min-width: ${breakpoints.md}px) {
    margin: 0 0 1.5rem 0;
  }
  @media (min-width: ${breakpoints.lg}px) {
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
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const FeedbackUpvoteButton = styled(UpVoteButton)`
  display: inline-flex;
  gap: 0 10px;
  flex-direction: row;
  padding: 0.5rem 0.8125rem;
  @media (min-width: ${breakpoints.md}px) {
    padding: 0.8125rem;
  }
`;

const CommentCount = styled.span`
  display: inline-block;
  padding-left: 1.625rem;
  font-size: 0.8125rem;
  letter-spacing: -0.13px;
  font-weight: 700;
  background: url(${IconComments}) no-repeat left center;
  @media (min-width: ${breakpoints.lg}px) {
    font-size: 1rem;
  }
`;

function RoadmapItem({ id, className, title, details, category, upvotes, comments, status }) {
  const statusText = status === 'in-progress' ? 'In progress' : status;

  return (
    <Wrapper className={className} status={status === 'in-progress' ? 'inProgress' : status}>
      <Status status={status === 'in-progress' ? 'inProgress' : status}>{statusText}</Status>
      <FeedbackTitle>
        <Link to={`/feedback/${id}`}>{title}</Link>
      </FeedbackTitle>
      <FeedbackDesc>{details}</FeedbackDesc>
      <FeedbackCategory>{category}</FeedbackCategory>
      <Footer>
        <FeedbackUpvoteButton upvotes={upvotes} id={id} />
        <CommentCount>{comments.length}</CommentCount>
      </Footer>
    </Wrapper>
  );
}

export default RoadmapItem;
