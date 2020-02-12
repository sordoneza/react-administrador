// @flow
import React from "react";
import styled from "styled-components";
import classnames from "classnames";

type Props = {
  children: any,
  size: "normal" | "medium" | "small",
  underline: boolean,
  className?: string,
  onClick: () => void
};

const StyledButton = styled.button`
  background: ${props => props.theme.color.gray};
  color: white;
  border: none;
  border-radius: 5px;
  &.normal {
    font-size: 12px;
    padding: 10px;
  }

  &.medium {
    font-size: 15px;
    padding: 15px;
  }

  &.underline {
    background: white;
    border: 1px solid ${props => props.theme.color.gray};
    color: ${props => props.theme.color.gray};
  }
`;

const Button = ({ size, underline, children }: Props) => {
  const btnClass = classnames({
    // normal: size === "normal",
    // medium: size === "medium",
    // small: size === "small",
    [`${size}`]: size,
    underline
  });
  return <StyledButton className={btnClass}>{children}</StyledButton>;
};

Button.defaultProps = {
  size: "normal",
  underline: false
};

export default Button;
