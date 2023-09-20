import { RootState } from "@/stores/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const initialState = {
    admin:{
        firstName:"",
        lastName:"",
        email:"",
        username:"",
        myGender:"",
        registrationKey:"admin@oreDigital",
        national_id:"",
        password:"",
        phoneNumber:"",
        address:{
            province:"",
            district:"",
            sector:"",
            cell:"",
            village:""
        },
        employeeType:"Admin"
    }
}

export const rmbRegistrationSlice = createSlice({
    name:"rmbRegistration",
    initialState,
    reducers:{
        rmbStepOneRegistration:(state:RootState,payload:PayloadAction<{firstName:string,lastName:String,email:string,myGender:string,national_id:string,password:string,phoneNumber:string,province:string,district:string,sector:string,cell:string,village:string}>)=>{
state.admin.firstName = payload.payload.firstName;
state.admin.lastName = payload.payload.lastName;
state.admin.email = payload.payload.email;
state.admin.myGender = payload.payload.myGender;
state.admin.national_id = payload.payload.national_id;
state.admin.password= payload.payload.password;
state.admin.phoneNumber = payload.payload.phoneNumber;
state.admin.province = payload.payload.province;
state.admin.district = payload.payload.district;
state.admin.sector = payload.payload.sector;
state.admin.cell= payload.payload.cell;
state.admin.village = payload.payload.village;
        }
    }

})
export const {rmbStepOneRegistration} = rmbRegistrationSlice.actions;
export const rmbRegistrationReducer = rmbRegistrationSlice.reducer;