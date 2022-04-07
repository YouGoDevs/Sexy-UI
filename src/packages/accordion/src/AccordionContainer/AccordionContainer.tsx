import React, { useRef, useState } from "react";
import { StyledAccordionContainer } from "./AccordionContainer.style";

/*

  This component acts a wrapper for for each accordion instance 

  Contains multiple instances of accordion.js and tracks the active instance via index
  
  This container houses the useRef

*/

interface AccordionContainerProps {
  children: React.ReactChild[];
  allowSingle: boolean;
}

export const AccordionContainer = ({
  children,
  allowSingle,
}: AccordionContainerProps) => {
  const visibilityRef = useRef();

  const [activeAccordion, setActiveAccordion] = useState(null);

  return (
    <StyledAccordionContainer>
      {children.map((child: any, index: number) => {
        return React.cloneElement(child, {
          child: { ...child },
          visibilityRef: visibilityRef,
          index: index,
          setActiveAccordion: setActiveAccordion,
          active: index === activeAccordion,
          allowSingle: allowSingle,
        });
      })}
    </StyledAccordionContainer>
  );
};
