import React, { useRef, useState } from "react";

/*

  This component acts a wrapper for for each accordion instance 

  Contains multiple instances of accordion.js and tracks the active instance via index
  
  This container houses the useRef

*/



export const AccordionContainer = ({ children, allowSingle }) => {
  const visibilityRef = useRef();

  const [activeAccordion, setActiveAccordion] = useState(null);

  return (
    <div>
      {children.map((child, index) => {
        return React.cloneElement(child, {
          child: { ...child },
          visibilityRef: visibilityRef,
          index: index,
          setActiveAccordion: setActiveAccordion,
          active: index === activeAccordion,
          allowSingle: allowSingle,
        });
      })}
    </div>
  );
};
