import { CompanyDetails } from "@/@types/interfaces";
import { setCompanyDetailsVisibility, setCurrentIndex } from "@/features/appPages";
import { RootState } from "@/stores/store";
import { useDispatch, useSelector } from "react-redux";

export interface RegisteredCompaniesProps extends CompanyDetails {}
const RegisteredCompanies = (props: RegisteredCompaniesProps) => {
  const dispatch = useDispatch();
const handleShowCard = () => {
  dispatch(setCompanyDetailsVisibility())
  dispatch(setCurrentIndex(props.id))
}
  return (
    <div
      className="bg-white  rounded-lg hover:border-[#FF0000]/20 border-gray-200 border-[0.1px] hover:cursor-pointer p-4 space-y-2 shadow-xs shadow-gray-200"
      onClick={handleShowCard}
    >
      <div className="w-[60px] h-[57px] bg-[#DBDAE0] rounded-sm" />
      <p className="font-semibold text-md">{props.companyName}</p>
      <p className="text-gray-300 text-sm">
        HQ:<span>{props.hqName}</span>
      </p>
      <p className="text-gray-300 text-sm">
        license:<span>{props.licenseType}</span>
      </p>
      <button className="py-2 mt-3 flex items-center  gap-2 px-4 rounded-full bg-app/10  hover:bg-app/30  text-app fill-app">
        <span>Details</span>
      </button>
    </div>
  );
};
export default RegisteredCompanies;
