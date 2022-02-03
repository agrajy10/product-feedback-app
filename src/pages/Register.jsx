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

import { registerUser } from '../features/auth/authThunk';

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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = ({ fullname, email, password }, setSubmitting) => {
    dispatch(registerUser({ fullname, email, password }))
      .then(unwrapResult)
      .then(() => {
        toast.success('Registered successfully');
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
          <FormHeading>Register</FormHeading>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => onSubmit(values, setSubmitting)}>
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
