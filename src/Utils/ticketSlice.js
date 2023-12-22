import { createSlice } from "@reduxjs/toolkit";

const ticketSlice = createSlice({

    name:"tickets",
    initialState:{
        items:[],
    },
    reducers:{
        addTicket: (state,action)=>{
            state.items.push(action.payload);
        },
    },

});

export const {addTicket} = ticketSlice.actions;
export default ticketSlice.reducer;