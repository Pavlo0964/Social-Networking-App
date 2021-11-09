import React from "react";
import { TextInput } from "@components";

const TextInputField = props => {
  const {
    input,
    meta: { error, touched },
    ...rest
  } = props;
  const showError = touched && error;

  return <TextInput {...input} {...rest} error={showError ? error : ""} />;
};

export default TextInputField;
