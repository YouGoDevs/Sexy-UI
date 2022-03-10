export const setFontSize = (controlSize: string | undefined) => {
  switch (controlSize) {
    case "small":
      return `font-size: 0.75rem; line-height: 0.8rem;`;
    case "medium":
      return `font-size: 1.25rem; line-height: 1.5rem;`;
    case "large":
      return `font-size: 1.5rem; line-height: 1.75rem;`;
  }
};
