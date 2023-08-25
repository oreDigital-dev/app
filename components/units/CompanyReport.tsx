import { CompanyReports, ReportDetails} from "@/@types/interfaces";
import { reportsData } from "@/utils/dataAssets";
import ReportCard from "./ReportCard";

export interface CompanyReportProps extends CompanyReports{}
const CompanyReport = (props:CompanyReportProps) => {
    return(
        <div className="w-full" >
<div className="flex w-full justify-between items-center">
    <div className="w-[20%]">{props.companyName}</div>
    <div className="h-[1px] bg-gray-300 w-[98%]"></div>
</div>
<div className="space-y-2">
    {props.companyReports.map((reportData:ReportDetails)=>{
        return(
        
            <ReportCard key={reportData.id} {...reportData} />
        )
    })}

</div>
        </div>
    )

}
export default CompanyReport;