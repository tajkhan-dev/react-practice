import React, { useReducer } from "react";
// functionality with useReducer hook
function reducer(state, action) {
  console.log(state.count);
  // switch(action.type){
  //     case "increment": return {count:state.count + 1};
  //      case "decrement":return  {count:state.count - 1};
  //     default:return {count:state.count};
  // }
  if (action.type === "increment" && state.count < 10) {
    return { count: state.count + 1 };
  } else if (action.type === "decrement" && state.count > 0) {
    return { count: state.count - 1 };
  } else {
    return { count: state.count };
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });
// functionality with useStat
  //   function add(){
  //     if(count<10){
  //         setCount(count+1)
  //     }
  //   }
//   function subtract(){
  //     if(count>0){
//        setCount(count-1)
  //     }
  //   }

  return (
    <>
      <button  onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <div>{state.count}</div>
    </>
  );
};

export default Counter;
