import styled from 'styled-components';

import Container from '../layout/Container';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import FormCard from '../components/FormCard';
import TextField from '../components/TextField';
import SelectField from '../components/SelectField';
import TextAreaField from '../components/TextAreaField';

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
  @media (min-width: ${breakpoints.sm}px) {
    font-size: 24px;
  }
`;

const FormBottom = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 16px;
  @media (min-width: ${breakpoints.sm}px) {
    display: flex;
    flex-direction: row-reverse;
    .cancel-btn {
      min-width: unset;
      padding: 12px 24px;
    }
  }
`;

function CreateFeedback() {
  return (
    <FormContainer>
      <BackButton>Go Back</BackButton>
      <FormCard icon={IconNewFeedback}>
        <FormHeading>Create New Feedback</FormHeading>
        <form>
          <TextField
            id="feedback-title"
            label="Feedback Title"
            labelDesc="Add a short, descriptive headline"
          />
          <SelectField
            id="feedback-category"
            label="Category"
            labelDesc="Choose a category for your feedback"
          />
          <TextAreaField
            id="feedback-detail"
            label="Feedback Detail"
            labelDesc="Include any specific comments on what should be improved, added, etc."
            height={120}
          />
          <FormBottom>
            <Button type="submit" className="submit-btn">
              Add Feedback
            </Button>
            <Button variant="tertiary" className="cancel-btn">
              Cancel
            </Button>
          </FormBottom>
        </form>
      </FormCard>
    </FormContainer>
  );
}

export default CreateFeedback;
