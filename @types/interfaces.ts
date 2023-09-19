import { NotificationPanelProps } from "@/components/units/NotificationPanel";
import { Provinces, Statuses, TimeZone } from "./enum";
import { Status } from "./status";

export interface MiningSite {
    id: string;
    minesiteName: string;
    headQuartersLocation: string;
    img: string;
    status: Status;
    address: {
        sector: String,
        district: String
    }

} 


//mfo
export interface MfoDetails {
    id:number;
    title:String;
    reports:Number;
    category:String;
    
}
export interface MfoRowEntryDetails {
    time:{
        hour:Number,
        min:Number,
        dayRegion:TimeZone
    };
    entryCategory:string;
    tagNo:Number;
    qty:Number;
    variety:String;
    status:Statuses,
}



export interface CompanyRecords {
    id: string;
    title: string;
    sites: Number;
    reports: Number;

}
export interface RmbDetails {
    id: string;
    title: string;
    viewName: string;
    zones?: Number;
    reports?: Number;
    companies?: Number;
    url:string;
}
export interface CompanyDetails {
    companyName: string;
    hqName: string;
    licenseType: string;
    id:number;
}
export interface ExpandedCompanyDetails {
    companyName:string;
    districtLocation:string;
    activeSites:number;
    description:string
    id:number;

}
export interface SiteDetails {
siteName:string;
siteLocation:string;
siteGeolocation:{
latitude:string,
longitude:string
},
dateOfCreation:string ;
}
export interface MoreCompanyDetails {
    id:number,
    companyName:string;
    companyOverview:string;
    companyType:string;
    companyLicense:string;
    companyCEO:string;
    formed:number;
    headQuarters:string;
    sites:SiteDetails[]

}
export interface ReportDetails {
    id:number;
    reportName:string;
    issuedDate:string;
}
export interface CpyReports {
    companyName:string;
    id:number;
    companyReports:ReportDetails[]
}
export interface NotificationPanel extends NotificationPanelProps{}
export interface EmployeeFields {
    fullName:string;
    email:string;
    password:string;
    id:string;
    location:{
        village:String;
        cell:String;
        sector:String;
        district:string;
        province:Provinces,
    };
    key:String;
    company:String;
}

//company form data interfaces
export interface SteponeFormdata {
    
}