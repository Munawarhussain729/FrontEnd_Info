import { createSlice } from "@reduxjs/toolkit"

const initialState= {
    count : 0
}

const counterSlice = createSlice({
    name:"counterSlice",
    initialState,
    reducers:{
        increment(state){
            state.count = state.count + 1
        },
        decrement(state){
            if(state.count >0){
                state.count = state.count - 1
            }
            else{
                alert("Count is already 0")
            }
        }
    }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer