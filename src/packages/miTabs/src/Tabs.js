import React from "react";
import styled from "styled-components";

export const TabHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TabsHolder = styled.div`
  display: flex;
`;

export const Tabs = ({ selectedTab, onChange, children }) => {

    

  const tabs = children.map((child, index) => {
    const handleClick = (e) => {
      onChange(e, child.props.value);
    };

    return React.cloneElement(child, {
      active: index === selectedTab,
      onClick: handleClick,
    });
  });

  return (
    <TabHeaderContainer>
      <TabsHolder>{tabs}</TabsHolder>
    </TabHeaderContainer>
  );
};
