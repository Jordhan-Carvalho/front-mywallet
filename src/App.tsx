import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UserProvider from "./contexts/UserContext";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import InputPage from "./pages/InputPage";
import LoginPage from "./pages/LoginPage/LoginPage";

export default function App() {
  return (
    <>
      <UserProvider>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <AuthenticatedRoute path="/input" component={InputPage} />
            <AuthenticatedRoute path="/" exact component={DashboardPage} />
          </Switch>
        </Router>
      </UserProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
:root {
  --darkPurple: #8C11BE;
  --lightPurple: #A328D6;
  --titleFont: 'Saira Stencil One', cursive;
  --generalFont: 'Raleway', sans-serif;
}

body {
  font-family: var(--generalFont);
  color: white;
}

#root {
  height: 100vh;
  width: 100%;
  background: var(--darkPurple);
}

`;
