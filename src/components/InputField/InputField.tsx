import React from 'react';
import classes from './inputField.module.scss';

type InputFieldProps = {
    type?: string,
    className?: string,
    placeholder?: string,

}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(({type = 'text', placeholder, className, ...props}, ref) => {
    return (
        <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            className={[classes.input, className].join(' ')}
            {...props}
        />
    )
});

export default InputField;