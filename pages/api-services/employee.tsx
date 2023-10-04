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
export const approveOrRejectEmployee = async (id: number, action: string): Promise<void> => {
  const response = await confirmAction('Approve or Reject', 'Are you sure you want to update this employee?');

  if (response) {
    try {
      const response = await axios.put(`/employees/approve-or-reject?id=${id}&action=${action}`, {
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
export const deleteCompanyEmployee = async(id: number):Promise<void> => {
  const response = await confirmAction('Delete Employee', 'Are you sure you want to delete this employee?');
if(response){
  try{
    const resp = await axios.delete(`/employees/${id}`,{
      headers:authHeader()
    });
    toast.success('Employee successfully deleted');
  } catch (error) {
    toast.error('Error in deleting employee');
  }
}
}
