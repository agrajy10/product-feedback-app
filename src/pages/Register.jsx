import { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import Container from '../layout/Container';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import FormCard from '../components/FormCard';
import TextField from '../components/TextField';
import Alert from '../components/Alert';

import { auth, db } from '../firebase-config';

import breakpoints from '../styles/breakpoints';

import IconNewFeedback from '../assets/shared/icon-new-feedback.svg';

const FormContainer = styled(Container)`
  max-width: 540px;
  .field-wrap {
    margin-bottom: 24px;
  }
`;

const FormHeading = styled.h1`
  font-size: 18px;
  margin: 0 0 24px 0;
  @media (min-width: ${breakpoints.md}px) {
    font-size: 24px;
  }
`;

const FormBottom = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin: 16px 0 0 0;
  @media (min-width: ${breakpoints.md}px) {
    display: flex;
    flex-direction: row-reverse;
    .cancel-btn {
      min-width: unset;
      padding: 12px 24px;
    }
  }
`;

const FormLinks = styled.div`
  text-align: center;
  font-size: 14px;
  line-height: 1.1;
  margin: 25px 0 0 0;
  p {
    margin-bottom: 5px;
  }
  a {
    color: ${({ theme }) => theme.button.primary.bg};
    &:hover {
      text-decoration: none;
    }
  }
  @media (min-width: ${breakpoints.md}px) {
    text-align: right;
  }
`;

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
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = async ({ fullname, email, password }) => {
    try {
      setError('');
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: fullname
      });
      await setDoc(doc(db, 'users', user.uid), { fullname, email });
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <FormContainer>
      <main>
        <BackButton>Go Back</BackButton>
        <FormCard icon={IconNewFeedback}>
          <FormHeading>Register</FormHeading>
          {error && <Alert>{error}</Alert>}
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
