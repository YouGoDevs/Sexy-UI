import { useEffect, useState } from "react";
import React from "react";
import { AccordionPanel } from "../AccordionPanel/AccordionPanel";
import { StyledAccordion } from "./Accordion.styles";
import { AccordionProps } from "./Accordion.props";



export const Accordion = ({
  children,
  visibilityRef,
  index,
  setActiveAccordion,
  active,
  allowSingle,
}: AccordionProps) => {
  /* 
  local visibility toggle to manage visibility in individual components
 */

  const [visibility, setVisibility] = useState<boolean>(false);

  // This useEffect runs multiple checks to determine what the value of 'visibility' is
  // if the allowSingle prop exists, set the value of visibility === active
  // else, leave the value as 'false' and enable toggling - line 38
  useEffect(() => {
    if (allowSingle) setVisibility(active);
  }, [allowSingle, active]);

  const toggleVisible = () => {
    if (!visibility) {
      if (allowSingle === true) {
        setActiveAccordion(index);
      }
    } else {
      if (allowSingle === true) {
        setActiveAccordion(-1);
      }
    }

    if (!allowSingle) setVisibility((prev) => !prev);
  };

  /* 
  
  This method closes tabs if you click outside of the div in visibilityRef.current

 */
  if (!children) return null;
  return (
    <StyledAccordion
      onClick={(e) => {
        toggleVisible();
      }}
      ref={visibilityRef}
    >
      <> {children[0]} </>

      {visibility === false ? null : (
        <AccordionPanel> {children[1]} </AccordionPanel>
      )}
    </StyledAccordion>
  );
};
