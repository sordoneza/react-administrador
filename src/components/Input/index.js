// @flow
import React from "react";
import BaseInput from "../BaseInput";

// @types
import type { BaseInputProps } from "../BaseInput";

type Props = {
  label?: string
} & BaseInputProps;

const Input = ({ name, type, error, label }: Props) => {
  const Label = () => {
    return <label htmlFor={name}>{label}</label>;
  };
  return (
    <BaseInput
      name={name}
      type={type}
      error={error}
      header={label && <Label />}
    />
  );
};

export default Input;
