import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Container from '../layout/Container';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import FeedbackItem from '../components/FeedbackItem';
import Comments from '../components/Comments/Comments';
import CommentForm from '../components/Comments/CommentForm';

const DetailsTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 24px 0;
`;

function FeedbackDetails() {
  const [feedback, setFeedback] = useState(null);
  const { isLoading, feedbackList } = useSelector((state) => state.feedbackList);
  const { feedbackID } = useParams();

  useEffect(() => {
    if (!isLoading) {
      const [feedbackData] = feedbackList.filter(
        (feedbackListItem) => feedbackListItem.id === feedbackID
      );
      setFeedback(feedbackData);
    }
  }, [feedbackID, isLoading]);

  return (
    <Container>
      <main>
        <DetailsTop>
          <BackButton>Go Back</BackButton>
          <Button variant="secondary" href={`/edit-feedback/${feedbackID}`}>
            Edit Feedback
          </Button>
        </DetailsTop>
        {feedback && (
          <>
            <FeedbackItem titleTag="h1" id={feedbackID} {...feedback.data} />
            {/* <Comments /> */}
            {/* <CommentForm /> */}
          </>
        )}
      </main>
    </Container>
  );
}

export default FeedbackDetails;
