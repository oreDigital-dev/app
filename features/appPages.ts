import { RootState } from "@/stores/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Payload } from "recharts/types/component/DefaultLegendContent";

const initialState: any = {
  loggedInSuccessfully: false,
  isCreateMineSiteVisible: false,
  isCreateEmployeeVisible: false,
  isCompanyDetailsVisible: false,
  isNotificationPanelVisible: false,
  isProfilePanelVisibile: false,
  welcomeMessage: "",
  isUpdateMineSiteVisible: false,
  currentCardTitle: "",
  currentIndex: 0,
  systemAdminToken: "",
  companyAdminToken: "",
  roles: [],
  userError: ''
};

const appPagesSlice = createSlice({
  name: "appPages",
  initialState,
  reducers: {
    setLoggedInSuccessfully: (
      state: RootState,
      action: PayloadAction<{ type: boolean }>
    ) => {
      if (action.payload.type) {
        state.loggedInSuccessfully = true;
      } else {
        state.loggedInSuccessfully = false;
      }
    },
    setCreateMineSiteVisibility: (
      state: RootState,
      action: PayloadAction<{ type: String }>
    ) => {
      if (action.payload.type.toString() == "close") {
        state.isCreateMineSiteVisible = false;
      } else if (action.payload.type.toString() == "open") {
        state.isCreateMineSiteVisible = true;
      } else {
        throw new Error("Please provide the valid action type");
      }
    },
    setCreateEmployeeVisibility: (
      state: RootState,
      action: PayloadAction<{ type: String }>
    ) => {
      if (action.payload.type.toString() == "close") {
        state.isCreateEmployeeVisible = false;
      } else if (action.payload.type.toString() == "open") {
        state.isCreateEmployeeVisible = true;
      } else {
        throw new Error("Please provide the valid action type");
      }
    },
    setNotificationPanelVisibility: (
      state: RootState,
      action: PayloadAction<{ type: String }>
    ) => {
      if (action.payload.type.toString() == "close") {
        state.isNotificationPanelVisible = false;
      } else if (action.payload.type.toString() == "open") {
        state.isNotificationPanelVisible = true;
      } else {
        throw new Error("Please provide the valid action type");
      }
    },
    setProfilePanelVisibility: (
      state: RootState,
      action: PayloadAction<{ type: String }>
    ) => {
      if (action.payload.type.toString() == "close") {
        state.isProfilePanelVisibile = false;
      } else if (action.payload.type.toString() == "open") {
        state.isProfilePanelVisibile = true;
      } else {
        throw new Error("Please provide the valid action type");
      }
    },
    setCompanyDetailsVisibility: (state: RootState) => {
      state.isCompanyDetailsVisible = !state.isCompanyDetailsVisible;
    },
    setWelcomeMessage: (
      state: RootState,
      action: PayloadAction<{ message: String }>
    ) => {
      state.welcomeMessage = action.payload.message;
    },
    setCurrentCardTitle: (state: RootState, action: PayloadAction<string>) => {
      state.currentCardTitle = action.payload;
    },
    setCurrentIndex: (state: RootState, action: PayloadAction<number>) => {
      state.currentIndex = action.payload;
    },
    setUpdateMineSiteVisibility: (
      state: RootState,
      action: PayloadAction<{ type: String }>
    ) => {
      if (action.payload.type.toString() == "close") {
        state.isUpdateMineSiteVisible = false;
      } else if (action.payload.type.toString() == "open") {
        state.isUpdateMineSiteVisible = true;
      } else {
        throw new Error("Please provide the valid action type");
      }
    },
    setAdminLoggedIn: (state: RootState, action: PayloadAction<string>) => {
      state.systemAdminToken = action.payload;
    },
    setCompanyAdminLoggedIn: (
      state: RootState,
      action: PayloadAction<string>
    ) => {
      state.companyAdminToken = action.payload;
    },

    setRoles: (state: RootState, action: PayloadAction<String[]>) => {
      state.roles = action.payload;
    },
    setPageError: (state: RootState, action: PayloadAction<String>) => {
      state.userError = action.payload;
    }
  },
});

export const {
  setLoggedInSuccessfully,
  setUpdateMineSiteVisibility,
  setCreateMineSiteVisibility,
  setCreateEmployeeVisibility,
  setWelcomeMessage,
  setNotificationPanelVisibility,
  setProfilePanelVisibility,
  setCompanyDetailsVisibility,
  setCurrentCardTitle,
  setCurrentIndex,
  setAdminLoggedIn,
  setCompanyAdminLoggedIn,
  setRoles,
  setPageError
} = appPagesSlice.actions;
export const appPagesReducer = appPagesSlice.reducer;
