import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "./component/Box";
import { Container } from "react-dom";

function App() {
  const [number, setNumber] = useState(0);
  const [insertIncreaseNum, setInsertIncreaseNum] = useState(0);
  const [insertDecreaseNum, setInsertDecreaseNum] = useState(0);
  const [plusMinus, setPlusMinus] = useState("");
  let count = useSelector((state) => state.count);
  let id = useSelector((state) => state.id);
  // let password = useSelector((state) => state.password);
  const dispatch = useDispatch();
  // const login = () => {
  //   dispatch({ type: "LOGIN", payload: { id: "dohee", password: "123" } });
  // };
  const saveInputValue = (e) => {
    setNumber(e.target.value);
  };
  const counter = () => {
    setInsertIncreaseNum(number);
    dispatch({
      type: "INCREMENT",
      payload: { num: Number(insertIncreaseNum) },
    });
  };
  const decounter = (insertNum) => {
    setInsertDecreaseNum(number);
    dispatch({
      type: "DECREMENT",
      payload: { num: Number(insertDecreaseNum) },
    });
  };
  const reset = () => {
    setNumber("");
    setPlusMinus("");
    dispatch({ type: "RESET" });
  };
  return (
    <div className="container">
      <div>
        <h1>{count}</h1>
      </div>
      <div className="input-area">
        <input
          type="number"
          onChange={saveInputValue}
          placeholder="더하거나 뺼 숫자를 입력하세요"
          className="input-num"
        />
        {/* <div>위 숫자를 더하기 or 뺴기</div>
        <button onClick={increaseNum}>+</button>
        <button onClick={decreaseNum}>-</button> */}
      </div>
      <div>

        <button onClick={counter}>더하기</button>
        <button onClick={decounter}>빼기</button>
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
