import styled from "styled-components";

import { MyStore } from "../context/myStore";
import { useContext } from "react";

export const TabsComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 50vh;

  h1 {
    border: 2px solid blue;
  }
`;

/*  Tabs is wrapper component that holds list of tab topics and 
    contents for each tab in a different wrapper

    Tab provides activeState variables to track what tab is open and display
    its contents
*/

interface Props {
  children: any;
  content: any;
}

export const Tabs: any = ({ children, content }: Props) => {
  const localStore = useContext(MyStore);

  return (
    <TabsComponent>
      {children}
    
    </TabsComponent>
  );
};
