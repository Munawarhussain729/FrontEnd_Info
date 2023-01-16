import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Redux/CounterSlice";
import "../App.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const SimpleRedux = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="App-header">
        <h2>It show simple use of Redux toolkit using Count </h2>
        <br />
        <h3>
          Count Value is: <span style={{ color: "blue" }}>{count}</span>
        </h3>
        <br />
        <div style={{ display: "flex" }}>
          <button className="button" onClick={() => dispatch(increment())}>
            increment
          </button>
          <button className="button" onClick={() => dispatch(decrement())}>
            Decrement
          </button>
        </div>
        <Link to="/cart-mode">
          <Button>Cart Redux</Button>
        </Link>
      </div>
    </div>
  );
};

export default SimpleRedux;
