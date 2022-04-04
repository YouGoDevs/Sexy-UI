import { useState } from "react";
import React from "react";
import { PreviousButton, NextButton } from "../Slider/SliderButtons";
import { StyledCarousel } from "./Carousel.style";

/* 
  use case file defines an ideal use case for the component
  it represents the flow of state and props between parent and children components; a sort of relation tree that explains component behavior

  in the ideal setting, each carousel item will be a "slide" component which takes in a source prop, an alt prop and some style props
  slide components added directly to the carousel container, are automatically added to an array which is then traveresed with buttons


*/

interface CarouselProps<T> {
  children: JSX.Element[] | T[] ;
}

 const Carousel = <T extends any>({ children }: CarouselProps<T>) => {
  const [index, setIndex] = useState<number>(0);

  /* after defining local state to track active index from "children array", we define methods to handle incrementing 
     and decrementing the index to navigate between slides
  */

  const handleNextSlide = () => {
    if (index >= children.length - 1) setIndex(0);
    else {
      setIndex(index + 1);
    }
  };

  const handlePreviousSlide = () => {
    if (index === 0) return null;
    else {
      setIndex(index - 1);
    }
  };

  // handle null case if there are no child elements in "children"
  if (!children) return null;
  if (children.length === undefined) return null;
  if (children.length !== 2) return null;

  return (
    <StyledCarousel>
      <PreviousButton handlePreviousSlide={handlePreviousSlide} />
      {children && children[index]}
      <NextButton handleNextSlide={handleNextSlide} />
    </StyledCarousel>
  );
};

export default Carousel;