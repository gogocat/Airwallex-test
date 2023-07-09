import React from 'react';
import { useField } from 'formik';
import TextField from '@mui/material/TextField';

interface ITextInputFieldProps {
    label: string,
    name: string,
    id?: string,
    margin?: string,
    [key: string]: any
}

function TextInputField(props: ITextInputFieldProps) {
    const { 
        label,
        id = '',
        ...restProps
    } = props;

    const [field, meta] = useField(restProps);

    return (
        <TextField
            fullWidth
            id={id || props.name}
            name={props.name}
            label={label}
            value={field.value}
            onChange={field.onChange}
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
            margin="normal"
        />
    );
}

export default TextInputField;
