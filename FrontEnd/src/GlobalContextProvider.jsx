import React from "react";
import GlobalContext from "./context/GlobalContext";
import { useCreateGlobalContextVar } from "./useCreateGlobalContext";

export function GlobalContextProvider({ children }) {
  const globalState = useCreateGlobalContextVar();

  return (
    <GlobalContext.Provider value={globalState}>
      {children}
    </GlobalContext.Provider>
  );
}
