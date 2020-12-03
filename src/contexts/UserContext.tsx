import React, { createContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

// @ts-ignore
export const userContext = createContext();

export default function UserProvider({ children }: any) {
  const [user, setUser] = useLocalStorage("user", null);

  const value = {
    user,
    setUser,
  };

  return (
    <userContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
