import { useState } from "react";
import { EmployeeFields } from "@/@types/interfaces";
import Button from "@/components/ui/button";
import Input from "@/components/units/createMinesiteInputs";
import Link from "next/link";
import { useRouter } from "next/router";
import { stepOneEmployeeRegistration } from "@/features/companyRegistration";
import { useDispatch } from "react-redux";
import { axios } from "@/services/axios";
const {Provinces,Districts,Sectors,Cells,Villages} = require('rwanda');
export interface EmployeeFormProps {
  category: string;
  subCategory: string;
  formHandler?: (formData: any) => void | any;
}

const EmployeeForm = (props: EmployeeFormProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [national_id, setNational_id] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedCell, setSelectedCell] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");
  const [myGender, setMygender] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    username: `${firstName.substring(0, 1)}.${lastName}`,
    myGender: myGender,
    registrationKey: "anykey",
    national_id: national_id,
    password: password,
    phoneNumber: phoneNumber,
    address: {
      province: selectedProvince,
      district: selectedDistrict,
      sector: selectedSector,
      cell: selectedCell,
      village: selectedVillage,
    },
    employeeType: "Employee"
  };
  const handleProgression = async(category: String) => {
    switch (category) {
      case "RMB":
        try {
          const res = await axios.post("/rmb/create/rmb-employee", formData);
          localStorage.setItem("email", JSON.stringify(res.data.data.email));
          router.push("/verification");
        } catch (err) {
          console.log(err);
        }
        break;
      case "Company":
        dispatch(stepOneEmployeeRegistration(formData));
        return router.push("/auth/companyDetails");
      case "Rescue Team":
        return router.push("/auth/ProfessionDetails");
      default:
        router.push("/auth");
    }
  };
  const companies: String[] = ["RMB", "RMC", "Kigali Miners", "Zuba Miners"];
  return (
    <div className={` w-[90%] mx-auto h-[50%] space-y-2`}>
      <div className="flex justify-center ">
        <div className="flex items-center gap-4">
          {/* Step number round */}
          <div className="h-6 w-6 rounded-full bg-app flex items-center justify-center">
            <p className="font-bold text-2xl text-white">1</p>
          </div>
          <p className="font-bold text-2xl text-black">Person details</p>
        </div>
      </div>
      <div className="mx-auto">
        <p className="text-center">
          Don&apos;t have a workspace?{" "}
          <span className="text-app">
            <Link href={"/"}>Request One</Link>
          </span>
        </p>
      </div>
      <form onSubmit={props.formHandler} className="space-y-2">
        <div className="flex gap-2">
          <div className="basis-1/2">
            <Input
              label={"First name"}
              placeholder={"John"}
              type={"text"}
              state={firstName}
              setState={setFirstName}
            />
          </div>
          <div className="basis-1/2">
            <Input
              label={"Last name"}
              placeholder={"Doe"}
              type={"text"}
              state={lastName}
              setState={setLastName}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="basis-1/2">
            <Input
              label={"Email address"}
              placeholder={"JohnDoe@gmail.com"}
              type={"email"}
              state={email}
              setState={setEmail}
            />
          </div>
          <div className="basis-1/2">
            <Input
              label={"Password"}
              placeholder={"......."}
              type={"password"}
              state={password}
              setState={setPassword}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="basis-1/2">
            <Input
              label={"National Id"}
              placeholder={"1 1883 3434 34343"}
              type={"text"}
              state={national_id}
              setState={setNational_id}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-3">Gender</label>
            <div className="flex gap-12">
              <div className="flex items-center gap-10">
                <p>Male</p>
                <input
                  type="radio"
                  value={"Male"}
                  name="gender"
                  checked={formData.myGender == "Male"}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setMygender(e.target.value)
                  }
                />
              </div>
              <div className="flex items-center gap-10">
                <p>Female</p>
                <input
                  checked={formData.myGender == "Female"}
                  type="radio"
                  value={"Female"}
                  name="gender"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setMygender(e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="basis-1/2">
            <Input
              label={"Phone Number"}
              placeholder={"+250798486619"}
              type={"text"}
              state={phoneNumber}
              setState={setPhoneNumber}
            />
          </div>
          <div className="flex gap-2">
          <div className="basis-1/2">
            <select
              value={selectedProvince}
              onChange={(e) => {
                setSelectedProvince(e.target.value);
                setSelectedDistrict("");
                setSelectedSector("");
                setSelectedCell("");
                setSelectedVillage("");
              }}
              className=" border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md text-[black]"
            >
              <option value="">Select Province</option>
              {Provinces().map((province: string, index: any) => (
                <option key={index} value={province}>
                  {province}
                </option>
              ))}
            </select>
          </div>
          <div className="basis-1/2">
            <select
              value={selectedDistrict}
              onChange={(e) => {
                setSelectedDistrict(e.target.value);
                setSelectedSector("");
              }}
              disabled={!selectedProvince}
              className=" border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md text-[black]"
            >
              <option value="">Select District</option>
              {Districts(selectedProvince).map(
                (district: string, index: any) => (
                  <option key={index} value={district}>
                    {district}
                  </option>
                )
              )}
            </select>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="basis-1/2">
            <select
              value={selectedSector}
              onChange={(e) => {
                setSelectedSector(e.target.value);
                setSelectedCell('"');
              }}
              disabled={!selectedDistrict}
              className=" border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md text-[black]"
            >
              <option value="">Select Sector</option>
              {Sectors(selectedProvince, selectedDistrict)?.map(
                (sector: string, index: any) => (
                  <option key={index} value={sector}>
                    {sector}
                  </option>
                )
              )}
            </select>
          </div>

          </div>
          <div className="basis-1/2">
            <select
            value={selectedCell}
            onChange={(e) => {
              setSelectedCell(e.target.value);
              setSelectedVillage("");
            }}
            disabled={!selectedSector}
            className=" border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md text-[black]"
            >
            <option value="">Select Cell</option>
            {Cells(selectedProvince,selectedDistrict,selectedSector)?.map((cell: string, index: any) => (
              <option key={index} value={cell}>
                {cell}
              </option>
            ))}
            
            </select>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="basis-1/2">
          <select
            value={selectedVillage}
            onChange={(e) => setSelectedVillage(e.target.value)}
            disabled={!selectedCell}
            className=" border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md text-[black]"
            >
            <option value="">Select Village</option>
            {Villages(selectedProvince,selectedDistrict,selectedSector,selectedCell)?.map((village: string, index: any) => (
              <option key={index} value={village}>
                {village}
              </option>
            ))}
            
            </select>
          </div>
          </div>
      </form>
      <div>
        <Button
          className="w-5/12 py-[14px] px-10 text-center bg-app text-white rounded-xl"
          onClick={() => handleProgression(props.category)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
export default EmployeeForm;
