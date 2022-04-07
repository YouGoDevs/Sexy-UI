export interface AccordionProps {
    children: React.ReactChild[];
    visibilityRef: React.MutableRefObject<HTMLDivElement>;
    index: number;
    setActiveAccordion: React.Dispatch<React.SetStateAction<number>>;
    active: boolean;
    allowSingle: boolean;
  }