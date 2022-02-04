import { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { FormContainer, FormHeading, FormBottom } from './FormStyles';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import FormCard from '../components/FormCard';
import TextField from '../components/TextField';
import SelectField from '../components/SelectField';
import TextAreaField from '../components/TextAreaField';

import { updateFeedback, deleteFeedback } from '../features/feedback/feedbackListThunk';

import IconEditFeedback from '../assets/shared/icon-edit-feedback.svg';

const validationSchema = Yup.object({
  title: Yup.string().required("Can't be emtpy"),
  details: Yup.string().required("Can't be empty")
});

function EditFeedback() {
  const [feedback, setFeedback] = useState(null);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const { isLoading, feedbackList } = useSelector((state) => state.feedbackList);
  const { user } = useSelector((state) => state.auth);
  const { feedbackID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      const [feedbackData] = feedbackList.filter(
        (feedbackListItem) => feedbackListItem.id === feedbackID
      );
      if (!feedbackData) {
        toast.error('Feedback not found');
        navigate('/');
      } else if (feedbackData.createdBy !== user.uid) {
        toast.error('You cannot edit this feedback');
        navigate('/');
      } else {
        setFeedback(feedbackData);
      }
    }
  }, [feedbackID, isLoading]);

  const onSubmit = (values) => {
    setIsSubmittingForm(true);
    dispatch(updateFeedback({ values, feedbackID }))
      .then(unwrapResult)
      .then(() => {
        toast.success('Feedback updated successfully');
        navigate(`/feedback/${feedbackID}`);
      })
      .catch((error) => {
        toast.error(error);
        setIsSubmittingForm(false);
      });
  };

  const deleteFeedbackItem = () => {
    setIsSubmittingForm(true);
    dispatch(deleteFeedback(feedbackID))
      .then(unwrapResult)
      .then(() => {
        toast.success('Feedback deleted');
        navigate('/');
      })
      .catch((error) => {
        toast.error(error);
        setIsSubmittingForm(false);
      });
  };

  const cancelFeedbackEdit = (resetForm) => {
    resetForm();
    navigate(`/feedback/${feedbackID}`);
  };

  return (
    <FormContainer>
      <main>
        {!feedback ? (
          <p>Loading...</p>
        ) : (
          <>
            <BackButton>Go Back</BackButton>
            <FormCard icon={IconEditFeedback}>
              <FormHeading>Editing '{feedback.title}'</FormHeading>
              <Formik
                initialValues={feedback}
                validationSchema={validationSchema}
                onSubmit={(values) => onSubmit(values)}>
                {({ resetForm }) => {
                  return (
                    <Form>
                      <div className="field-wrap">
                        <TextField
                          id="title"
                          name="title"
                          label="Feedback Title"
                          labelDesc="Add a short, descriptive headline"
                        />
                      </div>
                      <div className="field-wrap">
                        <SelectField
                          id="category"
                          name="category"
                          label="Category"
                          labelDesc="Choose a category for your feedback">
                          <option value="Feature">Feature</option>
                          <option value="Enhancement">Enhancement</option>
                          <option value="UI">UI</option>
                          <option value="UX">UX</option>
                        </SelectField>
                      </div>
                      <div className="field-wrap">
                        <SelectField
                          id="status"
                          name="status"
                          label="Status"
                          labelDesc="Changes status of feedback">
                          <option value="planned">Planned</option>
                          <option value="in-progress">In Progress</option>
                          <option value="live">Live</option>
                        </SelectField>
                      </div>
                      <div className="field-wrap">
                        <TextAreaField
                          id="details"
                          name="details"
                          label="Feedback Detail"
                          labelDesc="Include any specific comments on what should be improved, added, etc."
                          height={120}
                        />
                      </div>
                      <FormBottom>
                        <Button type="submit" className="submit-btn" disabled={isSubmittingForm}>
                          Save Changes
                        </Button>
                        <Button
                          variant="tertiary"
                          className="cancel-btn"
                          disabled={isSubmittingForm}
                          onClick={() => cancelFeedbackEdit(resetForm)}>
                          Cancel
                        </Button>
                        <Button
                          variant="warning"
                          className="delete-btn"
                          disabled={isSubmittingForm}
                          onClick={deleteFeedbackItem}>
                          Delete
                        </Button>
                      </FormBottom>
                    </Form>
                  );
                }}
              </Formik>
            </FormCard>
          </>
        )}
      </main>
    </FormContainer>
  );
}

export default EditFeedback;
