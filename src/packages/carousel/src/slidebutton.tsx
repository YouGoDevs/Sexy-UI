import React from "react";

export const PreviousButton = ({ handlePreviousSlide }: any) => {
  return <button onClick={handlePreviousSlide}>{"<"}</button>;
};

export const NextButton = ({ handleNextSlide }: any) => {
  return <button onClick={handleNextSlide}>{">"}</button>;
};
