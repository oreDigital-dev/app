import { CustomError } from "../libs/response";
import { EmployeeType } from "../types/employee.type";
import {
  PaginationOptionType,
  PaginationType
} from "../types/pagination.type";
import { ResponseType } from "../types/response.type";
import { axios } from "@/services/axios";
import authHeader from "./auth-header";
export const get_employees_by_company = async ({
  page,
  size,
}: PaginationOptionType & {
}): Promise<ResponseType<PaginationType<EmployeeType>>> => {
  try {
    const query = `page=${page ?? 1}&limit=${size ?? 5}`;
    const response = await axios.get(`employees/all/by-loggedin-company?${query}`,{
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
    Employees: [];
    totalPages: number;
    totalElements: number;
  };
};

