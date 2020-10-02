import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

import { NavBar, Footer, HeroNotLogin, Loading, PrivateRoute } from "./components";
import { Home, Profile } from "./views";

import "./app.css";

const App = () => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    isAuthenticated ? (
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <PrivateRoute path="/profile" component={Profile} />
          </Switch>
        </Container>
        <Footer />
      </div>
    ) : <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <HeroNotLogin />
        </Container>
        <Footer />
  </div>
  );
};

export default App;
