import React from "react";
import { Route } from "react-router-dom";
import Nav from "../Nav";
import NavButton from "../NavButton";

export const MyStoryNavRoute = ({ exact, path, component: Component }) => (
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

export const ProjectsNavRoute = ({ exact, path, component: Component }) => (
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

export const ResumeNavRoute = ({ exact, path, component: Component }) => (
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
