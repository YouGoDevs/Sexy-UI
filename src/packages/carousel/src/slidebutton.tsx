import React from "react";

type ButtonType = React.MouseEventHandler<HTMLButtonElement> | undefined;

interface ButtonProps {
  handlePreviousSlide?: ButtonType;
  handleNextSlide?: ButtonType;
}

export const PreviousButton = ({ handlePreviousSlide }: ButtonProps) => {
  return <button onClick={handlePreviousSlide}>{"<"}</button>;
};

export const NextButton = ({ handleNextSlide }: ButtonProps) => {
  return <button onClick={handleNextSlide}>{">"}</button>;
};
