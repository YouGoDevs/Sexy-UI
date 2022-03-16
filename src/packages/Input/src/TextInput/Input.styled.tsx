import styled from "styled-components";
import { InputProps } from "./Input.props";
import { darkTheme } from "../../../../utils/theme.util";
import { setFontSize } from "../../../../utils/styles.util";

export const StyledInput = styled.input<InputProps>`
  ${(props: InputProps) => setFontSize(props.sizeVariant)}

  color: ${(props) => props.theme.textPrimary};
  border: 2px solid ${(props) => props.theme.backgroundMain};
  background: ${(props) => props.theme.backgroundMain};
  padding: 0.5rem 1rem;
`;

StyledInput.defaultProps = {
  theme: darkTheme,
};
