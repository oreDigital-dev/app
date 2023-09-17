import SectionHead from "@/components/ui/sectionHead";
import FormCategoryCard from "@/components/units/FormCategory";
import RowEntry from "@/components/units/mfoRowentry";
import { mfoLatestActivities } from "@/utils/dataAssets";

const FormExtract = () => {
  const COLORS =  ["#2CA900","#5160B3","#293369","#8A6262"]
  return (
    <div className="m-[20px] rounded-md">
      <div className="p-[20px] space-y-2 md:Space-y-0 md:flex gap-2">
        <div className="basis-3/4 bg-white/40 py-4 rounded-md shadow-sm shadow-neutal-300">
          <div className="w-full flex  justify-between items-center ">
            <div className="pl-8">
              <h6 className="text-black-500 font-bold">Fill in a form</h6>
              <p className="text-black-300 font-light text-sm">
                Available mining forms
              </p>
            </div>
          </div>
          <div className="w-[100%] relative flex justify-center">
            <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 space-y-2 gap-8">
              <FormCategoryCard
                title={"Exported Production Form"}
                color={COLORS[1]}
              />
              <FormCategoryCard
                className="mt-4"
                title={"Mined Production Form"}
                color={COLORS[0]}
              />
              <FormCategoryCard
                title={"Smelted Production Form"}
                color={COLORS[2]}
              />
              <FormCategoryCard
                title={"Processed Production Form"}
                color={COLORS[3]}
              />
            </div>
          </div>
        </div>
        {/**view Submitted form  */}
        <div className="basis-1/4 w-[80%] md:w-[100%] space-y-2 max-h-[280px] md:min-h-[280px] bg-white/50 rounded-md shadow-sm shadow-neutal-300">
          <div className="flex flex-col items-center pr-10">
            <h6 className="text-black-500 font-bold">View submitted forms</h6>
            <p className="text-black-300 font-light text-sm">
              Recently submitted forms
            </p>
          </div>

          <div className="flex flex-col items-center">
            <button
              style={{
                color: "#3949D2",
                backgroundColor: "#3949D210",
                padding: "10px 20px",
                margin: "5px",
                border: "none",
              }}
              className="rounded-md"
            >
              View approved forms
            </button>
            <button
              style={{
                color: "#FFB800",
                backgroundColor: "#FFB80010",
                padding: "10px 20px",
                margin: "5px",
                border: "none",
              }}
              className="rounded-md"
            >
              View pending forms
            </button>
            <button
              style={{
                color: "#D29539",
                backgroundColor: "#D2953910",
                padding: "10px 20px",
                margin: "5px",
                border: "none",
              }}
              className="rounded-md"
            >
              View rejected forms
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-white/40 p-[20px] w-[97%] mx-auto rounded-md shadow-sm shadow-neutal-300 mt-2 space-y-8 ">
        <SectionHead title="&gt; Latest activity" desc="Recent submitted forms" />
        <div className="space-y-2">
        {mfoLatestActivities.map((activity,index)=>{
            return(
                <RowEntry {...activity} key={index} />
            )
        })}
        </div>
      </div>
    </div>
  );
};
export default FormExtract;
