import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByAmount, increment, reset } from "./CounterSlice";

function CounterView() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter App</h1>
      <h3>Count :{count}</h3>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>

      <button
        onClick={() => {
          dispatch(increaseByAmount(10));
        }}
      >
        Increase by 10
      </button>
    </div>
  );
}

export default CounterView;
