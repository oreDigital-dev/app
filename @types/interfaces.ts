import { Status } from "./status";

export interface MiningSite {
    id: string;
    minesiteName: string;
    headQuartersLocation: string;
    img: string;
    status: Status;
    address:{
        sector:String,
        district:String
    }
  
}
export interface CompanyRecords {
    id: string;
    title: string;
    sites: Number;
    reports: Number;
    
}