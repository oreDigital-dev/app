import { useState } from "react";
import Button from "@/components/ui/button";
import Input from "@/components/units/createMinesiteInputs";
import { RootState } from "@/stores/store";
import Link from "next/link";
import { useRouter } from "next/router";
import { axios } from "@/services/axios";
<<<<<<< HEAD
import {
  stepOneEmployeeRegistration,
  stepTwoEmployeeRegistration,
} from "@/features/companyRegistration";
=======
import { stepOneEmployeeRegistration, stepTwoEmployeeRegistration } from "@/features/companyRegistration";
>>>>>>> ff93e57 (updates(): intergrated employee on company)
import { useDispatch, useSelector } from "react-redux";
import { stepTwoRegistration } from "@/features/companyRegistration";
const CompanyDetails = () => {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const companyEmployeeInfo = useSelector(
    (state: RootState) => state.companyRegistration.employee
  );
=======
  const companyEmployeeInfo = useSelector((state:RootState)=> state.companyRegistration.employee);
>>>>>>> ff93e57 (updates(): intergrated employee on company)
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [numberOfEmployees, setNumberOfEmployees] = useState(0);
  const [companyName, setCompanyName] = useState("");
  const [company, setCompany] = useState("");
  const [employeeType, setEmployeeType] = useState("");
  const formData = {
    email: email,
    phoneNumber: phoneNumber,
    numberOfEmployees: numberOfEmployees,
    companyName: companyName,
  };
<<<<<<< HEAD
  const employeeFormData = {
    company: company,
    employeeType: employeeType,
  };
=======
 const employeeFormData = {
  company: company,
  employeeType: employeeType,
 }
>>>>>>> ff93e57 (updates(): intergrated employee on company)
  const subCategory = useSelector(
    (state: RootState) => state.formCategories.subCategory
  );
  const router = useRouter();
<<<<<<< HEAD
  const handleProgression = async (subCategory: String) => {
    switch (subCategory) {
      case "Employee":
        dispatch(stepTwoEmployeeRegistration(employeeFormData));
        try {
          const res = await handleRegister();
          router.push("/verification");
        } catch (error) {
          console.log(error);
        }

=======
  const handleProgression = async(subCategory: String) => {
    switch (subCategory) {
      case "Employee":        
        dispatch(stepTwoEmployeeRegistration(employeeFormData))
        try{
          const res = await handleRegister();
          router.push("/verification");
         } catch(error) {
          console.log(error);
          
         }
        
>>>>>>> ff93e57 (updates(): intergrated employee on company)
        break;
      case "Admin":
        dispatch(stepTwoRegistration(formData));
        router.push("/auth/FinalDetails");
    }
  };
  const handleRegister = async () => {
    try {
      const requestBody = {
        companyEmployee: {
          firstName: companyEmployeeInfo.firstName,
          lastName: companyEmployeeInfo.lastName,
          email: companyEmployeeInfo.email,
          username: `${companyEmployeeInfo.firstName.substr(0, 1)}.${
            companyEmployeeInfo.secondName
          }`,
          myGender: companyEmployeeInfo.myGender,
          registrationKey: companyEmployeeInfo.registrationKey,
          national_id: companyEmployeeInfo.national_id,
          password: companyEmployeeInfo.password,
          phoneNumber: companyEmployeeInfo.phoneNumber,
          address: {
            province: companyEmployeeInfo.address.province,
            district: companyEmployeeInfo.address.district,
            sector: companyEmployeeInfo.address.sector,
            cell: companyEmployeeInfo.address.cell,
            village: companyEmployeeInfo.address.village,
          },
          employeeType: employeeFormData.employeeType,
          company: employeeFormData.company,
<<<<<<< HEAD
        },
      };
      const resp = await axios.post("/employees/create", requestBody);
      console.log(requestBody);
=======
        }
      };
      const resp = await axios.post("/employees/create",requestBody);
       console.log(requestBody);
       
>>>>>>> ff93e57 (updates(): intergrated employee on company)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="relative xl:w-[100vw] flex flex-col authBack2 bg-cover bg-transparent ">
      <div className=" rounded-xl p-6 z-40 bg-white justify-center w-[35%] mx-auto  my-auto space-y-8">
        <div className="flex justify-center ">
          <div className="flex items-center gap-4">
            {/* Step number round */}
            <div className="h-8 w-8 rounded-full bg-app flex items-center justify-center">
              <p className="font-bold text-xl text-white">2</p>
            </div>
            <p className="font-bold text-xl text-black">Company details</p>
          </div>
        </div>

        <div className="space-y-4">
          {subCategory == "Admin" && (
            <>
              <Input
                label={"Company name"}
                placeholder={"Sail-miners333"}
                type={"text"}
                state={companyName}
                setState={setCompanyName}
              />
              <Input
                label={"Company email"}
                placeholder={"JohnDoe@gmail.com"}
                type={"email"}
                state={email}
                setState={setEmail}
              />
              <Input
                label={"Employee number"}
                placeholder={"250"}
                type={"number"}
                min={0}
                state={numberOfEmployees}
                setState={setNumberOfEmployees}
              />
              <Input
                label={"Toll free"}
                placeholder={"8080"}
                type={"number"}
                state={phoneNumber}
                setState={setPhoneNumber}
              />
            </>
          )}
<<<<<<< HEAD
          {subCategory == "Employee" && (
=======
          {(subCategory == "Employee") && (
>>>>>>> ff93e57 (updates(): intergrated employee on company)
            <>
              <Input
                label={"Company name"}
                placeholder={"Sail-miners333"}
                type={"text"}
                state={company}
                setState={setCompany}
              />
              <Input
                label={"Employee Type"}
                placeholder={"Miner"}
                type={"text"}
                state={employeeType}
                setState={setEmployeeType}
              />
              {/* <Input
                label={"Location"}
                placeholder={"+250798486619"}
                type={"password"}
                state={""}
                setState={() => {}}
              /> */}
            </>
          )}
        </div>
        <div>
          <Button
            className="w-5/12 py-[14px] px-10 text-center bg-app text-white rounded-xl"
            onClick={() => handleProgression(subCategory)}
          >
            {subCategory == "Employee" ? "Register" : "Next"}
          </Button>
        </div>
      </div>
      <div className="w-full h-[100vh] bg-black-900/80 absolute z-20" />
    </div>
  );
};
export default CompanyDetails;
