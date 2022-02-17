import React, { useState } from "react";
import { InputProps } from "./Input.props";
import { StyledInput } from "./Input.styles";

export const Input = ({
  value,
  onChange,
  type = "text",
  sizeVariant = "medium",
  prefix,
  prefixCls,
  ...otherProps
}: InputProps) => {
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
