import { RootState } from "@/stores/store"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
    RescueTeamAdmin: {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        myGender: "",
        registrationKey: "admin@oreDigital",
        national_id: "",
        password: "",
        phoneNumber: "",
        address: {
            province: "",
            district: "",
            sector: "",
            cell: "",
            village: ""
        },
        employeeType: "admin"
    },
    rescueTeam: {
        name: "",
        email: "",
        phoneNumber: "",
        address: {
            province: "",
            district: "",
            sector: "",
            cell: "",
            village: ""
        },
        rescueTeamCategory: ""
    }

}
const rescueTeamSlice = createSlice({
    name:"rescueTeamRegistration",
    initialState,
    reducers:{
        stepOneRegistration:(state:RootState,payload:PayloadAction<{firstName: string, lastName: string, email: string, password: string, phoneNumber: string, myGender: string,national_id:string,province:String,district:string,sector:string,cell:string,village:string}>)=>{
            state.RescueTeamAdmin.firstName = payload.payload.firstName;
            state.RescueTeamAdmin.lastName = payload.payload.lastName;
            state.RescueTeamAdmin.email = payload.payload.email;
            state.RescueTeamAdmin.username = `${payload.payload.firstName.substring(0,1)}.${payload.payload.lastName}`;
            state.RescueTeamAdmin.myGender = payload.payload.myGender;
            state.RescueTeamAdmin.national_id = payload.payload.national_id;
            state.RescueTeamAdmin.password = payload.payload.password;
            state.RescueTeamAdmin.phoneNumber = payload.payload.phoneNumber;
            state.RescueTeamAdmin.address.province = payload.payload.province;
            state.RescueTeamAdmin.address.district = payload.payload.district;
            state.RescueTeamAdmin.address.sector = payload.payload.sector;
            state.RescueTeamAdmin.address.cell = payload.payload.cell;
            state.RescueTeamAdmin.address.village = payload.payload.village;
        },
        stepTwoRegistration:(state:RootState,payload:PayloadAction<{name:string,phoneNumber:string,email:string,rescueTeamCategory:string,province:String,district:string,sector:string,cell:string,village:string}>)=>{
            state.rescueTeam.address.province = payload.payload.province;
            state.rescueTeam.address.district = payload.payload.district;
            state.rescueTeam.address.sector = payload.payload.sector;
            state.rescueTeam.address.cell = payload.payload.cell;
            state.rescueTeam.address.village = payload.payload.village;
            state.rescueTeam.name = payload.payload.name;
            state.rescueTeam.email = payload.payload.email;
            state.rescueTeam.phoneNumber = payload.payload.phoneNumber;
            state.rescueTeam.rescueTeamCategory = payload.payload.rescueTeamCategory;
        }
    }
})
export const {stepOneRegistration,stepTwoRegistration} = rescueTeamSlice.actions;
export const rescueTeamReducer = rescueTeamSlice.reducer;