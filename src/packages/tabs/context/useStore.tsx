import { useState } from "react";

export const useStore = () => {
  const [store, setStore] = useState<any>({});
  const [content, setContent] = useState<any>();

  return { store, setStore, content, setContent };
};
