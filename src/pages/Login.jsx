import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Container from '../layout/Container';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import FormCard from '../components/FormCard';
import TextField from '../components/TextField';

import breakpoints from '../styles/breakpoints';

import IconNewFeedback from '../assets/shared/icon-new-feedback.svg';

const FormContainer = styled(Container)`
  max-width: 540px;
  input,
  select,
  textarea {
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

function Login() {
  return (
    <FormContainer>
      <main>
        <BackButton>Go Back</BackButton>
        <FormCard icon={IconNewFeedback}>
          <FormHeading>Login</FormHeading>
          <form>
            <TextField id="email" label="Email" />
            <TextField id="password" label="Password" />
            <FormBottom>
              <Button type="submit" className="submit-btn">
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
          </form>
        </FormCard>
      </main>
    </FormContainer>
  );
}

export default Login;
