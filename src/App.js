import React from "react";
import { UseCaseAccordion } from "./packages/accordion/src/useCaseAccordion";
import { Calendar } from "./packages/calendar/src/Calendar";


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
      <Calendar/>
    </div>
  );
};

export { App };
