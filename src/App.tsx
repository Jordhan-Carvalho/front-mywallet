import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import LoginPage from "./pages/LoginPage/LoginPage";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={LoginPage} />
        </Switch>
      </Router>
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
