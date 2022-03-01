import React from "react";
import { Accordion } from "./Accordion/Accordion";
import { AccordionContainer } from "./AccordionContainer/AccordionContainer";

export const UseCaseAccordion = () => {
  return (
    <div>
      <AccordionContainer allowSingle={false}>
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
