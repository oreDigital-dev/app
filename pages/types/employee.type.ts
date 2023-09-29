import { Model } from "./model.type";

export type EmployeeType = Model & {

      firstName: string;
      lastName: string;
      email: string;
      gender: string;
      national_id: string;
      phonenumber: string;
      createdAt: string;
      updatedAt: string;
      id: Number,
      salary: Number,
      last_login: null,
      employeeStatus: Number,
      role: string

};
