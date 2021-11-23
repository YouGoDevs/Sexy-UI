import React, {useContext, useEffect} from 'react'
import { MyStore } from '../context/myStore';

export const TabContent:any = ({ children }: any) => {
  const localStore = useContext(MyStore);

  

  useEffect(() => {
    console.log(localStore.content)
  })

  return (
    <div>
        {localStore.content? <h1> {localStore.content.children} </h1>: <h1> Loading... </h1> }
    </div>
  )
}
