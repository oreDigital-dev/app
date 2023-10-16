import {
  setCompanyDetailsVisibility,
  setCurrentIndex,
} from "@/features/appPages";
import { get_all_registered_companies } from "@/pages/api-services/companies";
import { CompanyType, CompanyDetails } from "@/pages/types/company.type";
import { RootState } from "@/stores/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// export interface RegisteredCompaniesProps extends CompanyDetails {}
const RegisteredCompanies = () => {
  const dispatch = useDispatch();
  const handleShowCard = async() => {
    dispatch(setCompanyDetailsVisibility());
    dispatch(setCurrentIndex(companies[0].id -1));    
  };
  const router = useRouter();

  const isCompanyDetailsVisible = useSelector(
    (store: RootState) => store.appPages.isCompanyDetailsVisible
  );

  const setNavigationToPage:any = async(compNo:number) => {
  await router.push(`/rmb/companies/${compNo}`)
  };
  const [companies, setCompanies] = useState<CompanyType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const getCompanies = async() => {
    try {
      setIsLoading(true);
      const response:any = await get_all_registered_companies();
      setCompanies(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
  } finally {
    setIsLoading(false);
  }
  }
  useEffect(() => {
   getCompanies();
  }, [])
  console.log("Companieeeeee", companies);

  return (
    <div
      className="bg-white  rounded-lg hover:border-[#FF0000]/20 border-gray-200 border-[0.1px] hover:cursor-pointer p-4 space-y-2 shadow-xs shadow-gray-200"
    
    >
      <div className="w-[60px] h-[57px] bg-[#DBDAE0] rounded-sm" />
      <p className="font-semibold text-sm text-black-500">
        {companies[0]?.name}
      </p>
      <p className="text-gray-500 text-sm">
        HQ:<span>{companies[0]?.address?.district}</span>
      </p>
      <p className="text-gray-500 text-sm">
        license:<span>{companies[0]?.miniLicense}</span>
      </p>
      <div className="lg:flex gap-2 ">
      <button className="py-2 mt-3 flex items-center  gap-2 px-4 rounded-full bg-app/10  hover:bg-app/30  text-app fill-app"   onClick={handleShowCard}>
        <span>Details</span>
      </button>
      <button className="py-2 mt-3 flex items-center  gap-2 px-4 rounded-full bg-[#00820D10]  hover:bg-[#00820D30]  text-[#00820D]"   onClick={handleShowCard}>
        <span>Approve</span>
      </button>
      <button className="py-2 mt-3 flex items-center  gap-2 px-4 rounded-full bg-[#FF494910]  hover:bg-[#FF494930]  text-[#FF4949]"   onClick={handleShowCard}>
        <span>Reject</span>
      </button>
      </div>
    </div>
  );
};
export default RegisteredCompanies;
