import { useRouter } from "next/router";
import { EmployeeFields } from "@/@types/interfaces";
import Button from "@/components/ui/button";
import Input from "@/components/units/createMinesiteInputs";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { steponeRegistration } from "@/features/companyRegistration";
import { useState } from "react";

const AdminForm = ({ category }: { category: string }) => {
const router = useRouter();
const dispatch = useDispatch();
const [firstName,setFirstName] = useState("");
const [lastName,setLastName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [phoneNumber,setPhoneNumber] = useState("");
const[national_id,setNational_id] = useState("");
const [myGender,setMygender] = useState("");
const [province,setProvince] = useState("");
const [district,setDistrict] = useState("");
const [sector,setSector] = useState("");
const [cell,setCell] = useState("");
const [village,setVillage] = useState("");


const formData = {
  firstName:firstName,
  lastName:lastName,
  email:email,
  password:password,
  phoneNumber:phoneNumber,
  myGender:myGender,
  national_id:national_id,
  province:province,
  district:district,
  sector:sector,
  cell:cell,
  village:village
}

  const handleProgression = (category: String) => {
    switch (category) {
      case "RMB":
        router.push("/verification");
        break;
        case "Company":
          console.log(formData)
        dispatch(steponeRegistration(formData));
        router.push("/auth/companyDetails");
        break;
      case "Rescue Team":
        router.push("/auth/ProfessionDetails");
        break;
      default:
        router.push("/auth");
    }
  };
  const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    formData.myGender = e.target.value;
  };

  const rmbRoles: string[] = [
    "RMB Admin",
    "RMB Employee",
    "Company admin",
    "Company employee",
    "Rescue team",
  ];
  const rescueTeamRoles: String[] = ["Red Cross", "RNP", "RDF"];
  return (
    <div className=" w-[90%] mx-auto h-[50%] space-y-1">
      <div className="flex justify-center ">
        <div className="flex items-center gap-4">
          {/* Step number round */}
          <div className="h-6 w-6 rounded-full bg-app flex items-center justify-center">
            <p className="font-bold text-2xl text-white">1</p>
          </div>
          <p className="font-bold text-2xl text-black">Person details</p>
        </div>
      </div>
      <div className=" w-full flex justify-center">
        <p>
          Don&apos;t have a workspace?{" "}
          <span className="text-app">
            <Link href={"/"}>Request One</Link>
          </span>
        </p>
      </div>
      <div className="space-y-2">
        <Input
          label={"Firt Name"}
          placeholder={"John"}
          type={"text"}
          setState={setFirstName}
          state={firstName}
        />
        <Input
          label={"Second Name"}
          placeholder={"Doe"}
          type={"text"}
          state={lastName}
          setState={setLastName}
        />
        <Input
          label={"Email address"}
          placeholder={"JohnDoe@gmail.com"}
          type={"email"}
          state={email}
          setState={setEmail}
        />
        <Input
          label={"Password"}
          placeholder={"......."}
          type={"password"}
          state={formData.password}
          setState={setPassword}
        />
        <Input
          label={"Phone Number"}
          placeholder={"+250798486619"}
          type={"number"}
          state={phoneNumber}
          setState={setPhoneNumber}
        />
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
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setMygender(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-10">
              <p>Female</p>
              <input
                checked={formData.myGender == "Female"}
                type="radio"
                value={"Female"}
                name="gender"
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setMygender(e.target.value)}
              />
            </div>
          </div>
        </div>
        <Input
          label={"Id"}
          placeholder={"1 1883 3434 34343"}
          type={"text"}
          state={national_id}
          setState={setNational_id}
        />
        <Input
          label={"Province"}
          placeholder={"Kigali"}
          type={"text"}
          state={province}
          setState={setProvince}
        />
        <Input
          label={"District"}
          placeholder={"Gasabo"}
          type={"text"}
          state={district}
          setState={setDistrict}
        />
        <Input
          label={"Sector"}
          placeholder={"Kimironko"}
          type={"text"}
          state={sector}
          setState={setSector}
        />
        <Input
          label={"Cell"}
          placeholder={"Kibagabaga"}
          type={"text"}
          state={cell}
          setState={setCell}
        />
        <Input
          label={"Village"}
          placeholder={"Kalisimbi"}
          type={"text"}
          state={village}
          setState={setVillage}
        />
      </div>
      <div>
        <Button
          className="w-5/12 py-[14px] px-10 text-center bg-app text-white rounded-xl"
          onClick={() => handleProgression(category)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
export default AdminForm;
