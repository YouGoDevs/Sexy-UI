import React from "react";
import { StyledAccordionPanel } from "./AccordionPanel.style";

interface AccordionPanelProps {
  children: React.ReactChild[];
}

export const AccordionPanel = ({ children }: AccordionPanelProps) => {
  return <StyledAccordionPanel>{children}</StyledAccordionPanel>;
};
