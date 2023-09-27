import { useState } from "react";
import { EmployeeFields } from "@/@types/interfaces";
import Button from "@/components/ui/button";
import Input from "@/components/units/createMinesiteInputs";
import Link from "next/link";
import { useRouter } from "next/router";
import { stepOneEmployeeRegistration } from "@/features/companyRegistration";
import { useDispatch } from "react-redux";
import { axios } from "@/services/axios";
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
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [sector, setSector] = useState("");
  const [cell, setCell] = useState("");
  const [village, setVillage] = useState("");
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
      province: province,
      district: district,
      sector: sector,
      cell: cell,
      village: village,
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
          <div className="basis-1/2">
            <Input
              label={"Province"}
              placeholder={"Kigali"}
              type={"text"}
              state={province}
              setState={setProvince}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="basis-1/2">
            <Input
              label={"District"}
              placeholder={"Gasabo"}
              type={"text"}
              state={district}
              setState={setDistrict}
            />
          </div>
          <div className="basis-1/2">
            <Input
              label={"Sector"}
              placeholder={"Kimironko"}
              type={"text"}
              state={sector}
              setState={setSector}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="basis-1/2">
            <Input
              label={"Cell"}
              placeholder={"Kibagabaga"}
              type={"text"}
              state={cell}
              setState={setCell}
            />
          </div>
          <div className="w-1/2">
            <Input
              label={"Village"}
              placeholder={"Kalisimbi"}
              type={"text"}
              state={village}
              setState={setVillage}
            />
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
