import React from 'react';

type InputProps = {
  name: string;
  register?: () => void;
};

function Input(props: InputProps): JSX.Element {
  return <input type="text" name={props.name} ref={props.register} />;
}

export default Input;
