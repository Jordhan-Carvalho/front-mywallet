import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { userContext } from "../contexts/UserContext";

export default function AuthenticatedRoute({ children, ...rest }: any) {
  const { user }: any = useContext(userContext);
  console.log(user);
  return (
    <Route {...rest}>{user ? children : <Redirect to={`/login`} />}</Route>
  );
}
