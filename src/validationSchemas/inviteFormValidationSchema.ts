import * as yup from 'yup';
import { createValidationInitValues } from 'utils';

export const inviteFormValidationSchema = yup.object({
    fullName: yup
      .string()
      .required('Full name is required'),
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    confirmEmail: yup
        .string()
        .required('Confirm email is required')
        .oneOf([yup.ref('email')], 'Confirm email must match')
});

export const inviteFormValidationInitValues = createValidationInitValues(inviteFormValidationSchema.fields);

