import styled from 'styled-components';

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
  return (
    <Container>
      <main>
        <DetailsTop>
          <BackButton>Go Back</BackButton>
          <Button variant="secondary">Edit Feedback</Button>
        </DetailsTop>
        <FeedbackItem titleTag="h1" />
        <Comments />
        <CommentForm />
      </main>
    </Container>
  );
}

export default FeedbackDetails;
