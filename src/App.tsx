import React from "react";
import { ThemeProvider } from "styled-components";
import { Carousel, Slider } from "./packages/Carousel";
import { Input } from "./packages/Input";
import { SexyTheme } from "./packages/SexyTheme/SexyTheme";
import { darkTheme, lightTheme } from "./utils/theme.util";

const App = () => {
  return (
    <Carousel>
        <Slider>Hello</Slider>
        <Slider>Hello</Slider>
    </Carousel>
  );
};

export { App };
