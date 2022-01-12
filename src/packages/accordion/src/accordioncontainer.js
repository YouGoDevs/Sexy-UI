import { useState } from "react";
import React from "react";

export const AccordionContainer = ({ children, multiple = false }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [visibility, setVisibility] = useState(false);

  const toggleFromParent = () => {
    setVisibility((prev) => !prev);

  };

  return (
    <div>
      {children.map((child, index) => {
        return React.cloneElement(child, {
          child: { ...child },
          multiple: multiple,
          active: activeAccordion === index,
          onToggle: (e) =>
            setActiveAccordion((active) => (active === index ? child : null)),
          setVisibility: setVisibility,
          visibility: visibility,
          toggleFromParent: toggleFromParent,
        });
      })}
    </div>
  );
};
