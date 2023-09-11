import { FillNewForm } from "@/components/icons";

const NewForm = () => {
  return (
    <div className="mx-[20px] mt-[20px] rounded-md h-[88vh]">
      <div className="bg-white/50 relative p-[20px] rounded-md shadow-sm shadow-neutal-300 h-full space-y-2">
        <h6 className="text-black-500 font-bold">Mined production form</h6>
        <div className="flex justify-between px-8">
          <p className="text-black-300 font-light text-sm">
            Fill form manually
          </p>
          <button className="outline-none text-[#5160B3] underline underline-4">
            Print
          </button>
        </div>
        <div className="px-8 bg-white relative p-[20px] rounded-md shadow-md shadow-neutal-300 h-[90%] space-y-2">
          <div className="flex justify-end text-gray-500">No. 080900</div>
          <div className="h-[70%]">
            <div className="flex h-[80%] items-center justify-center">
              <FillNewForm />
            </div>
            <p className="font-semibold text-center text-gray-500">
              Fill New Form
            </p>
          </div>
          <div className="flex justify-end">
            <div className="w-1/3 flex justify-between">
                <button className=" flex items-center justify-center font-semibold text-white bg-[#5160B3] border-2 px-[20px] py-[8px] border-[#5160B3] rounded-md">Submit</button>
                <button className="flex items-center justify-center font-semibold bg-white border-2 border-[#5160B3] rounded-md px-[20px] py-[10px]">Save as draft</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewForm;
