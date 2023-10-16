import { Model } from "./model.type";

export type  CompanyType = Model & {
    name: string;
      email: string;
      phoneNumber: string;
      numberOfEmployees: number;
      ownershipType: string;
      productionCapacity: number;
      miniLicense: number;
      createdAt: "2023-10-10T19:13:01.547Z";
      updatedAt: "2023-10-10T19:13:01.547Z";
      id: number;
      status: string;
      visibility: string;
      address: {
        province: string;
        district: string;
        sector: string;
        cell: string;
        village: string;
        createdAt: "2023-10-10T19:13:01.547Z";
        updatedAt: "2023-10-10T19:13:01.547Z";
        id: 1;
        country: string;

      }
};
export type  CompanyDetails = Model & {
  id:number;
  name:string;
  productionCapacity: number;
  visibility: string;
  address:{
    district:string;
  }

}