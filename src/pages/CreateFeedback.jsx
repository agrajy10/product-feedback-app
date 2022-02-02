import { FormContainer, FormHeading, FormBottom } from './FormStyles';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import FormCard from '../components/FormCard';
import TextField from '../components/TextField';
import SelectField from '../components/SelectField';
import TextAreaField from '../components/TextAreaField';

import IconNewFeedback from '../assets/shared/icon-new-feedback.svg';

function CreateFeedback() {
  return (
    <FormContainer>
      <main>
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
      </main>
    </FormContainer>
  );
}

export default CreateFeedback;
