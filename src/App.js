import React from "react";
import { CarouselContainer } from "./packages/carousel/src/CarouselContainer";
import { Slider } from "./packages/carousel/src/Slider";

const App = () => {
  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw", alignItems: "center", justifyContent: "center" }}>
      <CarouselContainer>
        <Slider>Hello</Slider>
        <Slider>Hello Me</Slider>
        <Slider>Hello You</Slider>
        <Slider>Bruh...</Slider>
      </CarouselContainer>
    </div>
  );
};

export { App };
