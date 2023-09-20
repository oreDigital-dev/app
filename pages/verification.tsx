import VerifyAcc from "@/components/units/VerifyAcc";

const VerificationPage = () =>{
  
return(
     <div className="relative flex flex-col authBack2 bg-cover bg-transparent">
        <div className="z-40 bg-white mx-auto my-auto border rounded-xl w-[30%] py-8 px-4 space-y-6 h-auto">
        <VerifyAcc />
        </div>
      <div className="w-full h-[100vh] bg-black-900/80 absolute z-20" />
    </div>
)
}
export default VerificationPage;