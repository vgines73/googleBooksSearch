import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Saved from "./Pages/Saved";
import Search from "./Pages/Search";
import Books from "./Pages/Books";
import Nav from "./Components/Nav/Nav";
const API_KEY = require("dotenv");
function App() {
  // const [books, setBooks] = useState([])
  const getAll = async () => {
    const { data } = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=search+terms" + API_KEY
    );
    console.log(data);
  };
  useEffect(() => {
    // console.log("effect here");
    getAll();
  }, []);
  return (
    <div className="App">
      <Nav />
      <Router>
        <Switch>
          <Route path="/saved" component={Saved} />
          <Route path="/search" component={Search} />
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/" component={Books} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
