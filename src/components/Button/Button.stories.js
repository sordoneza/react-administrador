import React from "react";
import Button from "./index";

export default {
  title: "Button",
  component: Button
};

export const defaultButton = () => <Button>Click aqui</Button>;

export const mediumButton = () => <Button size="medium">Click aqui</Button>;

export const underlineButton = () => <Button underline>Click aqui</Button>;
