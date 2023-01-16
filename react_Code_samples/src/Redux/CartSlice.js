import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify"

const initialState = {
  totalQuantity: localStorage.getItem("totalQuantity") ? parseInt(localStorage.getItem("totalQuantity")) : 0,
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
};

const CartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        let item = state.cartItems[itemIndex] 
        item["quantity"] = parseInt(item["quantity"])  + 1 
        state.cartItems[itemIndex] = item
        state.totalQuantity += 1
      } else {
        action.payload["quantity"] = 1;
        state.cartItems.push(action.payload);
        state.totalQuantity = state.totalQuantity + 1;
      }
      localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity))
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    removeFromCart(state,action){
        let itemIndex =state.cartItems.findIndex(
            (item) => item.id === action.payload.id
          );
        if(itemIndex >= 0){
            let cartItem = state.cartItems[itemIndex] 
            if(cartItem["quantity"] > 1){
                cartItem["quantity"] = parseInt(cartItem["quantity"])  - 1
                state.cartItems[itemIndex] = cartItem 
                
            }
            else{
                const nextCartItem = state.cartItems.filter((cartItem)=>
                cartItem.id !== action.payload.id)
                state.cartItems = nextCartItem
            }
            state.totalQuantity  -= 1;
            localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity))
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        }
        else{
            toast.error(`Item Don't exist`, { position: "bottom-right" })
        }
    }
  },
});

export const { addToCart,removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
