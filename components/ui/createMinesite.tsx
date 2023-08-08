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

function CreateMinesite() {
  const dispatch = useDispatch();
  const isCreateMineSiteFormVisible = useSelector(
    (store: RootState) => store.appPages.isCreateMineSiteVisible
  );
  const [mineSiteName, setMineSiteName] = useState("");
  const [country, setCountry] = useState("");
  const [district, setDistrict] = useState("");
  const [mineraTypes, setMineralTypes] = useState("");
  const [loading, setLoading] = useState(false);

  const handleHideForm = () => {
    dispatch(setCreateMineSiteVisibility({ type: "close" }));
  };

  const registerMineSite = async () => {
    setLoading(true);
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
        toast(response.data.message);
        dispatch(setCreateMineSiteVisibility({ type: "close" }));
        setLoading(false);
      })
      .catch((error) => {
        if (error.code != "ERR_NETWORK") {
          if (error.response.data.status != 500) {
            toast(error.response.data.message);
          } else {
            toast("Some thing went wrong, please try again");
          }
        }
        setLoading(false);
      });
  };

  return (
    <div>
      {isCreateMineSiteFormVisible && (
        <div className="w-[35%] form-1 rounded top-0 mx-auto absolute  bg-white  shadow-2xl">
          <FormHeader title="OreDigital" hideComponent={handleHideForm} />
          <div className="p-4">
            <h1 className="text-center text-sm font-bold">
              Register new Minesite
            </h1>
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
              <Button onClick={() => registerMineSite()}>
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
