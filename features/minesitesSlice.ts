import { RootState } from "@/stores/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Payload } from "recharts/types/component/DefaultLegendContent";
const initialState = {
    mineSites: [],
    selectedMineSite:{}
}
const mineSitesSlice = createSlice({
    name:"minesites",
    initialState,
    reducers:{
        initializeMinesites : (state:RootState, action:PayloadAction<{minesites:Array<any>}>) => {
            if(action.payload.minesites == null) throw new Error("You can not initalize state with the null values")
            state.minesites = action.payload.minesites
        },
        setSelectedMineSite: (state:RootState, action:PayloadAction<{mineSite:Object}>) => {
            if(action.payload.mineSite == null) throw new Error("You can not set the selected minesite to null")
            state.selectedMineSite = action.payload.mineSite;
        } 

    }
})
export const {initializeMinesites,setSelectedMineSite} = mineSitesSlice.actions;
export const mineSiteReducer = mineSitesSlice.reducer; 