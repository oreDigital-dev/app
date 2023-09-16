import { RootState } from "@/stores/store";
import { PayloadAction,createSlice } from "@reduxjs/toolkit";
const initialState = {
    category:"RMB",
    subCategory:"Admin"
};
const formCategoriesSlice = createSlice({
    name:"formCategories",
    initialState,
    reducers:{
        setCategory:(state:RootState,action:PayloadAction<string>)=>{
state.category = action.payload;
        },
        setSubcategory:(state:RootState,action:PayloadAction<string>)=>{
        state.subCategory = action.payload;
        }
    }
})
export const {setCategory,setSubcategory}= formCategoriesSlice.actions;
export const formCategoriesReducer = formCategoriesSlice.reducer;