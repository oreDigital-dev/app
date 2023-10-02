import { CustomError } from "../libs/response";

import { ResponseType } from "../types/response.type";
import { axios } from "@/services/axios";
import authHeader from "./auth-header";
import { EmployeeType } from "../types/employee.type";
export const get_employees_by_company = async (): Promise<GetEmployeeUserType> => {
  try {
    const response = await axios.get(`employees/all/by-loggedin-company`,{
      headers: authHeader()
    }
    );
    return response.data;
  } catch (error: any) {
    throw new CustomError(error);
  }
};

export type GetEmployeeUserType = {
  success: true;
  message: null;
  data: {
    employees: EmployeeType[];
    totalPages: number;
    totalElements: number;
  };
};

