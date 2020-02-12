import React from "react";
import Password from ".";

export default {
  title: "Password",
  component: Password,
  parameters: {
    info: {
      inline: true
    }
  }
};

export const defaultPassword = () => <Password name="password" />;

export const invalidPassword = () => (
  <Password name="password" error="Please enter your password" />
);

export const withLabelPassword = () => (
  <Password
    name="password"
    label="Password"
    error="Please enter your password"
  ></Password>
);
