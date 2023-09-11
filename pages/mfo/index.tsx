import CreateMinesite from "@/components/ui/createMinesite";
import SectionHead from "@/components/ui/sectionHead";
import MfoDetailsCard from "@/components/units/mfoCardDetails";
import RowEntry from "@/components/units/mfoRowentry";
import { setCreateMineSiteVisibility } from "@/features/appPages";
import { useAppDispatch } from "@/stores/store";
import { mfoHols, mfoLatestActivities, mfoQuickActions } from "@/utils/dataAssets";
import { ToastContainer } from "react-toastify";

const Dashboard = () => {
  
  const dispatch = useAppDispatch();
  const handleActionClick = (index: number) => {
    switch (index) {
      case 1:
        dispatch(setCreateMineSiteVisibility({ type: "open" }));
      default:
        console.log("hello");
    }
  };
  return (
    <div className="m-[20px] rounded-md">
      <div className=" bg-white/40  relative p-[20px] rounded-md shadow-sm shadow-neutal-300">
        <div className="flex  z-100  items-start justify-between">
          <SectionHead title="Summary" desc="Your records so far" />
        </div>
        <div className="flex gap-4 my-[20px] ">
          {mfoHols.map((item, index) => (
            <MfoDetailsCard {...item} key={index} />
          ))}
        </div>
        <ToastContainer />
        <CreateMinesite />
      </div>
      <div className=" bg-white/40 p-[20px] rounded-md shadow-sm shadow-neutal-300 mt-2">
        <div className="flex items-start justify-between">
          <SectionHead
            title="Quick Actions"
            desc="Some fast actions you can do"
          />
        </div>
        <div className="flex gap-4 my-[20px] overflow-x-scroll scrollable">
          {mfoQuickActions.map((quickAction, index) => (
            <button
              onClick={() => handleActionClick(index)}
              key={index}
              style={{
                color: quickAction.textColor,
                backgroundColor: quickAction.bgColor,
                padding: "10px 20px",
                margin: "5px",
                border: "none",
              }}
              className="rounded-md"
            >
              {quickAction.text}
            </button>
          ))}
        </div>
      </div>
      <div className=" bg-white/40 p-[20px] rounded-md shadow-sm shadow-neutal-300 mt-2 ">
        <SectionHead title="Latest activity" desc="Recent submitted forms" />
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
export default Dashboard;
