import React from "react";
import { UseCaseAccordion } from "./packages/accordion/src/useCaseAccordion";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <UseCaseAccordion/>
    </div>
  );
};

export { App };
