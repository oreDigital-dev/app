import { CustomError } from "../libs/response";
import confirmAction from "../Helpers/confirmAction";
import {toast} from "react-toastify";
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
    // totalPages: number;
    // totalElements: number;
  };
};
export const approveOrRejectEmployee = async (id: string, action: string): Promise<void> => {
  const response = await confirmAction('Approve', 'Are you sure you want to update this employee?');

  if (response) {
    try {
      const response = await axios.put(`/employees/approve-or-reject`, {
        id,
        action
      }, {
        headers: authHeader(),
      });
      toast.success('Employee successfully updated');
    } catch (error) {
      toast.error('Error in updating employee');
    }
  }
};





