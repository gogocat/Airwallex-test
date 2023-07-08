import React, { useState } from 'react';
import {
  Formik,
  Form
} from 'formik';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import TextInputField from 'components/TextInputField/TextInputField';
import {
  inviteFormValidationSchema,
  inviteFormValidationInitValues,
} from 'validationSchemas/inviteFormValidationSchema';
import { postInvite } from 'services/inviteService';
import './InviteForm.scss';

interface IInviteFormProps {
  classNames?: string
}

function InviteForm(props: IInviteFormProps) {
  const {
    classNames = 'invite-form'
  } = props;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState('');

  const submitButtonText = !isSubmitting
    ? 'Send'
    : 'Sending, please wait...'

  const handleFormSubmit = async (values: any) => {
    try {
      const {
        fullName,
        email,
      } = values;

      if (isSubmitting) {
        return;
      }
  
      setIsSubmitting(true);
  
      await postInvite({
        name: fullName,
        email,
      });
      
      setIsSubmitting(false);
    } catch(err) {
      setIsSubmitting(false);
      setSubmissionError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className={classNames}>
      <Formik
        initialValues={inviteFormValidationInitValues}
        validationSchema={inviteFormValidationSchema}
        onSubmit={handleFormSubmit}
      >
        <Form>
          <TextInputField
            id="fullName"
            name="fullName"
            label="Full name"
          />
          <TextInputField
            id="email"
            name="email"
            label="Email"
          />
          <TextInputField
            id="confirmEmail"
            name="confirmEmail"
            label="Confirm email"
          />
          <div className="invite-form__button-section">
            <Button 
              color="primary" 
              variant="contained" 
              fullWidth 
              type="submit"
              disabled={isSubmitting}
            >
              {submitButtonText}
            </Button>
            { submissionError && (
              <Alert 
                className="invite-form__error-message"
                severity="error"
              >
                {submissionError}
              </Alert>
              )
            }
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default InviteForm;
