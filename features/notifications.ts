import { RootState } from "@/stores/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const initialState = {
    notifications:[]
}
const notificationSlice = createSlice({
    name:"notifications",
initialState,
    reducers:{
        getNotification:(state:RootState,action:PayloadAction<any>)=>{
            state.notifications = action.payload;
        }

    }
})
export const {getNotification} = notificationSlice.actions;
export const notificationReducer = notificationSlice.reducer;