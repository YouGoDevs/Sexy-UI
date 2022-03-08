import { useEffect, useState } from "react";
import React from "react";
import { AccordionPanel } from "./accordionpanel";

export const Accordion = ({
  children,
  visibilityRef,
  index,
  setActiveAccordion,
  active,
  single,
}) => {
  /* 
  local visibility toggle to manage visibility in individual components
 */

  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    if (single) setVisibility(active);
  }, [single, active]);

  const toggleVisible = () => {
    if (!visibility) {
      if (single === true) {
        setActiveAccordion(index);
      }
    } else {
      if (single === true) {
        setActiveAccordion(-1);
      }
    }

    if (!single) setVisibility((prev) => !prev);
  };

  /* 
  
  This method closes tabs if you click outside of the div in visibilityRef.current

 */
  if (!children) return null;

  return (
    <div
      style={{ border: "1px solid red" }}
      onClick={(e) => {
        toggleVisible();
      }}
      ref={visibilityRef}
    >
      <> {children[0]} </>

      {visibility === false ? null : (
        <AccordionPanel> {children[1]} </AccordionPanel>
      )}
    </div>
  );
};
