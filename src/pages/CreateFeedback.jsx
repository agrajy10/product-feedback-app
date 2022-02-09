import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { FormContainer, FormHeading, FormBottom } from './FormStyles';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import FormCard from '../components/FormCard';
import TextField from '../components/TextField';
import SelectField from '../components/SelectField';
import TextAreaField from '../components/TextAreaField';

import { createFeedback } from '../features/feedback/feedbackListThunk';

import IconNewFeedback from '../assets/shared/icon-new-feedback.svg';

const initialValues = {
  title: '',
  category: 'Feature',
  details: ''
};

const validationSchema = Yup.object({
  title: Yup.string().required("Can't be emtpy"),
  category: Yup.string().required("Can't be emtpy"),
  details: Yup.string().required("Can't be empty")
});

const categoryOptions = [
  {
    value: 'Feature',
    label: 'Feature'
  },
  {
    value: 'Bug',
    label: 'Bug'
  },
  {
    value: 'Enhancement',
    label: 'Enhancement'
  },
  {
    value: 'UI',
    label: 'UI'
  },
  {
    value: 'UX',
    label: 'UX'
  }
];

function CreateFeedback() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async ({ title, category, details }) => {
    try {
      await dispatch(
        createFeedback({ title, category, details, status: 'planned', upvotes: [] })
      ).unwrap();
      toast.success('Feedback added successfully');
      navigate('/');
    } catch (error) {
      toast.error(error);
    }
  };

  const cancelCreateForm = (resetForm) => {
    resetForm();
    navigate('/');
  };

  return (
    <FormContainer>
      <main>
        <BackButton>Go Back</BackButton>
        <FormCard icon={IconNewFeedback}>
          <FormHeading>Create New Feedback</FormHeading>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {({ resetForm, setFieldValue, values, isSubmitting }) => {
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
                      labelDesc="Choose a category for your feedback"
                      options={categoryOptions}
                      value={values.category}
                      onChange={(value) => setFieldValue('category', value.value)}
                    />
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
                    <Button type="submit" className="submit-btn" disabled={isSubmitting}>
                      Add Feedback
                    </Button>
                    <Button
                      variant="tertiary"
                      className="cancel-btn"
                      disabled={isSubmitting}
                      onClick={() => cancelCreateForm(resetForm)}>
                      Cancel
                    </Button>
                  </FormBottom>
                </Form>
              );
            }}
          </Formik>
        </FormCard>
      </main>
    </FormContainer>
  );
}

export default CreateFeedback;
