import { useRef, useState } from "react";
import React from "react";
import { AccordionPanel } from "./accordionpanel";

export const Accordion = ({ children }) => {
  /* 
  local visibility toggle to manage visibility in individual components
 */

  const visibilityRef = useRef();

  const [visibility, setVisibility] = useState(true);

  const toggleVisible = () => {
    setVisibility((prev) => !prev);
  };

  /* 
  
  This method closes tabs if you click outside of the div in visibilityRef.current

 */
  const closeOnOutsideClick = (e) => {
    if (!visibilityRef.current === e.target) {
      setVisibility(false);
    }
  };

  console.log(visibilityRef);
  // if no accordions exist return null
  if (!children) return null;

  return (
    <div
      style={{ border: "1px solid red" }}
      // attempting to run both methods side by side with an inline function
      onClick={(e) => {
        closeOnOutsideClick(e);
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
