import React, { useRef, useState } from "react";

/*

  This component acts a wrapper for for each accordion instance 

  Toggles visibility for multiple accordions using the "multiple prop"
  

*/

export const AccordionContainer = ({ children }) => {
  const visibilityRef = useRef();

  const [activeAccordion, setActiveAccordion] = useState(null);
  let single = true;

  return (
    <div>
      {children.map((child, index) => {
        return React.cloneElement(child, {
          child: { ...child },
          visibilityRef: visibilityRef,
          index: index,
          setActiveAccordion: setActiveAccordion,
          active: index === activeAccordion,
          single: single
        });
      })}
    </div>
  );
};
