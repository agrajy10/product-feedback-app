import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { sendPasswordResetEmail } from 'firebase/auth';

import { FormContainer, FormHeading, FormBottom } from './FormStyles';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import FormCard from '../components/FormCard';
import TextField from '../components/TextField';
import Alert from '../components/Alert';

import { auth } from '../firebase-config';

import IconNewFeedback from '../assets/shared/icon-new-feedback.svg';

const initialValues = {
  email: ''
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required("Can't be empty")
});

function FrogotPassword() {
  const [message, setMessage] = useState({ type: '', content: '' });

  const onSubmit = async ({ email }) => {
    setMessage({ type: '', content: '' });
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage({
        type: 'success',
        content: 'Reset link sent successfully.'
      });
    } catch (error) {
      setMessage({ type: 'error', content: error.message });
    }
  };

  return (
    <FormContainer>
      <main>
        <BackButton>Go Back</BackButton>
        <FormCard icon={IconNewFeedback}>
          <FormHeading>Reset password</FormHeading>
          {message.content && <Alert variant={message.type}>{message.content}</Alert>}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
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
