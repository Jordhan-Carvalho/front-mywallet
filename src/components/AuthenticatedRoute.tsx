import React, { ReactNode, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { userContext } from "../contexts/UserContext";

type AuthenticatedRouteProps = {
  children?: ReactNode;
  [x: string]: any;
};

export default function AuthenticatedRoute({
  children,
  ...rest
}: AuthenticatedRouteProps) {
  const { user }: any = useContext(userContext);
  console.log(user);
  return (
    <Route {...rest}>{user ? children : <Redirect to={`/login`} />}</Route>
  );
}
