import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import { FormContainer, FormHeading, FormBottom, FormLinks } from './FormStyles';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import FormCard from '../components/FormCard';
import TextField from '../components/TextField';
import Alert from '../components/Alert';

import { auth, db } from '../firebase-config';

import IconNewFeedback from '../assets/shared/icon-new-feedback.svg';

const initialValues = {
  fullname: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const validationSchema = Yup.object({
  fullname: Yup.string().required("Can't be empty"),
  email: Yup.string().email('Invalid email').required("Can't be empty"),
  password: Yup.string().min(5, 'Must have atleast 5 characters').required("Can't be empty"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required("Can't be empty")
});

function Register() {
  const [message, setMessage] = useState({ type: '', content: '' });
  const navigate = useNavigate();

  const onSubmit = async ({ fullname, email, password }) => {
    setMessage({ type: '', content: '' });
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: fullname
      });
      await setDoc(doc(db, 'users', user.uid), { fullname, email });
      setMessage({
        type: 'success',
        content: 'Registered successfully. Now you will be redirected'
      });
      setTimeout(() => {
        navigate('/');
      }, 1200);
    } catch (error) {
      setMessage({ type: 'error', content: error.message });
    }
  };

  return (
    <FormContainer>
      <main>
        <BackButton>Go Back</BackButton>
        <FormCard icon={IconNewFeedback}>
          <FormHeading>Register</FormHeading>
          {message.content && <Alert variant={message.type}>{message.content}</Alert>}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {({ isSubmitting }) => {
              return (
                <Form>
                  <div className="field-wrap">
                    <TextField id="fullname" name="fullname" type="text" label="Name" />
                  </div>
                  <div className="field-wrap">
                    <TextField id="email" name="email" type="email" label="Email" />
                  </div>
                  <div className="field-wrap">
                    <TextField id="password" name="password" type="password" label="Password" />
                  </div>
                  <div className="field-wrap">
                    <TextField
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      label="Confirm password"
                    />
                  </div>
                  <FormBottom>
                    <Button type="submit" className="submit-btn" disabled={isSubmitting}>
                      Register
                    </Button>
                  </FormBottom>
                  <FormLinks>
                    <p>
                      Already have an account? <Link to="/login">Login</Link>
                    </p>
                  </FormLinks>
                </Form>
              );
            }}
          </Formik>
        </FormCard>
      </main>
    </FormContainer>
  );
}

export default Register;
