import { useContext } from "react";
import { MyStore } from "../../context/myStore";
import { useEffect } from "react";
import { StyledTab } from "./Tab.styled";

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
    <StyledTab aria-label="inactive" onClick={handleContentSetting}>
      {children[0]}
    </StyledTab>
  );
};
