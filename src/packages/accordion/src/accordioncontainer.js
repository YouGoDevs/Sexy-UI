import { useState } from "react";
import React from "react";

/*

  This component acts a wrapper for for each accordion instance 

  Toggles visibility for multiple accordions using the "multiple prop"
  
  
  

*/

export const AccordionContainer = ({ children, multiple = false }) => {
  
  // setActive accordion state and visibility from Parent container
  // const [activeAccordion, setActiveAccordion] = useState(null);
  // const [visibility, setVisibility] = useState(false);

  // const toggleFromParent = () => {
  //   setVisibility((prev) => !prev);
  // };
        
  
  return (
    <div>
      {children.map((child, index) => {
        return React.cloneElement(child, {
          child: { ...child },
        });
      })}
    </div>
  );
};
