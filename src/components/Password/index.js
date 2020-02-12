// @flow
import React from "react";
import BaseInput from "../BaseInput";
import styled from "styled-components";

// @types
import type { BaseInputProps } from "../BaseInput";

type Props = {
  label?: string
} & BaseInputProps;

const StyledHeader = styled.div`
  text-align: right;
`;

const StyledLabel = styled.label`
  float: left;
`;

const StyledButton = styled.a`
  color: ${props => props.theme.color.gray};
  text-decoration: underline;
`;

const Password = ({ name, type, error, label }: Props) => {
  const [visible, setVisible] = React.useState(false);
  const onClick = () => {
    setVisible(!visible);
  };
  const Header = () => {
    return (
      <StyledHeader>
        <StyledLabel htmlFor={name}>{label}</StyledLabel>
        <StyledButton onClick={onClick}>
          {visible ? "Hide" : "Show"}
        </StyledButton>
      </StyledHeader>
    );
  };
  return (
    <BaseInput
      name={name}
      type={visible ? "text" : type}
      error={error}
      header={label && <Header />}
    />
  );
};

Password.defaultProps = {
  type: "password"
};

export default Password;
