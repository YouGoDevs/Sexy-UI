import React from "react";
import { ThemeProvider } from "styled-components";
import { Input } from "./packages/Input";
import { SexyTheme } from "./packages/SexyTheme/SexyTheme";
import { darkTheme, lightTheme } from "./utils/theme.util";

const App = () => {
  return (
    <div>
      <SexyTheme>
        <Input className="primary" />
      </SexyTheme>
      <ThemeProvider theme={lightTheme}>
        <Input />
      </ThemeProvider>
    </div>
  );
};

export { App };
