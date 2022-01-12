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

  if (!children) return null;
  return (
    <div
      style={{ border: "1px solid red" }}
      onClick={multiple === true ? onToggle : toggleVisible}
    >
      <> {children[0]} </>

      {visibility === true ? (
        <AccordionPanel> {children[1]} </AccordionPanel>
      ) : null}
    </div>
  );
};
