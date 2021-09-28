import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./components/Landing";
import Home from "./components/Home";
import MyStory from "./components/MyStory";

import {
  HomeNavRoute,
  MyStoryNavRoute,
} from "./components/NavRoutes/NavRoutes";

function App() {
  return (
    <Router>
      <Route exact path="/" render={(props) => <Landing {...props} />} />
      <HomeNavRoute exact path="/home" component={Home} />
      <MyStoryNavRoute exact path="/mystory" component={MyStory} />
    </Router>
  );
}

export default App;
