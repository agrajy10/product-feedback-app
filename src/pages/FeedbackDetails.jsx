import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

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

const LoginButtonWrapper = styled.div`
  text-align: center;
`;

function FeedbackDetails() {
  const [feedback, setFeedback] = useState(null);
  const { isLoading, feedbackList } = useSelector((state) => state.feedbackList);
  const { user } = useSelector((state) => state.auth);
  const { feedbackID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      const [feedbackData] = feedbackList.filter(
        (feedbackListItem) => feedbackListItem.id === feedbackID
      );
      if (!feedbackData) {
        toast.error('Feedback not found');
        navigate('/');
      } else {
        setFeedback(feedbackData);
      }
    }
  }, [feedbackID, isLoading, feedbackList]);

  return (
    <Container>
      <main>
        {!feedback ? (
          <p>Loading..</p>
        ) : (
          <>
            <DetailsTop>
              <BackButton>Go Back</BackButton>
              {user && user.uid === feedback.createdBy && (
                <Button variant="secondary" href={`/edit-feedback/${feedbackID}`}>
                  Edit Feedback
                </Button>
              )}
            </DetailsTop>
            <FeedbackItem titleTag="h1" {...feedback} />
            <Comments comments={feedback.comments} />
            {user ? (
              <CommentForm feedbackID={feedbackID} />
            ) : (
              <LoginButtonWrapper>
                <Button href="/login">Login to comment</Button>
              </LoginButtonWrapper>
            )}
          </>
        )}
      </main>
    </Container>
  );
}

export default FeedbackDetails;
