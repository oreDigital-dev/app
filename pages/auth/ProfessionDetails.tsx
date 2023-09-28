import Button from "@/components/ui/button";
import Input from "@/components/units/createMinesiteInputs";
import Link from "next/link";
import { useRouter } from "next/router";

const ProfessionDetails = () => {
  const router = useRouter();
  const handleProgression = () => {
    router.push("/verification");
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
            label={"Professional Job"}
            placeholder={"Sail-miners333"}
            type={"text"}
            state={""}
            setState={() => {}}
          />
          <Input
            label={"Phone number"}
            placeholder={"+250798486619"}
            type={"text"}
            state={""}
            setState={() => {}}
          />
          <Input
            label={"Location"}
            placeholder={"Kigali,Rwanda"}
            type={"text"}
            state={""}
            setState={() => {}}
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
      <div className="w-full h-[100vh] bg-black-900/80 absolute z-20" />
    </div>
  );
};
export default ProfessionDetails;
