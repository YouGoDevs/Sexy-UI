import { useState } from "react";
import React from "react";
import { AccordionPanel } from "./accordionpanel";
import { AccordionTitle } from "./accordiontitle";

export const Accordion = ({ children, multiple, active, onToggle, visibility, setVisibility }) => {
  

  // const isActive = () => (multiple? visibility : active);

  const toggleVisible = () => {
    setVisibility((prev) => !prev);
    onToggle();
  };

  if (!children) return null;
  return (
    <div style={{ border: "1px solid red" }} onClick={ multiple === true? onToggle : toggleVisible}>
      <> {children[0]} </>

      {visibility === true ? (
        <AccordionPanel> {children[1]} </AccordionPanel>
      ) : null}
    </div>
  );
};
