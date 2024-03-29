import { act } from "react-dom/test-utils";

let initialState = {
  count: 0,
  // id :"", 
  // password:""
};

function reducer(state = initialState, action) {
  console.log("action", action);
  if (action.type == "INCREMENT") {
    return { ...state, count: state.count + action.payload.num};
  }else if(action.type == "DECREMENT"){
    return { ...state, count: state.count - action.payload.num};
  }else if(action.type == "RESET"){
    return { ...state, count: 0};
  }
  // }else if (action.type == "LOGIN"){
  //   return{...state, id:action.payload.id, password:action.payload.password}
  //}
  return { ...state };
  // state의 나머지 값은 유지 하되, state에만 1 더하기
}

export default reducer;
