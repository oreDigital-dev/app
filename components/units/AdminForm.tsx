import { useRouter } from "next/router";
import { EmployeeFields } from "@/@types/interfaces";
import Button from "@/components/ui/button";
import Input from "@/components/units/createMinesiteInputs";
import Link from "next/link";

const AdminForm = ({ category}: { category: string}) => {
  const router = useRouter();
  const handleProgression = (category: String) => {
    switch (category) {
      case "RMB":
        router.push("/verification");
        break;
      case "Company":
        router.push("/auth/companyDetails");
        break;
      case "Rescue Team":
        router.push("/auth/ProfessionDetails");
        break;
      default:
        router.push("/auth")
    }
  };
  const formHandler = ()=>{}
  const rmbRoles: string[] = [
    "RMB Admin",
    "RMB Employee",
    "Company admin",
    "Company employee",
    "Rescue team",
  ];
  const rescueTeamRoles: String[] = ["Red Cross", "RNP", "RDF"];
  return (
    <div className=" w-[90%] mx-auto h-[50%] space-y-2">
      <div className="flex justify-center ">
        <div className="flex items-center gap-4">
          {/* Step number round */}
          <div className="h-6 w-6 rounded-full bg-app flex items-center justify-center">
            <p className="font-bold text-2xl text-white">1</p>
          </div>
          <p className="font-bold text-2xl text-black">Person details</p>
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
      <form onSubmit={formHandler} className="space-y-4">
        <Input
          label={"Full names"}
          placeholder={"John Doe"}
          type={"text"}
          state={""}
          setState={() => {}}
        />
        <Input
          label={"Email address"}
          placeholder={"JohnDoe@gmail.com"}
          type={"email"}
          state={""}
          setState={() => {}}
        />
        <Input
          label={"Password"}
          placeholder={"......."}
          type={"password"}
          state={""}
          setState={() => {}}
        />
        <Input
          label={"Id"}
          placeholder={"1 1883 3434 34343"}
          type={"text"}
          state={""}
          setState={() => {}}
        />
        <Input
          label={"Key"}
          placeholder={"key sample"}
          type={"text"}
          state={""}
          setState={() => {}}
        />
        {category == "RMB" && (
          <select
            className=" border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md text-[black]"
            placeholder="Types of minerals available"
          >
            <option>Role</option>
            {rmbRoles.map((role, index) => (
              <option key={index} value={role as string}>
                {role}
              </option>
            ))}
          </select>
        )}
        {category == "Rescue Team" && (
          <select
            className=" border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md text-[black]"
            placeholder="Types of minerals available"
          >
            <option>Role</option>
            {rescueTeamRoles.map((role, index) => (
              <option key={index} value={role as string}>
                {role}
              </option>
            ))}
          </select>
        )}
      </form>
      <div>
        <Button
          className="w-5/12 py-[14px] px-10 text-center bg-app text-white rounded-xl"
          onClick={() => handleProgression(category)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
export default AdminForm;
