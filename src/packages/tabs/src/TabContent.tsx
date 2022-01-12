import { useContext, useEffect } from "react";
import { MyStore } from "../context/myStore";

/*
  This component displays content received from the context store
  The content received is updated by clicking on any tab instance
*/

export const TabContent: any = ({ children }: any) => {
  const localStore = useContext(MyStore);

  useEffect(() => {
    console.log(localStore.content);
  });

  return (
    // check if store content exists, then display the children property

    <div>
      {localStore.content ? (
        <h1> {localStore.content.children} </h1>
      ) : (
        <h1> Loading... </h1>
      )}
    </div>
  );
};
