import React from "react";
import { UseCase } from "./packages/accordion/src/useCase";
import { AltTabList } from "./packages/altTabs/altTabList";
import { TabZone } from "./packages/tabs/src/TabZone";


const App = () => {
  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw", alignItems: "center", justifyContent: "center" }}>
        <TabZone/>
    </div>
  );
};

export { App };
