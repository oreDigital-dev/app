import React, { useState } from "react";
import Input3 from "../units/input";
import Button from "./button";
import { baseUrli } from "@/utils/dataAssets";
import axios from "axios";
import Input from "../units/createMinesiteInputs";
import Input2 from "../units/input2";
import { toast } from "react-toastify";
import {
  setCreateMineSiteVisibility,
  setUpdateMineSiteVisibility,
} from "@/features/appPages";
import { useDispatch, useSelector } from "react-redux";
import { RootState, store } from "@/stores/store";
import FormHeader from "../units/formHeader";
import Loader from "./loader";
import Input4 from "../units/UpdateMineSiteInputs";

function UpdateMineSite() {
  const dispatch = useDispatch();
  const isCreateMineSiteFormVisible = useSelector(
    (store: RootState) => store.appPages.isCreateMineSiteVisible
  );

  const isUpdateMineSiteVisible = useSelector(
    (store: RootState) => store.appPages.isUpdateMineSiteVisible
  );
  const selectedMineSite = useSelector(
    (store: RootState) => store.mineSites.selectedMineSite
  );

  const [mineSiteName, setMineSiteName] = useState(
    selectedMineSite.minesiteName
  );
  const [country, setCountry] = useState("");
  const [district, setDistrict] = useState("");
  const [mineraTypes, setMineralTypes] = useState("");
  const [loading, setLoading] = useState(false);

  const handleHideForm = () => {
    dispatch(setUpdateMineSiteVisibility({ type: "close" }));
  };

  const registerMineSite = async () => {
    setLoading(true);
    await axios
      .put(
        `${baseUrli}/minesites/update`,
        {
          mineSiteId: selectedMineSite._id,
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
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <div>
      {isUpdateMineSiteVisible && selectedMineSite && (
        <div className="w-[35%] form-1 rounded top-0 mx-auto absolute  bg-white  shadow-2xl">
          <FormHeader title="OreDigital" hideComponent={handleHideForm} />
          <div className="p-4">
            <h1 className="text-center text-sm font-bold">
              Update {selectedMineSite.mineSiteName} miensite
            </h1>
            <div className="flex flex-col space-y-4">
              <Input4
                label="Minesite Name"
                type="text"
                state={mineSiteName}
                setState={setMineSiteName}
                placeholder={"Minesite Name"}
                value={
                  selectedMineSite.minesiteName
                    ? selectedMineSite.minesiteName
                    : ""
                }
              />
              <Input4
                label="Mineral types"
                type="select"
                value={selectedMineSite.minerals}
                state={mineraTypes}
                setState={setMineralTypes}
                placeholder={"Types of Minerals"}
              />
              <Input4
                label="Country"
                type="text"
                value={selectedMineSite.country}
                state={country}
                setState={setCountry}
                placeholder={"Country"}
              />
              <Input4
                label="District"
                type="text"
                value={selectedMineSite.district}
                state={district}
                setState={setDistrict}
                placeholder={"District"}
              />
              <Button onClick={() => registerMineSite()}>
                {loading ? <Loader /> : "Update mine site"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdateMineSite;
