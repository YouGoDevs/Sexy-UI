import { useState, useMemo} from "react";

export interface Store {
  selectedTab: number;
}

// useMemo to return cached results if the contents of internal variables don't change
export const useStore = () => {
  const [store, setStore] = useState<Store>({ selectedTab: 0 });
  const [content, setContent] = useState<any>();

  return useMemo(() => ({ store, setStore, content, setContent }), [
    store,
    setStore,
    content,
    setContent,
  ]);
};
