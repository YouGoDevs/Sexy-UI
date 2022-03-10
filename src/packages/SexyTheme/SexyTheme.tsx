import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../utils/theme.util";

export const SexyTheme: React.FC<{ theme?: object }> = ({
  theme = darkTheme,
  children,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
