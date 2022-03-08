import React from "react";
import { UseCaseAccordion } from "./packages/Accordion/useCaseAccordion";
import { UseCaseTabs } from './packages/Tab/UseCaseTabs';

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        gap:"2rem",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <UseCaseAccordion/>
      <UseCaseTabs/>
    </div>
  );
};

export { App };
