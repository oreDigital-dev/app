import { CustomError } from "../libs/response";
import confirmAction from "../Helpers/confirmAction";
import {toast} from "react-toastify";
import { axios } from "@/services/axios";
import authHeader from "./auth-header";
import { RescueTeamType } from "../types/rescueTeams.type";
export const get_all_rescue_teams_by_status = async (
 status:string
): Promise<GetRescueTeamsType> => {

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

export type GetRescueTeamsType = {
  success: true;
  message: null;
  data: {
    rescueTeams: RescueTeamType[];
    // totalPages: number;
    // totalElements: number;
  };
};
export const approveOrRejectRescueTeams = async (id: string, action: string): Promise<void> => {
  const response = await confirmAction('Approve or Reject', 'Are you sure you want to update this Rescue Team?');

  if (response) {
    try {
      const response = await axios.put(`/rescue-teams/approve-or-reject?action=${action}&id=${id}`, {
        id,
        action
      }, {
        headers: authHeader(),
      });
      toast('Rescue Team successfully updated');
    } catch (error) {
      toast('Error in updating Company');
    }
  }
};
