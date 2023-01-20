import React, { forwardRef } from 'react';
import { FieldError } from 'react-hook-form/dist/types';

import { ErrorMessage, InputContainer, InputField, Label } from './Input.styled';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { error?: FieldError | undefined; label: string };

type Ref = HTMLInputElement;

const Input = forwardRef<Ref, Props>(({ error, label, ...props }, ref) => {
  return (
    <InputContainer>
      <Label htmlFor={label}>{label}</Label>
      <InputField {...props} id={label} ref={ref} />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </InputContainer>
  );
});

export default Input;

// <div classlabel={styles.item}>
//   <h3 classlabel={styles.title}>{props.title}</h3>

//   <input type={props.type} classlabel={styles.input} ref={ref} onChange={props.onChange} />
//   {!props.isValid && <InputError />}
// </div>;
