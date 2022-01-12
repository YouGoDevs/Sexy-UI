import styled from "styled-components";
import { MyStore } from "../context/myStore";
import { useStore } from "../context/useStore";

export const TabsComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 50vh;
`;

/*  Tabs is wrapper component that holds list of tab topics and 
    contents for each tab in a different wrapper
*/

interface Props {
  children?: any;
}

export const Tabs = ({ children }: Props) => {
  const myStore = useStore();
  return (
    // Store provider for hydrating tab content
    <MyStore.Provider value={myStore}>
      <TabsComponent>{children}</TabsComponent>;
    </MyStore.Provider>
  );
};
