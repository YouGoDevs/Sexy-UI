import styled from "styled-components";

const StylizedTabPanel = styled.div`
  display: ${(p) => (p.active ? "flex" : "none")};
  background: blanchedalmond;
  font-size: 4rem;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const TabPanel = ({ children, value, selectedIndex }) => {
  const hidden = value !== selectedIndex;

  return (
    <StylizedTabPanel hidden={hidden} active={!hidden}>
      {" "}
      {children}{" "}
    </StylizedTabPanel>
  );
};
