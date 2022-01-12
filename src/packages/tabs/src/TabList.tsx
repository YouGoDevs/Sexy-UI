import styled from "styled-components";
import { useEffect, useContext } from "react";
import { useStore, Store } from "../context/useStore";
import { MyStore } from "../context/myStore";

// Wrapper for tab components inside Tabs**

const ListedTabs = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  gap: 70px;
`;

/*
  We use this component to set the default starting value of the `TabContent` component 
  to be the content in the first instance

*/

export const TabList: any = ({ children }: any) => {
  const myStore = useContext(MyStore);

  const store = myStore.store as Store;

  const content = myStore.content;

  useEffect(() => {
    myStore.setContent(children[store.selectedTab].props.children[1].props);
  }, []);

  return <ListedTabs>{children}</ListedTabs>;
};
