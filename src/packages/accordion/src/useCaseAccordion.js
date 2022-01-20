import React from "react";
import { Accordion } from "./accordion";
import { AccordionContainer } from "./accordioncontainer";

export const UseCaseAccordion = () => {
  return (
    <div>
      <AccordionContainer single={false}>
        <Accordion>
          <h1>Hello</h1>
          <div>Yerrrr</div>
        </Accordion>
        <Accordion>
          <h1>Hello</h1>
          <div>Yerrrr</div>
        </Accordion>
        <Accordion>
          <h1>Hello</h1>
          <div>Yerrrr</div>
        </Accordion>
        <Accordion>
          <h1>Hello</h1>
          <div>Yerrrr</div>
        </Accordion>
      </AccordionContainer>
    </div>
  );
};
