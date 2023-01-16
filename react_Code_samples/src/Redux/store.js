import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import CartReducer from "./CartSlice";
export const store = configureStore({
  reducer: { counter: counterReducer, Cart: CartReducer },
});

export default store;
