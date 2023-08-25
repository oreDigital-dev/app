import { ReportDetails } from "@/@types/interfaces";
import { PdfFileIcon } from "../icons";

export interface ReportCardProps extends ReportDetails {}
const ReportCard = (props: ReportCardProps) => {
  return (
    <div className="hover:cursor-pointer w-full bg-white flex justify-between border border-white shadow py-2 px-4">
      <div className="flex gap-4">
        <PdfFileIcon />
        <div className="text-gray-500 text-md">{props.reportName}</div>
      </div>
      <div>
        <p className="text-gray-500 text-md">{props.issuedDate}</p>
      </div>
    </div>
  );
};
export default ReportCard;
