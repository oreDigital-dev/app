import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { appPagesReducer } from "@/features/appPages";
import { mineSiteReducer } from "@/features/minesitesSlice";
import { formCategoriesReducer } from "@/features/formCategories";

export const store :any = configureStore({
    reducer:{
        appPages:appPagesReducer,
        mineSites:mineSiteReducer,
        formCategories:formCategoriesReducer

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch : () => AppDispatch = useDispatch

