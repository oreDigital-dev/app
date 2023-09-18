import { useState } from "react";
import { RootState } from "@/stores/store";
import Button from "@/components/ui/button";
import Input from "@/components/units/createMinesiteInputs";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { stepThreeRegistration } from "@/features/companyRegistration";
import { companyAdminRegistration } from "@/services/actions/auth.action";
import { Cell } from "recharts";

const FinalDetails = () => {
  const dispatch = useDispatch();
  const companyAdminInfo = useSelector(
    (state: RootState) => state.companyRegistration.admin
  );
  const [licenseNumber, setLicenseNumber] = useState("");
  const [minerals, setMinerals] = useState("");
  const [ownership, setOwnership] = useState("");
  const [productionCapacity, setProductionCapacity] = useState(0);
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [sector, setSector] = useState("");
  const [cell, setCell] = useState("");
  const [village, setVillage] = useState("");
  const formData = {
    licenseNumber: licenseNumber,
    minerals: minerals,
    ownership: ownership,
    productionCapacity: productionCapacity,
    province: province,
    district: district,
    sector: sector,
    cell: cell,
    village: village,
  };
  const router = useRouter();
  const handleProgression = () => {
    dispatch(stepThreeRegistration(formData));
    handleRegister();
  };
  const handleRegister = async () => {
    try {
      const requestBody = {
        companyAdmin: {
          firstName: companyAdminInfo.companyAdmin.firstName,
          lastName: companyAdminInfo.companyAdmin.lastName,
          email: companyAdminInfo.companyAdmin.email,
          username: `${companyAdminInfo.companyAdmin.firstName.substr(0, 1)}.${
            companyAdminInfo.companyAdmin.secondName
          }`,
          myGender: companyAdminInfo.companyAdmin.myGender,
          registrationKey: companyAdminInfo.companyAdmin.registrationKey,
          national_id: companyAdminInfo.companyAdmin.national_id,
          password: companyAdminInfo.companyAdmin.password,
          phoneNumber: companyAdminInfo.companyAdmin.phoneNumber,
          address: {
            province: companyAdminInfo.companyAdmin.address.province,
            district: companyAdminInfo.companyAdmin.address.district,
            sector: companyAdminInfo.companyAdmin.address.sector,
            cell: companyAdminInfo.companyAdmin.address.cell,
            village: companyAdminInfo.companyAdmin.address.village,
          },
          employeeType: companyAdminInfo.companyAdmin.employeeType,
        },
        company: {
          ownership: formData.ownership,
          email: companyAdminInfo.company.email,
          phoneNumber: companyAdminInfo.company.phoneNumber,
          productionCapacity: formData.productionCapacity,
          minerals: [formData.minerals],
          licenseNumber: formData.licenseNumber,
          numberOfEmployees: companyAdminInfo.company.numberOfEmployees,
          address: {
            province: formData.province,
            district: formData.district,
            sector: formData.sector,
            cell: formData.cell,
            village: formData.village,
          },
          companyName: companyAdminInfo.company.companyName,
        },
      };
      const res = await companyAdminRegistration(requestBody);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="relative flex flex-col authBack2 bg-cover bg-transparent ">
      <div className=" rounded-xl p-6 z-40 bg-white justify-center w-[35%] mx-auto h-[95%] space-y-4">
        <div className="flex justify-center ">
          <div className="flex items-center gap-4">
            {/* Step number round */}
            <div className="h-6 w-6 rounded-full bg-app flex items-center justify-center">
              <p className="font-bold text-2xl text-white">3</p>
            </div>
            <p className="font-bold text-2xl text-black">Company details</p>
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
        <div className="space-y-4">
          <Input
            label={"Mining license number"}
            placeholder={"Sail-miners333"}
            type={"text"}
            state={licenseNumber}
            setState={setLicenseNumber}
          />
          <Input
            label={"Type of minerals"}
            placeholder={"Wolfram"}
            type={"text"}
            state={minerals}
            setState={setMinerals}
          />
          <Input
            label={"Production Capacity"}
            placeholder={"250 kg"}
            type={"number"}
            state={productionCapacity}
            setState={setProductionCapacity}
          />
          <Input
            label={"Type of ownership"}
            placeholder={"Sole proprietorship"}
            type={"text"}
            state={ownership}
            setState={setOwnership}
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
            onClick={() => handleProgression()}
          >
            Next
          </Button>
        </div>
      </div>
      <div className="w-full h-[140vh] bg-black-900/80 absolute z-20" />
    </div>
  );
};
export default FinalDetails;
