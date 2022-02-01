import styled from 'styled-components';

import Container from '../layout/Container';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import FormCard from '../components/FormCard';
import TextField from '../components/TextField';
import SelectField from '../components/SelectField';
import TextAreaField from '../components/TextAreaField';

import breakpoints from '../styles/breakpoints';

import IconEditFeedback from '../assets/shared/icon-edit-feedback.svg';

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
    .cancel-btn,
    .delete-btn {
      padding: 12px 24px;
      min-width: unset;
    }
    .delete-btn {
      margin-right: auto;
    }
  }
`;

function CreateFeedback() {
  return (
    <FormContainer>
      <BackButton>Go Back</BackButton>
      <FormCard icon={IconEditFeedback}>
        <FormHeading>Editing 'Add a dark theme option'</FormHeading>
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
          <SelectField
            id="feedback-status"
            label="Update Status"
            labelDesc="Change feature state"
          />
          <TextAreaField
            id="feedback-detail"
            label="Feedback Detail"
            labelDesc="Include any specific comments on what should be improved, added, etc."
            height={120}
          />
          <FormBottom>
            <Button type="submit" className="submit-btn">
              Save Changes
            </Button>
            <Button variant="tertiary" className="cancel-btn">
              Cancel
            </Button>
            <Button variant="warning" className="delete-btn">
              Delete
            </Button>
          </FormBottom>
        </form>
      </FormCard>
    </FormContainer>
  );
}

export default CreateFeedback;
