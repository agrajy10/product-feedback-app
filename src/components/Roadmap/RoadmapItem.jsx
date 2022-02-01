import styled from 'styled-components';

import UpVoteButton from '../UpVoteButton';

import breakpoints from '../../styles/breakpoints';

import IconComments from '../../assets/shared/icon-comments.svg';

const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.feedbackItem.bg};
  padding: 24px;
  border-radius: 10px;
  border-top: 6px solid ${({ theme, status }) => theme.roadmap[status]};
`;

const Status = styled.p`
  position: relative;
  font-size: 13px;
  margin: 0 0 16px 0;
  padding-left: 16px;
  color: ${({ theme }) => theme.text.color1};
  text-transform: capitalize;
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme, status }) => theme.roadmap[status]};
  }
  @media (min-width: ${breakpoints.lg}px) {
    font-size: 16px;
  }
`;

const FeedbackTitle = styled.h2`
  font-size: 13px;
  letter-spacing: -0.18px;
  margin: 0 0 9px 0;
  @media (min-width: ${breakpoints.lg}px) {
    font-size: 18px;
  }
`;

const FeedbackDesc = styled.p`
  font-size: 13px;
  margin: 0 0 12px 0;
  color: ${({ theme }) => theme.text.color1};
  @media (min-width: ${breakpoints.md}px) {
    margin: 0 0 24px 0;
  }
  @media (min-width: ${breakpoints.lg}px) {
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
  padding: 8px 13px;
  @media (min-width: ${breakpoints.md}px) {
    padding: 13px;
  }
`;

const CommentCount = styled.span`
  display: inline-block;
  padding-left: 26px;
  font-size: 13px;
  letter-spacing: -0.13px;
  font-weight: 700;
  background: url(${IconComments}) no-repeat left center;
  @media (min-width: ${breakpoints.lg}px) {
    font-size: 16px;
  }
`;

function RoadmapItem({ className, status }) {
  const statusText = status === 'in-progress' ? 'In progress' : status;

  return (
    <Wrapper className={className} status={status === 'in-progress' ? 'inProgress' : status}>
      <Status status={status === 'in-progress' ? 'inProgress' : status}>{statusText}</Status>
      <FeedbackTitle>Add tags for solutions</FeedbackTitle>
      <FeedbackDesc>Easier to search for solutions based on a specific stack.</FeedbackDesc>
      <FeedbackCategory>Enhancement</FeedbackCategory>
      <Footer>
        <FeedbackUpvoteButton />
        <CommentCount>2</CommentCount>
      </Footer>
    </Wrapper>
  );
}

export default RoadmapItem;
