import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { FormContainer, FormHeading, FormBottom, FormLinks } from './FormStyles';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import FormCard from '../components/FormCard';
import TextField from '../components/TextField';

import { loginUser } from '../features/auth/authThunk';

import IconNewFeedback from '../assets/shared/icon-new-feedback.svg';

const initialValues = {
  email: '',
  password: ''
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required("Can't be empty"),
  password: Yup.string().required("Can't be empty")
});

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async ({ email, password }, setSubmitting) => {
    dispatch(loginUser({ email, password }))
      .then(unwrapResult)
      .then(() => {
        toast.success('Logged in successfully');
        navigate('/');
      })
      .catch(({ message }) => {
        toast.error(message);
        setSubmitting(false);
      });
  };

  return (
    <FormContainer>
      <main>
        <BackButton>Go Back</BackButton>
        <FormCard icon={IconNewFeedback}>
          <FormHeading>Login</FormHeading>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => onSubmit(values, setSubmitting)}>
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
