import React from "react";
import { Accordion } from "./accordion";
import { AccordionContainer } from "./accordioncontainer";

export const UseCase = () => {
  return (
    <div>
      <AccordionContainer>
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
