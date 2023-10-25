import { CustomError } from "../libs/response";
import confirmAction from "../Helpers/confirmAction";
import {toast} from "react-toastify";
import { axios } from "@/services/axios";
import authHeader from "./auth-header";
import { CompanyType } from "../types/company.type";
import { MiningSiteType } from "../types/miningSite.type";
export const get_all_registered_mineSites = async (): Promise<GetMiningSiteType> => {

  try {
    // const query = `order=${order ?? "ASC"}page=${page ?? 1}&take=${take ?? 10}`
    const response = await axios.get(`minesites/for-loggedIn-company`,{
      headers: authHeader()
    }
    );
    return response.data;
  } catch (error: any) {
    throw new CustomError(error);
  }
};

export type GetMiningSiteType = {
  success: true;
  message: null;
  data: {
    miningSites: MiningSiteType[];
    // totalPages: number;
    // totalElements: number;
  };
};
export const approveRejectMineSites = async (id: number, action: string): Promise<void> => {
  const response = await confirmAction('Approve or Reject', 'Are you sure you want to update this Company?');

  if (response) {
    try {
      const response = await axios.put(`/companies/approve-or-reject?action=${action}&id=${id}`, {
        id,
        action
      }, {
        headers: authHeader(),
      });
      toast('Company successfully updated');
    } catch (error) {
      toast('Error in updating Company');
    }
  }
};
