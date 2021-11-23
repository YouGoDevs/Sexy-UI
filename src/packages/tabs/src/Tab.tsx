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

export const Tab: any = ({ children, content }: any) => {
  const tabContent = children[1].props;
  const localStore = useContext(MyStore);

  useEffect(() => {
    localStore.setContent(tabContent);
  }, []);

  const handleContentSetting = () => {
    localStore.setContent(tabContent);
  };

  return (
    <TabMain aria-label="inactive" onClick={handleContentSetting}>
      {children[0]}
      {children && children.map((element: any) => {
        <h1> {console.log(element.props)} </h1>
      })}
    </TabMain>
  );
};
