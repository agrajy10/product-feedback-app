import { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { signInWithEmailAndPassword } from 'firebase/auth';

import Container from '../layout/Container';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import FormCard from '../components/FormCard';
import TextField from '../components/TextField';
import Alert from '../components/Alert';

import { auth } from '../firebase-config';

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
  margin-top: 16px;
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
  margin-top: 25px;
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
  email: '',
  password: ''
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required("Can't be empty"),
  password: Yup.string().required("Can't be empty")
});

function Login() {
  const [message, setMessage] = useState({ type: '', content: '' });
  const navigate = useNavigate();

  const onSubmit = async ({ email, password }) => {
    setMessage({ type: '', content: '' });
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage({
        type: 'success',
        content: 'Logged in successfully. Now you will be redirected'
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
          <FormHeading>Login</FormHeading>
          {message.content && <Alert variant={message.type}>{message.content}</Alert>}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {({ isSubmitting }) => {
              return (
                <Form>
                  <div className="field-wrap">
                    <TextField id="email" name="email" type="email" label="Email" />
                  </div>
                  <div className="field-wrap">
                    <TextField id="password" name="password" type="password" label="Password" />
                  </div>
                  <FormBottom>
                    <Button type="submit" className="submit-btn" disabled={isSubmitting}>
                      Login
                    </Button>
                  </FormBottom>
                  <FormLinks>
                    <p>
                      <Link to="/forgot-password">Forgot password?</Link>
                    </p>
                    <p>
                      Don't have an account? <Link to="/register">Register</Link>
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

export default Login;
