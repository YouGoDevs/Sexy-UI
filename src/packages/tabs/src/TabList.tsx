import styled from "styled-components";
import React from 'react';


///// Wrapper for tab components inside Tabs**

const ListedTabs = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  gap: 70px;
`;

export const TabList: any = ({ children }: any) => {
  return (
    <ListedTabs>
      {children}
    </ListedTabs>
  );
};


