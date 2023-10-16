import { CustomError } from "../libs/response";
import confirmAction from "../Helpers/confirmAction";
import {toast} from "react-toastify";
import { axios } from "@/services/axios";
import authHeader from "./auth-header";
import { CompanyType } from "../types/company.type";
export const get_all_registered_companies = async (): Promise<GetCompanyType> => {


  try {
    const response = await axios.get(`/companies/all`,{
      headers: authHeader()
    }
    );
    return response.data;
  } catch (error: any) {
    throw new CustomError(error);
  }
};

export type GetCompanyType = {
  success: true;
  message: null;
  data: {
    companies: CompanyType[];
    // totalPages: number;
    // totalElements: number;
  };
};

