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
    id?:number;

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
    companyName:string;
    companyOverview:string;
    companyType:string;
    companyLicense:string;
    companyCEO:string;
    formed:number;
    headQuarters:string;
    sites:SiteDetails[]

}
