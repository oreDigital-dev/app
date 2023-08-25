import { ReportDetails } from "@/@types/interfaces";

export interface ReportCardProps extends ReportDetails {}
const ReportCard = (props: ReportCardProps) => {
  return (
    <div className="hover:cursor-pointer w-full bg-white flex justify-between border border-white shadow py-2">
      <div className="flex">
        <div className="text-gray-500 text-md">{props.reportName}</div>
      </div>
      <div>
        <p className="text-gray-500 text-md">{props.issuedDate}</p>
      </div>
    </div>
  );
};
export default ReportCard;
