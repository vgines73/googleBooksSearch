import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Saved from "./Pages/Saved";
import Search from "./Pages/Search";
import Home from "./Pages/Home";
import Nav from "./Components/Nav/Nav";
// const API_KEY = require("dotenv");
import Wrapper from './Components/Wrapper/Wrapper'
import Footer from "./Components/Footer/Footer";
function App() {
  // const [books, setBooks] = useState([])
  const getAll = async () => {
    const { data } = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=stephen-king"
    );
    console.log(data.items);
  };
  useEffect(() => {
    // console.log("effect here");
    getAll();
  }, []);
  return (
    <div className="App">
      <Wrapper>
        <Nav />
        <Router>
          <Switch>
            <Route path="/saved" component={Saved} />
            <Route path="/search" component={Search} />
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
