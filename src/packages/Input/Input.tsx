import React, { useState } from "react";
import { InputProps } from "./Input.props";
import { StyledInput } from "./Input.styled";

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  type = "text",
  sizeVariant = "medium",
  ...otherProps
}) => {
  const [inputValue, setInputValue] = useState(value || "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange?.(event);
  };
  return (
    <StyledInput
      value={inputValue}
      sizeVariant={sizeVariant}
      type={type}
      onChange={handleChange}
      {...otherProps}
    />
  );
};
