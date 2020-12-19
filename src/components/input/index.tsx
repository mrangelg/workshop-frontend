import React from 'react';
import { Container, Label } from './styled';

type InputProps = {
  name: string;
  label?: string;
  register?: () => void;
};

function Input(props: InputProps): JSX.Element {
  return (
    <Container>
      <Label>{props.label}</Label>
      <input type="text" name={props.name} ref={props.register} />
    </Container>
  );
}

export default Input;
