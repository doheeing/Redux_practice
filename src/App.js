import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "./component/Box";
import { Container } from "react-dom";

function App() {
  let count = useSelector((state) => state.count);
  let id = useSelector((state) => state.id);
  // let password = useSelector((state) => state.password);
  const dispatch = useDispatch();
  // const login = () => {
  //   dispatch({ type: "LOGIN", payload: { id: "dohee", password: "123" } });
  // };

  const counter = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };
  const decounter = () => {
    dispatch({ type: "DECREMENT", payload: { num: 1 } });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  return (
    <div className="container">
      <div>
        <h1>{count}</h1>
      </div>
      <div>
        <button onClick={counter}>increase</button>
        <button onClick={decounter}>decrease</button>
        <button onClick={reset}>reset</button>
        {/* <button onClick={login}>Login</button> */}
      </div>

      {/* <div>
        {id}, {password}
      </div> */}
      {/* <Box /> */}
    </div>
  );
}

export default App;
