import { useContext } from "react";
import styled from "styled-components";
import { MyStore } from "../context/myStore";
import { useEffect } from "react";

export const TabMain = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
  height: 20px;
  width: 40px;
  background-color: blanchedalmond;
`;

/*
  The Tab component accepts two elements into the 'children' array
  the first element is displayed as a separate entity container 
  the second element is used to set the content value to the context API store

*/

export const Tab: any = ({ children }: any) => {

  // tabContent is used to update the TabContent component via contextApi
  const tabContent = children[1].props;
  const localStore = useContext(MyStore);

  // update the context store with the content of chosen tab 
  // TODO: make the default tabContent start with the 0th tab instance not the latest
  useEffect(() => {
    localStore.setContent(tabContent);
  }, []);

  
  const handleContentSetting = () => {
    // update context store onClick
    localStore.setContent(tabContent);
  };

  return (
    <TabMain aria-label="inactive" onClick={handleContentSetting}>
      {children[0]}
      {children &&
        children.map((element: any) => {
          return <h1> {console.log(element.props)} </h1>;
        })}
    </TabMain>
  );
};
