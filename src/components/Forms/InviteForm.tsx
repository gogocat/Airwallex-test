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
    IInviteFormValues,
} from 'validationSchemas/inviteFormValidationSchema';
import { postInvite } from 'services/inviteService';
import './InviteForm.scss';

interface IInviteFormProps {
  classNames?: string
  onSuccess?: (event: React.SyntheticEvent, reason: string) => void
}

function InviteForm(props: IInviteFormProps) {
    const {
        classNames = 'invite-form',
        onSuccess = () => {},
    } = props;

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionError, setSubmissionError] = useState('');
    const [showSuccessScreen, setSuccessScreen] = useState(false);

    const submitButtonText = !isSubmitting
        ? 'Send'
        : 'Sending, please wait...';

    const handleFormSubmit = async (values: IInviteFormValues) => {
        try {
            const {
                fullName = '',
                email = '',
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
            setSuccessScreen(true);
        } catch(err) {
            setIsSubmitting(false);
            setSubmissionError('Something went wrong. Please try again later.');
        }
    };

    if (showSuccessScreen) {
        return (
            <div className={classNames}>
                <h2>All done!</h2>
                <p>
            You will be one of the first to experience
            Broccoli & co. when we launch.
                </p>
                <div className="invite-form__button-section">
                    <Button 
                        color="primary" 
                        variant="contained" 
                        fullWidth 
                        type="button"
                        onClick={(e)=> onSuccess(e, '')}
                    >
                OK
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className={classNames}>
            <h2>Request an invite</h2>
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
