import React, { useState } from "react";
import Input3 from "../units/input";
import Button from "./button";
import { baseUrli } from "@/utils/dataAssets";
import axios from "axios";
import Input from "../units/createMinesiteInputs";
import Input2 from "../units/input2";

function CreateMinesite() {
  const [mineSiteName, setMineSiteName] = useState("");
  const [country, setCountry] = useState("");
  const [district, setDistrict] = useState("");
  const [mineraTypes, setMineralTypes] = useState("");

  const registerMineSite = async () => {
    console.log("====== ", mineSiteName);
    await axios
      .post(
        `${baseUrli}/minesites/create`,
        {
          minesiteName: mineSiteName,
          mineralTypes: [mineraTypes, "ZINC"],
          address: {
            country: country,
            province: ",",
            district: district,
            sector: ".",
            cell: ".",
            village: ".",
            PostalCode: "00000",
          },
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AuthKey")}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-[35%] form-1 rounded top-0 mx-auto absolute  bg-white  shadow-2xl">
      <div className="border border-x-0 p-3 border-t-0">
        <h1 className="font-bold ">OreDigital</h1>
      </div>
      <div className="p-4">
        <h1 className="text-center text-sm font-bold">Register new Minesite</h1>
        <div className="flex flex-col space-y-4">
          <Input
            label="Minesite Name"
            type="text"
            state={mineSiteName}
            setState={setMineSiteName}
            placeholder={"Minesite Name"}
          />
          <Input3
            label="Mineral types"
            type="select"
            state={mineSiteName}
            setState={setMineralTypes}
            placeholder={"Types of Minerals"}
          />
          <Input2
            label="Country"
            type="text"
            state={mineSiteName}
            setState={setCountry}
            placeholder={"Country"}
          />
          <Input2
            label="District"
            type="text"
            state={mineSiteName}
            setState={setDistrict}
            placeholder={"District"}
          />
          <Button onClick={() => registerMineSite()}>Register mine site</Button>
        </div>
      </div>
    </div>
  );
}

export default CreateMinesite;
