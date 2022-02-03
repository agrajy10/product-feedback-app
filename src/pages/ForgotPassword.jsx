import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { FormContainer, FormHeading, FormBottom } from './FormStyles';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import FormCard from '../components/FormCard';
import TextField from '../components/TextField';

import { sendPasswordResetLink } from '../features/auth/authThunk';

import IconNewFeedback from '../assets/shared/icon-new-feedback.svg';

const initialValues = {
  email: ''
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required("Can't be empty")
});

function FrogotPassword() {
  const dispatch = useDispatch();

  const onSubmit = async ({ email }, setSubmitting) => {
    dispatch(sendPasswordResetLink({ email }))
      .then(unwrapResult)
      .then((message) => {
        toast.success(message);
      })
      .catch(({ message }) => {
        toast.error(message);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <FormContainer>
      <main>
        <BackButton>Go Back</BackButton>
        <FormCard icon={IconNewFeedback}>
          <FormHeading>Reset password</FormHeading>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => onSubmit(values, setSubmitting)}>
            {({ isSubmitting }) => {
              return (
                <Form>
                  <div className="field-wrap">
                    <TextField id="email" name="email" label="Email" />
                  </div>
                  <FormBottom>
                    <Button type="submit" className="submit-btn" disabled={isSubmitting}>
                      Send reset link
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

export default FrogotPassword;
