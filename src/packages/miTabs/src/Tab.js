import styled from "styled-components";

const StylizedTab = styled.button`
  width: 50%;
  background-color: transparent;
  border: none;
  font-size: 1.25rem;
  padding: 20px 0px;
  cursor: ${(p) => (p.disabled ? "default" : "pointer")};
  color: ${(p) => (p.active ? "#00adb5" : "black")};
  ${(p) => !p.active && p.inactiveStyle}
`;

export const inactiveTab = styled.div`
  opacity: 0;
`;

export const Tab = ({ label, active, onClick }) => {
  return (
    <StylizedTab
      role="tab"
      active={active}
      onClick={onClick}
      inactiveStyle={inactiveTab}
    >
      {label}
    </StylizedTab>
  );
};
