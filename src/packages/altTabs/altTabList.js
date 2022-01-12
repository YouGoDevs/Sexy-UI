import React, { useRef, useState } from "react";
import { AltTab } from "./altTab";


/*
    TabList contains instances of each tab component created by the user

    It provides localstate values for toggling active Tab, setting content and displaying content

*/

export const AltTabList = ({ children }) => {
  
// create state value to track Active Tab instance
  const [activeTab, setActiveTab] = useState();
// create state value to track content
  const [content, setContent] = useState();
// experimental ref to capture specific child component
  const tabContentRef = useRef();

  const toggleActive = () => {

  }

 
  return (
    <div style={{display: "flex", flexDirection: "row", width: "900px", height: "50px", border: "1px solid black"}}>
        {children && children.map((child, index) => {
          console.log(child);
            return React.cloneElement(child, {
                setContent: setContent,
                contentRef: tabContentRef,

            })
        })}

    </div>
  );
};
