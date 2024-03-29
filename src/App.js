import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "./component/Box";

function App() {
  let count = useSelector((state) => state.count);
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);
  const dispatch = useDispatch();
  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "dohee", password: "123" } });
  };

  const counter = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };
  return (
    <div>
      <div>{id}, {password}</div>
      <button onClick={counter}>click</button>
      <button onClick={login}>Login</button>
      <div>{count}</div>
      <Box />
    </div>
  );
}

export default App;
