import React, { useState } from 'react';
import {
  Formik,
  Form
} from 'formik';
import Button from '@mui/material/Button';
import TextInputField from 'components/TextInputField/TextInputField';
import {
  inviteFormValidationSchema,
  inviteFormValidationInitValues,
} from 'validationSchemas/inviteFormValidationSchema';

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

  const handleFormSubmit = (values: any) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionError('nope!');
      alert(JSON.stringify(values, null, 2));
    }, 2000);
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
          <Button 
            color="primary" 
            variant="contained" 
            fullWidth type="submit"
          >
            {submitButtonText}
          </Button>
          { submissionError && (
            <div>
              {submissionError}
            </div>
            )
          }
        </Form>
      </Formik>
    </div>
  );
}

export default InviteForm;
