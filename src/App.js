import React from "react";
import { UseCaseTabs } from "./packages/tabs/src/UseCaseTabs";

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
      <UseCaseTabs />
    </div>
  );
};

export { App };
