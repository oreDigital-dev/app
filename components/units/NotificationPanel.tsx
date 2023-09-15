import { TimeZone } from "@/@types/enum";

export interface NotificationPanelProps {
  title: String;
  time: {
    month: string;
    year: number;
    date: number;
    hour: number;
    min: number;
    timeOfDay: TimeZone;
  };
}
const NotificationPanel = (props: NotificationPanelProps) => {
  return (
    <div className="bg-white/40 relative p-[20px] rounded-md shadow-sm shadow-neutal-300">
      <div className="flex justify-between">
        <div className="flex">
          <div className="w-4 h-4 rounded-full bg-[#5160B3]" />
          <h2>{props.title}</h2>
        </div>
        <div className="flex actions">
          <button className="border border-[#5160B3] rounded-md bg-white text-[#5160B3] flex items-center justify-center">
            Mark as Read
          </button>
          <button className="border border-red-500 rounded-md text-red-500 bg-white flex items-center justify-center">
            Delete
          </button>
        </div>
      </div>
      <div>
        <p>{props.time.month.substring(0,4)},{props.time.date}{props.time.year} at {props.time.hour}:{props.time.min}</p>
      </div>
    </div>
  );
};
export default NotificationPanel;
