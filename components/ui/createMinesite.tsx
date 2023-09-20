import React, { useState } from "react";
import Input3 from "../units/input";
import Button from "./button";
import { baseUrli } from "@/utils/dataAssets";
import axios from "axios";
import Input from "../units/createMinesiteInputs";
import Input2 from "../units/input2";
import { toast } from "react-toastify";
import { setCreateMineSiteVisibility } from "@/features/appPages";
import { useDispatch, useSelector } from "react-redux";
import { RootState, store } from "@/stores/store";
import FormHeader from "../units/formHeader";
import Loader from "./loader";
import { createMinesite as MinesiteHandler } from "@/services/actions/minesites.action";
import { createMineSite } from "@/features/minesitesSlice";
import { useRouter } from "next/router";

function CreateMinesite() {
  const dispatch = useDispatch();
  const router = useRouter();
  const isCreateMineSiteFormVisible = useSelector(
    (store: RootState) => store.appPages.isCreateMineSiteVisible
  );
  const [mineSiteName, setMineSiteName] = useState("");
  const [mineraTypes, setMineralTypes] = useState("");
  const [loading, setLoading] = useState(false);
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [sector, setSector] = useState("");
  const [cell, setCell] = useState("");
  const [village, setVillage] = useState("");

  const handleHideForm = () => {
    dispatch(setCreateMineSiteVisibility({ type: "close" }));
  };
  const formData = {
    name: mineSiteName,
    minerals: mineraTypes,
    province: province,
    district: district,
    sector: sector,
    cell: cell,
    village: village,
  };

  const registerMineSite = () => {
    dispatch(createMineSite(formData));
    handleRegisterMinesite();
  };
  const handleRegisterMinesite = async () => {
    const requestPayload = {
      name: formData.name,
      minerals: [formData.minerals],
      address: {
        province: formData.province,
        district: formData.district,
        sector: formData.sector,
        cell: formData.cell,
        village: formData.village,
      },
      company: JSON.parse(localStorage.getItem("companyId") || "{}"),
    };

    try {
      setLoading(true);
      const res = await MinesiteHandler(requestPayload);
      dispatch(setCreateMineSiteVisibility({ type: "close" }));
      toast("The mine site created successfully");
      console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  // await axios
  //   .post(
  //     `${baseUrli}/minesites/create`,
  //     {
  //       minesiteName: mineSiteName,
  //       mineralTypes: [mineraTypes, "ZINC"],
  //       address: {
  //         country: country,
  //         province: ",",
  //         district: district,
  //         sector: ".",
  //         cell: ".",
  //         village: ".",
  //         PostalCode: "00000",
  //       },
  //     },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("AuthKey")}`,
  //       },
  //     }
  //   )
  //   .then((response) => {
  //     console.log(response);
  //     toast(response.data.message);
  //     dispatch(setCreateMineSiteVisibility({ type: "close" }));
  //     setLoading(false);
  //   })
  //   .catch((error) => {
  //     if (error.code != "ERR_NETWORK") {
  //       if (error.response.data.status != 500) {
  //         toast(error.response.data.message);
  //       } else {
  //         toast("Some thing went wrong, please try again");
  //       }
  //     }
  //     setLoading(false);
  //   });

  return (
    <div>
      {isCreateMineSiteFormVisible && (
        <div className="w-[58%] form-1 rounded  mx-auto my-auto  bg-white  shadow-2xl">
          <FormHeader title="OreDigital" hideComponent={handleHideForm} />
          <div className="p-4">
            <h1 className="text-center text-sm font-bold">
              Register new Minesite
            </h1>
            <div className="flex flex-col space-y-3">
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
              {/* <Input2
                label="Country"
                type="text"
                state={mineSiteName}
                setState={setCountry}
                placeholder={"Country"}
              /> */}
              <div className="flex gap-2">
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
              </div>
              <div className="flex gap-2">
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
              <Button
                className={`${
                  loading
                    ? " w-full py-[14px] px-10 text-center bg-app text-white rounded-md opacity-50"
                    : "w-full py-[14px] px-10 text-center bg-app text-white rounded-md"
                }`}
                onClick={() => registerMineSite()}
              >
                {loading ? <Loader /> : "Register mine site"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateMinesite;
