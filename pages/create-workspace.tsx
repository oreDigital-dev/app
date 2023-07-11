import Button from "@/components/ui/button";
import Input from "@/components/units/input";
import Input2 from "@/components/units/input2";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "@/utils/dataAssets";
import Loader from "@/components/ui/loader";

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

const CompanyOne = ({ onNext }: { onNext: () => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword ] = useState("")
  const [tel, setTel] = useState("");
   
  const companyDetails = {
    name:name,
    email:email,
    password:password,
    location:location,
    tel:tel
  };

  const handleSave = () => {
    localStorage.setItem("companyDetails", JSON.stringify(companyDetails))
    onNext()
  }
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
          label="Passowrd"
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
  const [licence, setLicence] = useState("");
  const [mineral, setMineral] = useState("");
  const [typeOfOwnership, setTypeOfOwnership] = useState("");
  const [tel, setTel] = useState("");
    const operationDetailsDetails2 = {
      licence:licence,
      mineral:mineral,
      typeOfOwnership:typeOfOwnership,
      tel:tel
    }
    const handleSave = () => {
      localStorage.setItem("operationDetailsDetails2", JSON.stringify(operationDetailsDetails2))
      onNext()
    }
    
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
        <Input
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
  const router = useRouter();
  const [ceoNationalId, setCeoNationalId] = useState("");
  const [prodCapacity, setProdCapacity] = useState("");
  const [nEmployees, setNEmployees] = useState("");
  const [tel, setTel] = useState("");

    const operationDetails = {
      ceoNationalId:ceoNationalId,
      prodCapacity:prodCapacity,
      nEmployees:nEmployees,
      tel:tel
    }
    const handleSave = () => {
      localStorage.setItem("operationDetails", JSON.stringify(operationDetails))
      onNext()
    }

  return (
    <div className="w-screen h-screen flex flex-col justify-center content-center items-center">
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


const CompanyFour = ({ onNext } : any) => {
  const [district, setDistrict ] = useState('');
  const [country, setCountry ] = useState('');
  const [postalCode , setPostalCode ] = useState('');

  const [loading,setLoading]= useState(false)

  const handleNextClick = async() => {
    if(loading) return ;
    setLoading(true)
    try {
      const companyDetails = JSON.parse(localStorage.getItem('companyDetails') || '{}');
      const operationDetails = JSON.parse(localStorage.getItem("operationDetails") || '{}')
      const operationDetailsDetails2 = JSON.parse(localStorage.getItem("operationDetailsDetails2") || '{}')
      const response = await axios({
        method:'POST',
        url:`${baseUrl}/companies/create`,
        data:{
            companyName: companyDetails.name,
            companyCEOName: "oreDigital",
            companyEmail: companyDetails.email,
            password: companyDetails.passwrod,
            headQuartersLocation: `${district},${country}`,
            telephoneNumber:companyDetails.tel,
            ownership: operationDetailsDetails2.typeOfOwnership,
            productionCapacity: operationDetails.prodCapacity,
            numberOfEmployees: operationDetails.nEmployees,
            miniLicenseNumber: 34343434,
            companyCEONationalId: operationDetails.ceoNationalId,
            mineralTypes: [
              "GOLD",
              "ZINC"
            ],
            mininLicenseNumber: 454
        }
      })
      setLoading(false)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  return (
  <div className="w-screen h-screen flex flex-col justify-center content-center items-center">
  <div className="rounded-lg w-full md:w-[50%] lg:w-[30%] bg-white space-y-4 flex flex-col justify-center content-center py-20 px-12">
    <GeneralComp number={3} title="Tell us about your address " />
     <Input2  label="Country" type="select" state={country} setState={setCountry}  placeholder={'Company name'} />
     <Input2  label="District" type="select" state={district} setState={setDistrict}  placeholder={'District name'} />
    <Input2
      state={postalCode}
      placeholder="Ex:0000"
      setState={setPostalCode}
      label="Postal Code"
      type="number"
    />
    <Button onClick={handleNextClick}> {loading ? <Loader/> : 'Next'}</Button>
  </div>
</div>
);
}

const CompanyDetails = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextButtonClick = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="w-screen h-screen flex flex-col md:justify-center md:content-center md:items-center bg-bg">
      {currentStep === 1 && <CompanyOne onNext={handleNextButtonClick} />}
      {currentStep === 2 && <CompanyTwo onNext={handleNextButtonClick} />}
      {currentStep === 3 && <CompanyThree onNext={handleNextButtonClick} />}
      {currentStep === 4 && <CompanyFour onNext={handleNextButtonClick} />}
    </div>
  );
};

export default CompanyDetails;
