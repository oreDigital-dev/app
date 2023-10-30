import { CustomError } from "../libs/response";
import {toast} from "react-toastify";
import { axios } from "@/services/axios";
import authHeader from "./auth-header";
import { EmployeeType } from "../types/employee.type";
import { PaginationOptionType } from "../types/pagination.type";
import confirmAction from "../Helpers/confirmAction";

export const get_employees_by_company = async (
  status:string
): Promise<GetEmployeeUserType> => {

  try {
    // const query = `order=${order ?? "ASC"}page=${page ?? 1}&take=${take ?? 10}`
    const response = await axios.get(`employees/all/by-employee-status?status=${status}`,{
      headers: authHeader()
    }
    );
    return response.data;
  } catch (error: any) {
    throw new CustomError(error);
  }
};


export const get_employees_by_rescue_team = async (
  status:string
): Promise<GetEmployeeUserType> => {

  try {
    // const query = `order=${order ?? "ASC"}page=${page ?? 1}&take=${take ?? 10}`
    const response = await axios.get(`rescue-teams/all/by-status?status=${status}`,{
      headers: authHeader()
    }
    );
    return response.data;
  } catch (error: any) {
    throw new CustomError(error);
  }
};
export const get_employees_by_rmb = async (
  status:string
): Promise<GetEmployeeUserType> => {

  try {
    // const query = `order=${order ?? "ASC"}page=${page ?? 1}&take=${take ?? 10}`
    const response = await axios.get(`rmb/employees/all-by-status?status=${status}`,{
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
      toast('Employee successfully updated');
    } catch (error) {
      toast('Error in updating employee');
    }
  }
};
export const approveOrRejectRescueTeamEmployee = async (id: number, action: string): Promise<void> => {
  const response = await confirmAction('Approve or Reject', 'Are you sure you want to update this employee?');

  if (response) {
    try {
      const response = await axios.put(`/rescue-teams/employees/xapprove-or-reject?action=${action}&id=${id}`, {
        id,
        action
      }, {
        headers: authHeader(),
      });
      toast('Employee successfully updated');
    } catch (error) {
      toast('Error in updating employee');
    }
  }
};
export const approveOrRejectRmbEmployee = async (id: number, action: string): Promise<void> => {
  const response = await confirmAction('Approve or Reject', 'Are you sure you want to update this employee?');

  if (response) {
    try {
      const response = await axios.put(`/rmb/approve-or-reject?id=${id}&action=${action}`, {
        id,
        action
      }, {
        headers: authHeader(),
      });
      toast('Employee successfully updated');
    } catch (error) {
      toast('Error in updating employee');
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
    toast('Employee successfully deleted');
  } catch (error) {
    toast('Error in deleting employee');
  }
}
}
