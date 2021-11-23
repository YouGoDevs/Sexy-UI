import React from 'react';
import styled from 'styled-components';


const Panel = styled.div`
    display: flex;
    flex-direction: row;

`

export const TabPanels:any = ({children}:any) => {
  return (
    <Panel>
      {children}
    </Panel>
  )
}
