import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { appPagesReducer } from "@/features/appPages";
import { mineSiteReducer } from "@/features/minesitesSlice";

export const store :any = configureStore({
    reducer:{
        appPages:appPagesReducer,
        mineSites:mineSiteReducer

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch : () => AppDispatch = useDispatch

