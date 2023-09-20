import { RootState } from "@/stores/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Root } from "postcss";
import { Payload } from "recharts/types/component/DefaultLegendContent";
const initialState = {
  minesites: [],
  mineSite: {
    name: "",
    minerals: [],
    address: {
      province: "",
      district: "",
      sector: "",
      cell: "",
      village: "",
    },
    company: " ",
  },
  selectedMineSite: {},
};
const mineSitesSlice = createSlice({
  name: "minesites",
  initialState,
  reducers: {
    initializeMinesites: (
      state: RootState,
      action: PayloadAction<{ minesites: Array<any> }>
    ) => {
      if (action.payload.minesites == null)
        throw new Error("You can not initalize state with the null values");
      state.minesites = action.payload.minesites;
    },
    setSelectedMineSite: (
      state: RootState,
      action: PayloadAction<{ mineSite: Object }>
    ) => {
      if (action.payload.mineSite == null)
        throw new Error("You can not set the selected minesite to null");
      state.selectedMineSite = action.payload.mineSite;
    },
    createMineSite: (
      state: RootState,
      payload: PayloadAction<{
        name: string;
        minerals: string;
        province: string;
        district: string;
        sector: string;
        cell: string;
        village: string;
      }>
    ) => {
      state.mineSite.name = payload.payload.name;
      state.mineSite.minerals = [payload.payload.minerals];
      state.mineSite.address.province = payload.payload.province;
      state.mineSite.address.district = payload.payload.district;
      state.mineSite.address.sector = payload.payload.sector;
      state.mineSite.address.cell = payload.payload.cell;
      state.mineSite.address.village = payload.payload.village;
    },
  },
});
export const { initializeMinesites, setSelectedMineSite, createMineSite } =
  mineSitesSlice.actions;
export const mineSiteReducer = mineSitesSlice.reducer;
