import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Saved from "./Pages/Saved";
import Search from "./Pages/Search";

import Nav from "./Components/Nav/Nav";

import Wrapper from "./Components/Wrapper/Wrapper";
import Footer from "./Components/Footer/Footer";
import StartPage from "./Pages/StartPage";
import ErrorPage from "./Pages/ErrorPage";
function App() {

  return (
    <div className="App">
      <Wrapper>
        <Nav />
        <Router>
          <Switch>
            <Route path="/saved">
              <Saved />
            </Route>
            <Route path="/search" component={Search} />
            <Route exact path="/" component={StartPage} />
            <Route path="/" component={ErrorPage} />
          </Switch>
        </Router>
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
