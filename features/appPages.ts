import { RootState } from "@/stores/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Payload } from "recharts/types/component/DefaultLegendContent";


const initialState : any = {
   loggedInSuccessfully:false,
   isCreateMineSiteVisible:false,
   isNotificationPanelVisible:false,
   isProfilePanelVisibile:false,
   welcomeMessage:"",
   isUpdateMineSiteVisible:false
}

const appPagesSlice = createSlice({
    name:"appPages",
    initialState,
    reducers:{
        setLoggedInSuccessfully : (state:RootState, action:PayloadAction<{type:boolean}>) =>{
            if(action.payload.type){
                state.loggedInSuccessfully = true
            }else{
                state.loggedInSuccessfully = false
            }
        },
        setCreateMineSiteVisibility: (state:RootState, action:PayloadAction<{type:String}>) => {
            if(action.payload.type.toString() == "close"){
                state.isCreateMineSiteVisible = false;
            }else if(action.payload.type.toString() == "open"){
                state.isCreateMineSiteVisible = true
            }else{
                throw new Error("Please provide the valid action type")
            }
        },
        setNotificationPanelVisibility: (state:RootState, action:PayloadAction<{type:String}>) => {
            if(action.payload.type.toString() == "close"){
                state.isNotificationPanelVisible = false;
            }else if(action.payload.type.toString() == "open"){
                state.isNotificationPanelVisible = true
            }else{
                throw new Error("Please provide the valid action type")
            }
        },
        setProfilePanelVisibility: (state:RootState, action:PayloadAction<{type:String}>) =>{
            if(action.payload.type.toString() == "close"){
                state.isProfilePanelVisibile = false;
            }else if(action.payload.type.toString() == "open"){
                state.isProfilePanelVisibile = true
            }else{
                throw new Error("Please provide the valid action type")
            }
        },
        setWelcomeMessage : (state:RootState, action:PayloadAction<{message:String}>) => {
           state.welcomeMessage = action.payload.message
        },
        setUpdateMineSiteVisibility: (state:RootState, action:PayloadAction<{type:String}>) => {
            if(action.payload.type.toString() == "close"){
                state.isUpdateMineSiteVisible = false;
            }else if(action.payload.type.toString() == "open"){
                state.isUpdateMineSiteVisible = true
            }else{
                throw new Error("Please provide the valid action type")
            }
        },
         
        
    }
})

export const {setLoggedInSuccessfully, setUpdateMineSiteVisibility, setCreateMineSiteVisibility, setWelcomeMessage, setNotificationPanelVisibility, setProfilePanelVisibility} = appPagesSlice.actions;
export const appPagesReducer = appPagesSlice.reducer