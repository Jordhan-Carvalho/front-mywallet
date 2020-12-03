import React, { createContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

// @ts-ignore
export const userContext = createContext();

export default function UserProvider({ children }: any) {
  const [user, setUser] = useLocalStorage("user", null);

  const logout = async () => {
    try {
      // @ts-ignore
      setUser(null);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        logout,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
