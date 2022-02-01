import styled from 'styled-components';

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

function FrogotPassword() {
  return (
    <FormContainer>
      <main>
        <BackButton>Go Back</BackButton>
        <FormCard icon={IconNewFeedback}>
          <FormHeading>Reset password</FormHeading>
          <form>
            <TextField id="email" label="Email" />
            <FormBottom>
              <Button type="submit" className="submit-btn">
                Send reset link
              </Button>
            </FormBottom>
          </form>
        </FormCard>
      </main>
    </FormContainer>
  );
}

export default FrogotPassword;
