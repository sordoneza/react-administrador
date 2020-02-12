import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import FormText from "../FormText";

export type BaseInputProps = {
  name: string,
  type: string,
  error?: string
};

type Props = {
  header?: any
} & BaseInputProps;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: 7px;
  }
`;

const StyledInput = styled.input`
  border: 1px solid;
  border-color: ${props =>
    props.invalid ? props.theme.color.red : props.theme.color.gray};
  font-size: 15px;
  border-radius: 5px;
`;

const BaseInput = ({ name, type, error, header }: Props) => {
  return (
    <Wrapper>
      {header}
      <StyledInput id={name} name={name} type={type} invalid={!!error} />
      {error && <FormText color="red">{error}</FormText>}
    </Wrapper>
  );
};

BaseInput.defaultProps = {
  type: "text"
};

export default BaseInput;
