import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../utils/theme.util";

export const SexyTheme: React.FC<{ theme: object }> = ({ children }) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};
