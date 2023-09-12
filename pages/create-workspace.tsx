import Button from "@/components/ui/button";
import Input from "@/components/units/input";
import Input2 from "@/components/units/input2";
import { Router, useRouter } from "next/router";
import { useState ,useEffect} from "react";
import axios from "axios";
import { baseUrli } from "@/utils/dataAssets";
import Loader from "@/components/ui/loader";
import { getProvinces, getDistricts,getAllData } from "@/utils/locationAddress";
import { toast, ToastContainer } from "react-toastify";
import {
  setLoggedInSuccessfully,
  setWelcomeMessage,
} from "@/features/appPages";
import { useDispatch } from "react-redux";
const GeneralComp = ({ number, title }: { number: number; title: string }) => {
  return (
    <div className="flex flex-col md:justify-center md:contents-center md:items-center">
      <div className="flex">
        <div className="text-white text-bold text-center flex justify-center items-center h-8 w-8 rounded-full bg-app mr-4">
          {number}
        </div>
        <div className="font-bold text-xl">{title}</div>
      </div>

      <p className="mt-3">
        Don't have a workspace?{" "}
        <a href="#" className="text-app">
          Request one
        </a>
      </p>
    </div>
  );
};

const CompanyOne = ({
  onNext,
  onPrev,
}: {
  onNext: () => void;
  onPrev: () => void;
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");

  const companyDetails = {
    name: name,
    email: email,
    password: password,
    location: location,
    tel: tel,
  };

  const handleSave = () => {
    localStorage.setItem("companyDetails", JSON.stringify(companyDetails));
    onNext();
  };
  // const createWorkspace
  return (
    <div className="w-screen h-screen flex flex-col justify-center md:content-center md:items-center">
      <div className="rounded-lg w-full md:w-[50%] lg:w-[35%] bg-white space-y-4 flex flex-col md:justify-center md:content-center py-20 px-12">
        <GeneralComp number={1} title="Company Details" />
        <Input
          state={name}
          placeholder={null}
          setState={setName}
          label="Company name"
          type="text"
        />
        <Input
          state={email}
          placeholder={null}
          setState={setEmail}
          label="Email address"
          type="email"
        />
        <Input
          state={password}
          placeholder={null}
          setState={setPassword}
          label="Password"
          type="password"
        />
        <Input
          state={tel}
          placeholder={null}
          setState={setTel}
          label="Telephone number"
          type="text"
        />
        <Button onClick={handleSave}>Next</Button>
      </div>
    </div>
  );
};

const CompanyTwo = ({ onNext }: any) => {
  const [licence, setLicence] = useState(0);
  const [mineral, setMineral] = useState("");
  const [typeOfOwnership, setTypeOfOwnership] = useState("");
  const [tel, setTel] = useState("");
  const operationDetailsDetails2 = {
    licence: licence,
    mineral: mineral,
    typeOfOwnership: typeOfOwnership,
    tel: tel,
  };
  const handleSave = () => {
    localStorage.setItem(
      "operationDetailsDetails2",
      JSON.stringify(operationDetailsDetails2)
    );
    onNext();
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center content-center items-center">
      <div className="rounded-lg  w-full md:w-[50%] lg:w-[30%] bg-white space-y-4 flex flex-col justify-center content-center py-20 px-12">
        <GeneralComp number={2} title="Operational details" />
        <Input
          state={licence}
          placeholder={null}
          setState={setLicence}
          label="Mining licence number"
          type="number"
        />
        <Input
          state={mineral}
          placeholder={null}
          setState={setMineral}
          label="Type of mineral"
          type="text"
        />
        <Input2
          state={typeOfOwnership}
          placeholder={null}
          setState={setTypeOfOwnership}
          label="Type of ownership"
          type="text"
        />
        <Button onClick={handleSave}>Next</Button>
      </div>
    </div>
  );
};

const CompanyThree = ({ onNext }: any) => {
  const [ceoNationalId, setCeoNationalId] = useState("");
  const [prodCapacity, setProdCapacity] = useState(0);
  const [nEmployees, setNEmployees] = useState(0);
  const [tel, setTel] = useState("");

  const operationDetails = {
    ceoNationalId: ceoNationalId,
    prodCapacity: prodCapacity,
    nEmployees: nEmployees,
    tel: tel,
  };
  const handleSave = () => {
    localStorage.setItem("operationDetails", JSON.stringify(operationDetails));
    onNext();
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center content-center items-center">
      <ToastContainer />
      <div className="rounded-lg w-full md:w-[50%] lg:w-[30%] bg-white space-y-4 flex flex-col justify-center content-center py-20 px-12">
        <GeneralComp number={3} title="Operational details" />
        <Input
          state={ceoNationalId}
          placeholder={null}
          setState={setCeoNationalId}
          label="CEO National ID"
          type="text"
        />
        <Input
          state={prodCapacity}
          placeholder={null}
          setState={setProdCapacity}
          label="Production capacity"
          type="number"
        />
        <Input
          state={nEmployees}
          placeholder={null}
          setState={setNEmployees}
          label="Employee number"
          type="number"
        />
        <Button onClick={handleSave}>Next</Button>
      </div>
    </div>
  );
};

const CompanyFour = ({ onNext }: any) => {
  const dispatch = useDispatch();
  const [district, setDistrict] = useState("");

  const [province, setProvince] = useState("");
  const [sector, setSector] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [provinceOptions, setProvinceOptions] = useState<string[]>([]);
  const [districtsOptions, setDistrictsOptions] = useState<string[]>([]);

  useEffect(() => {
    async function fetchProvinces() {
      setProvinceOptions(await getProvinces())
    }
    getAllData();
    fetchProvinces();
    
  }, [])
  const getValue = async (event: { value: string; }) => {
    setDistrictsOptions(await getDistricts(event.value))

  }
  const locationDetails = {
    province: province,
    district: district,
    sector: sector,
  };
  const handleSave = () => {
    localStorage.setItem("locationDetails", JSON.stringify(locationDetails));
    onNext();
  };
 
  return (
    <div className="w-screen h-screen flex flex-col justify-center content-center items-center">
      <ToastContainer />
      <div className="rounded-lg w-full md:w-[50%] lg:w-[30%] bg-white space-y-4 flex flex-col justify-center content-center py-20 px-12">
        <GeneralComp number={3} title="Tell us about your address " />
        {/* <Input2
          label="Country"
          type="select"
          state={country}
          setState={setCountry}
          placeholder={"Company name"}
        /> */}
          <Input2
          state={province}
          placeholder="East"
          setState={setProvince}
          label="Province"
          type="text"
        />
        <Input2
          label="District"
          type="select"
          state={district}
          setState={setDistrict}
          placeholder={"District name"}
        />
         <Input2
          state={sector}
          placeholder="Nyagatare"
          setState={setSector}
          label="Sector"
          type="text"
        />
        <Button onClick={handleSave}>Next</Button>

      </div>
    </div>
  );
};

const CompanyFive = ({ onNext }: any) => {
  const dispatch = useDispatch();

  const [cell, setCell] = useState("");
  const [village, setVillage] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleNextClick = async () => {
    if (loading) return;
    const companyDetails = JSON.parse(
      localStorage.getItem("companyDetails") || "{}"
    );
    const operationDetails = JSON.parse(
      localStorage.getItem("operationDetails") || "{}"
    );
    const operationDetailsDetails2 = JSON.parse(
      localStorage.getItem("operationDetailsDetails2") || "{}"
    );
    const locationDetails = JSON.parse(
      localStorage.getItem("locationDetails") || "{}"
    );
    setLoading(true);
    const locationDetails2 = {
    cell: cell,
    village: village,
  };
    await axios
      .post(`${baseUrli}/companies/create`, {
        name: companyDetails.name,
        ownership: operationDetailsDetails2.typeOfOwnership,
        email: companyDetails.email,
        ownerNID: operationDetails.ceoNationalId,
        password: companyDetails.password,
        phoneNumber: companyDetails.tel,
        productionCapacity: Number(operationDetails.prodCapacity),
        minerals: operationDetailsDetails2.mineral,
        licenseNumber:Number(operationDetails.licence),
        numberOfEmployees: Number(operationDetails.nEmployees),
        address : {
          province: locationDetails.province,
          district: locationDetails.district,
          sector: locationDetails.sector,
          cell: locationDetails2.cell,
          village: locationDetails2.village,
          
}
      })
      .then((response) => {
        localStorage.setItem("AuthKey", response.data.Access_token);
        setLoading(false);
        dispatch(
          setWelcomeMessage({ message: "Hi! You've loggedIn successfully" })
        );
        dispatch(setLoggedInSuccessfully({ type: true }));
        router.push("/d/dashboard");
      })
      .catch((error) => {
        if (error.code != "ERR_NETWORK") {
          if (error.response.data.status != 500) {
            toast(error.response.data.message);
          } else {
            toast("Some thing went wrong, please try again");
          }
        } else {
          toast("Some thing went wrong, please try again");
        }
        setLoading(false);
      });
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center content-center items-center">
      <ToastContainer />
      <div className="rounded-lg w-full md:w-[50%] lg:w-[30%] bg-white space-y-4 flex flex-col justify-center content-center py-20 px-12">
      <GeneralComp number={4} title="Tell us about your address " />
          <Input2
          state={cell}
          placeholder="Gashenyi"
          setState={setCell}
          label="Cell"
          type="text"
        />
        <Input2
          label="Village"
          type="text"
          state={village}
          setState={setVillage}
          placeholder="Village"
        />
        <Input2
          state={postalCode}
          placeholder="Ex:0000"
          setState={setPostalCode}
          label="Postal Code"
          type="number"
        />
        <Button onClick={handleNextClick}>
          {" "}
          {loading ? <Loader /> : "Create workspace"}
        </Button>
      </div>
    </div>
  );
};

const CompanyDetails = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextButtonClick = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="w-screen h-screen flex flex-col md:justify-center md:content-center md:items-center bg-bg">
      {currentStep === 1 && (
        <CompanyOne onPrev={handlePrev} onNext={handleNextButtonClick} />
      )}
      {currentStep === 2 && (
        <CompanyTwo onPrev={handlePrev} onNext={handleNextButtonClick} />
      )}
      {currentStep === 3 && (
        <CompanyThree onPrev={handlePrev} onNext={handleNextButtonClick} />
      )}
      {currentStep === 4 && (
        <CompanyFour onPrev={handlePrev} onNext={handleNextButtonClick} />
      )}
      {currentStep === 5 && (
        <CompanyFive onPrev={handlePrev} onNext={handleNextButtonClick} />

      )}
    </div>
  );
};

export default CompanyDetails;
