import { Status } from "./status";

export interface MiningSite {
    id: string;
    name: string;
    location: string;
    img: string;
    status: Status;
}
export interface CompanyRecords {
    id: string;
    title: string;
    sites: Number;
    reports: Number;
    
}