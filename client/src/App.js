import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Saved from "./Pages/Saved";
import Search from "./Pages/Search";
import Home from "./Pages/Home";
import Nav from "./Components/Nav/Nav";
// const API_KEY = require("dotenv");
import Wrapper from "./Components/Wrapper/Wrapper";
import Footer from "./Components/Footer/Footer";
import StartPage from "./Pages/StartPage";
import ErrorPage from "./Pages/ErrorPage";
function App() {
  const [books, setBooks] = useState([]);
  const getAllBooks = async () => {
    try {
      //get data from the database
      const { data } = await axios.get("/api/books");
      setBooks(data);
      console.log(data);
    } catch (error) {
      console.log("error with getting data from backend to frontend:", error);
    }
  };
  useEffect(() => {
    // console.log("effect here");
    getAllBooks();
  }, []);
  return (
    <div className="App">
      <Wrapper>
        <Nav />
        <Router>
          <Switch>
            <Route path="/saved">
              <Saved books={books}/>
              </Route>
            <Route path="/search" component={Search} />
            <Route path="/home">
              <Home />
            </Route>
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
