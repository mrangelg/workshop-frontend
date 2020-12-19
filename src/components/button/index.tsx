import React from 'react';

type ButtonProps = {
  name: string;
};

function Button(props: ButtonProps): JSX.Element {
  return <button name="button">{props.name}</button>;
}

export default Button;
