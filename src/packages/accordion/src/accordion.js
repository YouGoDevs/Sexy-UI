import { useState } from "react";
import React from "react";
import { AccordionPanel } from "./accordionpanel";
import { AccordionTitle } from "./accordiontitle";

export const Accordion = ({
  children,
  multiple,
  active,
  onToggle,
}) => {
 /* 
  local visibility toggle to manage visibility in individual components
 */
  const [visibility, setVisibility] = useState(false);

  const toggleVisible = () => {
    setVisibility((prev) => !prev);
  };

  // if no accordions exist return null
  if (!children) return null;

  return (
    <div
      style={{ border: "1px solid red" }}
      onClick={toggleVisible}
    >
      <> {children[0]} </>

      {!visibility  ? null : (
        <AccordionPanel> {children[1]} </AccordionPanel>
      )}
    </div>
  );
};
