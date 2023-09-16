import Button from "@/components/ui/button";
import Input from "@/components/units/createMinesiteInputs";
import { RootState } from "@/stores/store";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const CompanyDetails = () => {
    const category = useSelector(
        (state: RootState) => state.formCategories.category
      );
      const subCategory = useSelector(
        (state: RootState) => state.formCategories.subCategory
      );
    const router = useRouter();
    const handleProgression = (subCategory:String)=>{
switch(subCategory){
    case 'Employee':
        router.push("/verification");
        break;
    case 'Admin':
        router.push("/auth/FinalDetails");
}
    }
  return (
    <div className="relative flex flex-col authBack2 bg-cover bg-transparent ">
    <div className=" rounded-xl p-6 z-40 bg-white justify-center w-[35%] mx-auto h-[70%] my-auto space-y-4">
      <div className="flex justify-center ">
        <div className="flex items-center gap-4">
          {/* Step number round */}
          <div className="h-6 w-6 rounded-full bg-app flex items-center justify-center">
            <p className="font-bold text-2xl text-white">2</p>
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
        {subCategory == "Admin" ? (
          <>
            <Input
              label={"Company name"}
              placeholder={"Sail-miners333"}
              type={"text"}
              state={""}
              setState={() => {}}
            />
            <Input
              label={"Production capacity"}
              placeholder={"JohnDoe@gmail.com"}
              type={"email"}
              state={""}
              setState={() => {}}
            />
            <Input
              label={"Employee number"}
              placeholder={"+250798486619"}
              type={"password"}
              state={""}
              setState={() => {}}
            />{" "}
          </>
        ) : (
          <>
            <Input
              label={"Company name"}
              placeholder={"Sail-miners333"}
              type={"text"}
              state={""}
              setState={() => {}}
            />
            <Input
              label={"Type of minerals"}
              placeholder={"Wolfram"}
              type={"email"}
              state={""}
              setState={() => {}}
            />
            <Input
              label={"Location"}
              placeholder={"+250798486619"}
              type={"password"}
              state={""}
              setState={() => {}}
            />
          </>
        )}
      </div>
      <div>
        <Button
          className="w-5/12 py-[14px] px-10 text-center bg-app text-white rounded-xl"
          onClick={()=>handleProgression(subCategory)}
        >
          Next
        </Button>
      </div>
    </div>
    <div className="w-full h-[100vh] bg-black-900/80 absolute z-20" />
    </div>
  );
};
export default CompanyDetails;
