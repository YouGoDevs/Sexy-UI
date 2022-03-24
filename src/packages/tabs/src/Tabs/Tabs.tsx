import { MyStore } from "../../context/myStore";
import { useStore } from "../../context/useStore";
import { TabsProps } from "./Tabs.props";
import { StyledTabs } from "./Tabs.styled";

/*  Tabs is wrapper component that holds list of tab topics and 
    contents for each tab in a different wrapper
*/

export const Tabs = ({ children }: TabsProps) => {
  const myStore = useStore();
  return (
    // Store provider for hydrating tab content
    <MyStore.Provider value={myStore}>
      <StyledTabs>{children}</StyledTabs>;
    </MyStore.Provider>
  );
};
