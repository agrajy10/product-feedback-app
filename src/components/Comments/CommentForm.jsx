import styled from 'styled-components';

import Button from '../Button';

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

const TextArea = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.textField.bg};
  color: ${({ theme }) => theme.textField.color};
  border: 1px solid ${({ theme }) => theme.textField.borderColor};
  outline: 0;
  margin-bottom: 16px;
  &::placeholder {
    color: #8c92b3;
  }
  &:focus {
    border-color: ${({ theme }) => theme.textField.active.borderColor};
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
      <TextArea
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
