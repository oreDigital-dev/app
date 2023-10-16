import ReportCard from "@/components/units/ReportCard";
import { reportsData } from "@/utils/dataAssets";

const SingleReport = ({data}:any) => {
  return (
    <div className="mx-[20px] mt-[20px] rounded-md h-[89vh]">
      <div className="bg-[red]  relative p-[20px] rounded-md shadow-sm shadow-neutal-300 h-[89vh] ">
        <div>
          <ReportCard {...data} />
        </div>
        <div className={'h-[80%] w-full flex items-center justify-center '}>
        <p className="text-lg font-semibold text-gray-400">Reports</p>
          </div>
      </div>
    </div>
  );
};
export default SingleReport;
export const getStaticPaths = () => {
  const dataItem: any = reportsData;
  const paths = reportsData.map((report: any) => ({
    params: { id: report.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = ({params}:any) => {
  const id = params.id;
  const data = reportsData[id-1];
  return {
    props:{
      data
    }
  }
};
