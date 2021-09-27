import React from "react";
import { Route } from "react-router-dom";
import Nav from "../Nav";
import NavButton from "../NavButton";

export const HomeNavRoute = ({ exact, path, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) => (
      <div className="relative min-h-screen flex">
        <Nav {...props} />
        <Component {...props} />
        <NavButton />
      </div>
    )}
  />
);
