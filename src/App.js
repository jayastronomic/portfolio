import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./components/Landing";

import MyStory from "./components/MyStory";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

import {
  MyStoryNavRoute,
  ProjectsNavRoute,
  ResumeNavRoute,
} from "./components/NavRoutes/NavRoutes";

function App() {
  return (
    <Router>
      <Route exact path="/" render={(props) => <Landing {...props} />} />
      <MyStoryNavRoute exact path="/mystory" component={MyStory} />
      <ProjectsNavRoute exact path="/projects" component={Projects} />
      <ResumeNavRoute exact path="/resume" component={Resume} />
    </Router>
  );
}

export default App;
