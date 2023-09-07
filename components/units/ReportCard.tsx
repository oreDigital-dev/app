import { ReportDetails } from "@/@types/interfaces";
import { PdfFileIcon } from "../icons";
import { useRouter } from "next/router";

export interface ReportCardProps extends ReportDetails {}
const ReportCard = (props: ReportCardProps) => {
  const router = useRouter();
  const viewReportDetails = async(id:string) =>{
await router.push(`/rmb/reports/${id}`)
  }
  return (
    <div className="hover:cursor-pointer hover:p-4 w-full bg-white flex justify-between border border-white shadow py-2 px-4" onClick={ () =>viewReportDetails(props.id)}>
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