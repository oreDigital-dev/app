import Button from "@/components/ui/button";
import Input from "@/components/units/input";
import { useRouter } from "next/router";
import { useState } from "react";

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
  const [tel, setTel] = useState("");

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
          state={location}
          placeholder={null}
          setState={setLocation}
          label="Headquarters location"
          type="text"
        />
        <Input
          state={tel}
          placeholder={null}
          setState={setTel}
          label="Telephone number"
          type="text"
        />
        <Button onClick={() =>  onNext()}>Next</Button>
      </div>
    </div>
  );
};

const CompanyTwo = ({ onNext }: any) => {
  const handleNextClick = () => {
    onNext(); // Call the onNext function to trigger the next step
  };

  const [licence, setLicence] = useState("");
  const [mineral, setMineral] = useState("");
  const [typeOfOwnership, setTypeOfOwnership] = useState("");
  const [tel, setTel] = useState("");

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
        <Button onClick={handleNextClick}>Next</Button>
      </div>
    </div>
  );
};

const CompanyThree = ({ onNext }: any) => {
  const router = useRouter();
  const handleNextClick = () => {
    router.push("/");
  };

  const [ceo, setCeo] = useState("");
  const [prodCapacity, setProdCapacity] = useState("");
  const [nEmployees, setNEmployees] = useState("");
  const [tel, setTel] = useState("");

  return (
    <div className="w-screen h-screen flex flex-col justify-center content-center items-center">
      <div className="rounded-lg w-full md:w-[50%] lg:w-[30%] bg-white space-y-4 flex flex-col justify-center content-center py-20 px-12">
        <GeneralComp number={3} title="Operational details" />
        <Input
          state={ceo}
          placeholder={null}
          setState={setCeo}
          label="Company CEO"
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
        <Button onClick={handleNextClick}>Next</Button>
      </div>
    </div>
  );
};

const CompanyDetails = () => {
  const [currentStep, setCurrentStep] = useState(3);

  const handleNextButtonClick = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="w-screen h-screen flex flex-col md:justify-center md:content-center md:items-center bg-bg">
      {currentStep === 1 && <CompanyOne onNext={handleNextButtonClick} />}
      {currentStep === 2 && <CompanyTwo onNext={handleNextButtonClick} />}
      {currentStep === 3 && <CompanyThree onNext={handleNextButtonClick} />}
    </div>
  );
};

export default CompanyDetails;
