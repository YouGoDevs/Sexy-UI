import React from "react";

interface AccordionTitleProps {
  children: React.ReactChild[];
}

export const AccordionTitle = ({ children }: AccordionTitleProps) => {
  return <div>{children}</div>;
};
