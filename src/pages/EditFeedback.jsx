import { FormContainer, FormHeading, FormBottom } from './FormStyles';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import FormCard from '../components/FormCard';
import TextField from '../components/TextField';
import SelectField from '../components/SelectField';
import TextAreaField from '../components/TextAreaField';

import IconEditFeedback from '../assets/shared/icon-edit-feedback.svg';

function CreateFeedback() {
  return (
    <FormContainer>
      <main>
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
      </main>
    </FormContainer>
  );
}

export default CreateFeedback;
