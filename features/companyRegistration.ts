import { RootState } from "@/stores/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const initialState = {
    admin: {
        companyAdmin: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            username:"",
            myGender: "",
            phoneNumber: "",
            national_id: "",
            employeeType:"Admin",
            registrationKey:"admin@oreDigital",
            address:{
                province:"",
                district:"",
                sector:"",
                cell:"",
                village:""
            }
        },
        company:{
            email:"",
            phoneNumber:"",
            numberOfEmployees:0,
            licenseNumber:0,
            minerals:[],
            ownership:"",
            productionCapacity:"",
            companyName:"",
            address:{
                province:"",
                district:"",
                sector:"",
                village:""
            }
        }
    },
    employee: {}
}
const rmbRegistrationSlice = createSlice({
    name: "companyRegistrationRegistration",
    initialState,
    reducers: {
        steponeRegistration: (state: RootState, payload: PayloadAction<{ firstName: string, lastName: string, email: string, password: string, phoneNumber: string, myGender: string,national_id:string,province:String,district:string,sector:string,cell:string,village:string }>) => {
            state.admin.companyAdmin.firstName = payload.payload.firstName;
            state.admin.companyAdmin.lastName = payload.payload.lastName;
            state.admin.companyAdmin.email = payload.payload.email;
            state.admin.companyAdmin.password = payload.payload.password;
            state.admin.companyAdmin.phoneNumber = payload.payload.phoneNumber;
            state.admin.companyAdmin.myGender = payload.payload.myGender;
            state.admin.companyAdmin.national_id = payload.payload.national_id;
            state.admin.companyAdmin.address.province = payload.payload.province;
            state.admin.companyAdmin.address.district = payload.payload.district;
            state.admin.companyAdmin.address.sector = payload.payload.sector;
            state.admin.companyAdmin.address.cell = payload.payload.cell;
            state.admin.companyAdmin.address.village = payload.payload.village;
            
          
        },
        stepTwoRegistration: (state: RootState, payload: PayloadAction<{ email: string, phoneNumber: string, numberOfEmployees: number, companyName: string }>) => {
            state.admin.company.email = payload.payload.email;
            state.admin.company.phoneNumber = payload.payload.phoneNumber;
            state.admin.company.numberOfEmployees = payload.payload.numberOfEmployees;
            state.admin.company.companyName = payload.payload.companyName;            
        },
        stepThreeRegistration:(state:RootState,payload:PayloadAction<{licenseNumber:string,minerals:string|string[],ownership:string,productionCapacity:number,province:string,district:string,sector:string,cell:string,village:string}>)=>{
            state.admin.company.licenseNumber = payload.payload.licenseNumber;
            state.admin.company.minerals = payload.payload.minerals;
            state.admin.company.ownership = payload.payload.ownership;
            state.admin.company.productionCapacity = payload.payload.productionCapacity;
            state.admin.company.address.province = payload.payload.province;
            state.admin.company.address.district = payload.payload.district;
            state.admin.company.address.sector = payload.payload.sector;
            state.admin.company.address.cell = payload.payload.cell;
            state.admin.company.address.village = payload.payload.village;
        }
    }
})
export const { steponeRegistration,stepTwoRegistration,stepThreeRegistration } = rmbRegistrationSlice.actions;
export const stepOneReducer = rmbRegistrationSlice.reducer;