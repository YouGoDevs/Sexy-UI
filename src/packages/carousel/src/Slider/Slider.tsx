import React from "react";
import { StyledSlider } from "./Slider.style";

interface SliderProps {
  children?: JSX.Element | undefined | any;
}

const Slider = ({ children }: SliderProps) => {
  return <StyledSlider>{children}</StyledSlider>;
};

export default Slider;
