import React from "react";
import { ThemeProvider } from "styled-components";
import { Carousel, Slider } from "./packages/Carousel";


const App = () => {
  return (
    <Carousel>
        <Slider>Hello</Slider>
        <Slider>Hello</Slider>
    </Carousel>
  );
};

export { App };
