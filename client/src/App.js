import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [state, setState]  = useState({ msg: "Sup World"})
  const getRequest = async () => {
    try {
      const {data} = await axios.get("/test")
      // console.log(data);
      setState(data)
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    // console.log("useEffect working");
    getRequest()
  }, []);

  return (
    <div className="App">
      <h1>{state.msg}</h1>
    </div>
  );
}

export default App;
