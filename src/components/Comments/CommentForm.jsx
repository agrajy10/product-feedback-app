import styled from 'styled-components';

import Button from '../Button';
import TextAreaField from '../TextAreaField';

import breakpoints from '../../styles/breakpoints';

const FormWrapper = styled.form`
  background-color: ${({ theme }) => theme.white};
  padding: 24px;
  border-radius: 10px;
  h2 {
    margin: 0 0 24px 0;
  }
  @media (min-width: ${breakpoints.md}px) {
    padding: 32px;
    h2 {
      margin-bottom: 32px;
    }
  }
`;

const FormBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CharCount = styled.span`
  display: inline-block;
  font-size: 13px;
  color: ${({ theme }) => theme.text.color1};
  @media (min-width: ${breakpoints.md}px) {
    font-size: 15px;
  }
`;

function CommentForm() {
  return (
    <FormWrapper>
      <h2 className="h3">Add comment</h2>
      <TextAreaField
        aria-label="Enter your comment"
        placeholder="Type your comment here"
        name="comment"
      />
      <FormBottom>
        <CharCount>250 Characters left</CharCount>
        <Button type="submit">Post Comment</Button>
      </FormBottom>
    </FormWrapper>
  );
}

export default CommentForm;
