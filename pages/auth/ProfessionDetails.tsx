import { useState } from "react";
import Button from "@/components/ui/button";
import Input from "@/components/units/createMinesiteInputs";
import Link from "next/link";
import { useRouter } from "next/router";
import Input2 from "@/components/units/input2";
import { rescueTeamsCategories } from "@/utils/dataAssets";
import { useDispatch, useSelector } from "react-redux";
import { stepTwoRegistration } from "@/features/rescueteamRegistration";
import { RootState } from "@/stores/store";
import { axios } from "@/services/axios";

const ProfessionDetails = () => {
  const dispatch = useDispatch();
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [sector, setSector] = useState("");
  const [cell, setCell] = useState("");
  const [village, setVillage] = useState("");
  const [rescueTeamCategory, setRescueTeamCategory] = useState(
    rescueTeamsCategories[0]
  );
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();
  const rescueTeamAdminInfo = useSelector((state:RootState)=>state.rescueTeamRegistration.RescueTeamAdmin);
  const formData = {
    province:province,
    district:district,
    sector:sector,
    cell:cell,
    village:village,
    rescueTeamCategory:rescueTeamCategory,
    name:name,
    email:email,
    phoneNumber:phoneNumber
  }
  const requestPayload = {
RescueTeamAdmin: {
        firstName: rescueTeamAdminInfo.firstName,
        lastName: rescueTeamAdminInfo.lastName,
        email: rescueTeamAdminInfo.email,
        username: rescueTeamAdminInfo.username,
        myGender: rescueTeamAdminInfo.myGender,
        registrationKey: rescueTeamAdminInfo.registrationKey,
        national_id: rescueTeamAdminInfo.national_id,
        password: rescueTeamAdminInfo.password,
        phoneNumber: rescueTeamAdminInfo.phoneNumber,
        address: {
            province: rescueTeamAdminInfo.address.province,
            district: rescueTeamAdminInfo.address.district,
            sector: rescueTeamAdminInfo.address.sector,
            cell: rescueTeamAdminInfo.address.cell,
            village: rescueTeamAdminInfo.address.village
        },
        employeeType: rescueTeamAdminInfo.employeeType
    },
    rescueTeam: {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        address: {
            province: formData.province,
            district: formData.district,
            sector: formData.sector,
            cell: formData.cell,
            village: formData.village
        },
        rescueTeamCategory: formData.rescueTeamCategory
    }

  }

  const handleProgression = async() => {
    dispatch(stepTwoRegistration(formData));
    try{
      const response = await axios.post("/rescue-teams/create",requestPayload);
      console.log(response.data)
      router.push("/verification");

    }
catch(err){
  console.error(err)
}
  };
  return (
    <div className="relative xl:w-[100vw] flex flex-col authBack2 bg-cover bg-transparent ">
      <div className=" rounded-xl p-6 z-40 bg-white justify-center w-[35%] mx-auto h-auto my-auto space-y-4">
        <div className="flex justify-center ">
          <div className="flex items-center gap-4">
            {/* Step number round */}
            <div className="h-6 w-6 rounded-full bg-app flex items-center justify-center">
              <p className="font-bold text-2xl text-white">2</p>
            </div>
            <p className="font-bold text-2xl text-black">
              Professional details
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex gap-2">
            <div className="basis-1/2">
              <Input
                label={"Rescue Team Name"}
                placeholder={"Rwanda National Police"}
                type={"text"}
                state={name}
                setState={setName}
              />
            </div>
            <div className="basis-1/2">
              <Input
                label={"Email"}
                placeholder={"info@rnp.rw"}
                type={"text"}
                state={email}
                setState={setEmail}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="basis-1/2">
              <Input
                label={"Phone number"}
                placeholder={"+250798486619"}
                type={"text"}
                state={phoneNumber}
                setState={setPhoneNumber}
              />
            </div>
            <div className="basis-1/2">
              <Input2
                label={"Rescue Team Category"}
                type="select"
                placeholder={"Rescue Team Category"}
                setState={setRescueTeamCategory}
                state={rescueTeamCategory}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="basis-1/2">
              <Input
                label={"Province"}
                placeholder={"Kigali"}
                type={"text"}
                state={province}
                setState={setProvince}
              />
            </div>
            <div className="basis-1/2">
              <Input
                label={"District"}
                placeholder={"Gasabo"}
                type={"text"}
                state={district}
                setState={setDistrict}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="basis-1/2">
              <Input
                label={"Sector"}
                placeholder={"Kimironko"}
                type={"text"}
                state={sector}
                setState={setSector}
              />
            </div>
            <div className="basis-1/2">
              <Input
                label={"Cell"}
                placeholder={"Kibagabaga"}
                type={"text"}
                state={cell}
                setState={setCell}
              />
            </div>
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
        <div>
          <Button
            className="w-5/12 py-[14px] px-10 text-center bg-app text-white rounded-xl"
            onClick={() => handleProgression()}
          >
            Next
          </Button>
        </div>
      </div>
      <div className="w-full h-[100vh] bg-black-900/80 absolute z-20" />
    </div>
  );
};
export default ProfessionDetails;
