import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "./App.css";
import axios from "axios";
import Saved from './Pages/Saved'
import Search from "./Pages/Search"
import Books from "./Pages/Books"
function App() {
  const getAll = async () => {
    const { data } = await axios.get("/book")
    console.log(data);
  }
  useEffect(() => {
    // console.log("effect here");
    getAll()
  }, [])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/saved" component={Saved} />
          <Route path="/search" component={Search}/>
          <Route path="/books" component={Books}/>
          <Route path="/" component={Books}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
