import { MfoRowEntryDetails } from "@/@types/interfaces";
import { ThreeDotsIcon } from "../icons";

export interface RowEntryProps extends MfoRowEntryDetails {}
const RowEntry = (props: RowEntryProps) => {
  return (
    <div className="py-[2px] bg-white shadow-md rounded-sm flex justify-evenly items-center">
      <div className="flex items-center text-gray-500">
        <span className="">
          {props.time.hour.toString()}:{props.time.min.toString()}
        </span>
        <span>{props.time.dayRegion}</span>
      </div>
      <span className="text-gray-500">{props.entryCategory}</span>
      <span className="text-gray-500">TAG No: {props.tagNo.toString()}</span>
      <span className="text-gray-500">{props.qty.toString()} Kg {props.variety}</span>
      <span className={`${props.status == 'accepted' && 'text-green-400'} ${props.status == 'rejected' && 'text-red-400'} ${props.status == 'pending..' && 'text-gray-500'}`}>{props.status}</span>
      <button className="float-right mt-4">
          <ThreeDotsIcon />
        </button>
    </div>
  );
};
export default RowEntry;
