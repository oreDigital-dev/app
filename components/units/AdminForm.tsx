import { useRouter } from "next/router";
import Button from "@/components/ui/button";
import Input from "@/components/units/createMinesiteInputs";
import { useDispatch } from "react-redux";
import { steponeRegistration } from "@/features/companyRegistration";
import { useState } from "react";
import { axios } from "@/services/axios";
import Loader from "../ui/loader";
import Input2 from "./input2";
import { rescueTeamsCategories } from "@/utils/dataAssets";
const { Provinces, Districts, Sectors, Cells, Villages } = require("rwanda");
import { stepOneRegistration } from "@/features/rescueteamRegistration";
const AdminForm = ({ category }: { category: string }) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [national_id, setNational_id] = useState("");
  const [myGender, setMygender] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedCell, setSelectedCell] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");
  const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    phoneNumber: phoneNumber,
    myGender: myGender,
    national_id: national_id,
    province: selectedProvince,
    district: selectedDistrict,
    sector: selectedSector,
    cell: selectedCell,
    village: selectedVillage,
  };
  const rescueTeamData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    phoneNumber: phoneNumber,
    myGender: myGender,
    national_id: national_id,
    province: selectedProvince,
    district: selectedDistrict,
    sector: selectedSector,
    cell: selectedCell,
    village: selectedVillage,
  };
  const rmbFormdata = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    username: `${firstName.substring(0, 1)}.${lastName}`,
    myGender: myGender,
    registrationKey: "admin@oreDigital",
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
    employeeType: "Admin",
  };

  const handleRmbAdminRegistration = async (formData: any) => {
    try {
      setIsLoading(true);
      setError(false);
      if (
        rmbFormdata.address.village ||
        rmbFormdata.address.cell == "" ||
        rmbFormdata.address.sector ||
        rmbFormdata.address.district == "" ||
        rmbFormdata.address.province == "" ||
        rmbFormdata.email == "" ||
        rmbFormdata.employeeType == "" ||
        rmbFormdata.firstName == "" ||
        rmbFormdata.lastName == "" ||
        rmbFormdata.myGender == "" ||
        rmbFormdata.national_id == "" ||
        rmbFormdata.password == "" ||
        rmbFormdata.phoneNumber == "" ||
        rmbFormdata.registrationKey == ""
      ) {
        setError(true);
        return;
      }
      const res = await axios.post("/rmb/create/rmb-employee", formData);
      localStorage.setItem("email", JSON.stringify(res.data.data.email));
      router.push("/verification");
    } catch (err) {
      console.error(err);
    }
  };
  const handleCompanyAdminRegistration = (formData: any) => {
    dispatch(steponeRegistration(formData));
    router.push("/auth/companyDetails");
  };
  const handleRescueTeamRegistration = () => {
    dispatch(stepOneRegistration(rescueTeamData));
    router.push("/auth/ProfessionDetails");
  };

  // const rmbRoles: string[] = [
  //   "RMB Admin",
  //   "RMB Employee",
  //   "Company admin",
  //   "Company employee",
  //   "Rescue team",
  // ];
  // const rescueTeamRoles: String[] = ["Red Cross", "RNP", "RDF"];
  return (
    <div className=" w-[90%] mx-auto space-y-2">
      <div className="flex justify-center ">
        <div className="flex items-center gap-4">
          {/* Step number round */}
          <div className="h-8 w-8 rounded-full bg-app flex items-center justify-center">
            <p className="font-bold text-xl text-white">1</p>
          </div>
          <p className="font-bold text-xl text-black">Person details</p>
        </div>
      </div>
      <div className="space-y-2">
        {error && (
          <p className="text-lg text-red-500 text-center">
            Please Fill all fields
          </p>
        )}
        <div className="flex gap-2">
          <div className="basis-1/2">
            <Input
              label={"Firt Name"}
              placeholder={"John"}
              type={"text"}
              setState={setFirstName}
              state={firstName}
            />
          </div>
          <div className="basis-1/2">
            <Input
              label={"Second Name"}
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
              state={formData.password}
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
          <div className="basis-1/2">
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

          {/* </div> */}
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
          <div className="basis-1/2">
            <Input
              label={"Phone Number"}
              placeholder={"+250798486619"}
              type={"text"}
              state={phoneNumber}
              setState={setPhoneNumber}
            />
          </div>
        </div>
      </div>
      <div>
        {category == "RMB" && (
          <Button
            className={`w-5/12 py-[14px] px-10 text-center bg-app text-white rounded-xl ${
              isLoading && "opacity-50"
            }`}
            onClick={() => handleRmbAdminRegistration(rmbFormdata)}
          >
            {isLoading ? <Loader /> : `Register`}
          </Button>
        )}
        {category == "Company" && (
          <Button
            className={`w-5/12 py-[14px] px-10 text-center bg-app text-white rounded-xl ${
              isLoading && "opacity-50"
            }`}
            onClick={() => handleCompanyAdminRegistration(formData)}
          >
            Next
          </Button>
        )}
        {category == "Rescue Team" && (
          <Button
            className={`w-5/12 py-[14px] px-10 text-center bg-app text-white rounded-xl ${
              isLoading && "opacity-50"
            }`}
            onClick={() => handleRescueTeamRegistration()}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};
export default AdminForm;
