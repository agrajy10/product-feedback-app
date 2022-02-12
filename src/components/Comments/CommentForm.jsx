import styled from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Button from '../Button';
import TextAreaField from '../TextAreaField';

import { addComment } from '../../features/feedback/feedbackListThunk';

import breakpoints from '../../styles/breakpoints';

const FormWrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
  padding: 1.5rem;
  border-radius: 0.625rem;
  h2 {
    margin: 0 0 1.5rem 0;
  }
  @media (min-width: ${breakpoints.md}px) {
    padding: 2rem;
    h2 {
      margin-bottom: 2rem;
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
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.text.color1};
  @media (min-width: ${breakpoints.md}px) {
    font-size: 0.9375rem;
  }
`;

const initialValues = {
  comment: ''
};

const validationSchema = Yup.object({
  comment: Yup.string()
    .max(255, 'Comment cannot be more than 255 character')
    .required("Can't be empty")
});

function CommentForm({ feedbackID }) {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const charactersLeft = (charCount) => {
    return 255 - charCount <= 0 ? '0 Characters left' : `${255 - charCount} Characters left`;
  };

  const onSubmit = async ({ comment }, resetForm) => {
    try {
      await dispatch(
        addComment({
          name: user.displayName,
          profilePhoto: user.photoURL,
          email: user.email,
          comment: comment,
          feedbackID
        })
      ).unwrap();
      resetForm();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <FormWrapper>
      <h2 className="h3">Add comment</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values, resetForm);
        }}>
        {({ values, isSubmitting }) => {
          return (
            <Form>
              <TextAreaField
                aria-label="Enter your comment"
                placeholder="Type your comment here"
                name="comment"
                id="comment"
                disabled={isSubmitting}
              />
              <FormBottom>
                <CharCount>{charactersLeft(values.comment.length)}</CharCount>
                <Button type="submit" disabled={isSubmitting}>
                  Post Comment
                </Button>
              </FormBottom>
            </Form>
          );
        }}
      </Formik>
    </FormWrapper>
  );
}

export default CommentForm;
