import { Statuses, TimeZone } from "@/@types/enum";
import {
  CompanyDetails,
  CompanyRecords,
  ExpandedCompanyDetails,
  MoreCompanyDetails,
  RmbDetails,
  MfoDetails,
  MfoRowEntryDetails,
  NotificationPanel,
  CpyReports,
} from "@/@types/interfaces";

import {
  AccountsIcon,
  DashBoardIcon,
  EmployeesIcon,
  FormIcon,
  LogsIcon,
  ProductionIcon,
  ReportsIcon,
  SettingsIcon,
  SitesIcon,
  SupportIcon,
  TagIcon,
  TraceabilityIcon,
  feedBackIcon,
  helpIcon,
  logoutIcon,
} from "@/components/icons";
// export let Province: String[] = ["", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
export const districts: String[] = [
  "Gasabo",
  "Kicukiro",
  "Nyarugenge",
  "Kamonyi",
  "Muhanga",
  "Ruhango",
  "Nyanza",
  "Huye",
  "Gisagara",
  "Nyamagabe",
  "Nyamasheke",
  "Rusizi",
  "Karongi",
  "Rutsiro",
  "Rubavu",
  "Nyabihu",
  "Ngororero",
  "Musanze",
  "Gakenke",
  "Rulindo",
  "Gicumbi",
  "Burera",
  "Rwamagana",
  "Kayonza",
  "Kirehe",
  "Ngoma",
  "Nyagatare",
  "Gatsibo",
  "Bugesera",
  "Kicukiro",
  "Rubavu",
];

export const ownerShipDetails = ["PRIVATE", "PUBLIC"];

export const loginTypes = ["RMB", "COMPANY"];
export const notifications: NotificationPanel[] = [
  {
    title: "Muhabura site sent an incident report ",
    time: {
      date: 12,
      year: 2022,
      month: "Jul",
      hour: 12,
      min: 30,
      timeOfDay: TimeZone.Evening,
    },
  },
  {
    title: "Zuba miners site sent a monthly report ",
    time: {
      date: 12,
      year: 2023,
      month: "Dec",
      hour: 12,
      min: 30,
      timeOfDay: TimeZone.Morning,
    },
  },
];
export const profileLinks = [
  {
    icon: SettingsIcon,
    name: "Settings & privacy",
    link: "",
  },
  {
    icon: helpIcon,
    name: "Help & Support",
    link: "",
  },
  {
    icon: feedBackIcon,
    name: "Give feedback",
    link: "",
  },
  {
    icon: logoutIcon,
    name: "Logout",
    link: "",
  },
];

export const notificationLinks = [
  {
    id: 1,
    name: "All",
    number: 90,
  },
  {
    id: 2,
    name: "Minesites & Incidents",
    number: 34,
  },
  {
    id: 3,
    name: "Companies & Reports",
    number: 23,
  },
  {
    id: 4,
    name: "Users & employees",
    number: 12,
  },
];

export const mineSiteDetails = [
  {
    name: "minesiteName",
    type: "text",
  },
  {
    name: "MineralTypes",
    type: "select",
  },
  {
    name: "Country",
    type: "text",
  },
  {
    name: "District",
    type: "text",
  },
];

export const companyHolds: CompanyRecords[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    title: "Mine sites under contol",
    sites: 30,
    reports: 0,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    title: "Reported incidents",
    sites: 0,
    reports: 3,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    title: "Number of employees",
    sites: 30,
    reports: 0,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    title: "Mine sites under contol",
    sites: 30,
    reports: 0,
  },
];
export const rmbHolds: RmbDetails[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    title: "Companies",
    companies: 6,
    viewName: "companies",
    url: "companies",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    title: "Pending incidents",
    reports: 3,
    viewName: "reports",
    url: "reports",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    title: "Danger Zones",
    zones: 3,
    viewName: "zones",
    url: "",
  },
];
export const mfoHols: MfoDetails[] = [
  {
    id: 0,
    category: "Tags",
    reports: 121,
    title: "Available tags in total",
  },
  {
    id: 1,
    category: "Kgs",
    reports: 0,
    title: "Prodution (Kg)",
  },
  {
    id: 2,
    category: "Forms",
    reports: 30,
    title: "Forms submitted",
  },
];
export const quickActions = [
  {
    text: "Add user",
    textColor: "#3949D2",
    bgColor: "#3949D210",
  },
  {
    text: "Add mine site",
    textColor: "#FFB800",
    bgColor: "#FFB80010",
  },
  {
    text: "Add employee",
    textColor: "#0057FF",
    bgColor: "#0057FF10",
  },
  {
    text: "Generate monthly report",
    textColor: "#2CA900",
    bgColor: "#2CA90010",
  },
  {
    text: "Contact support",
    textColor: "#D29539",
    bgColor: "#D2953910",
  },
];
export const rmbQuickActions = [
  {
    text: "Add Company",
    textColor: "#0057FF",
    bgColor: "#0057FF10",
  },
  {
    text: "View Companies",
    textColor: "#2CA900",
    bgColor: "#2CA90010",
  },
  {
    text: "Contact support",
    textColor: "#D29539",
    bgColor: "#D2953910",
  },
];
export const mfoLatestActivities: MfoRowEntryDetails[] = [
  {
    time: {
      dayRegion: TimeZone.Evening,
      hour: 1,
      min: 12,
    },
    entryCategory: "Smelted production form",
    tagNo: 12,
    qty: 50,
    status: Statuses.Accepted,
    variety: "Gold",
  },
  {
    time: {
      dayRegion: TimeZone.Morning,
      hour: 4,
      min: 55,
    },
    entryCategory: "Smelted production form",
    tagNo: 2000,
    qty: 520,
    status: Statuses.Rejected,
    variety: "Gold",
  },
  {
    time: {
      dayRegion: TimeZone.Evening,
      hour: 7,
      min: 12,
    },
    entryCategory: "Smelted production form",
    tagNo: 12,
    qty: 50,
    status: Statuses.Pending,
    variety: "Gold",
  },
];

export const mfoQuickActions = [
  {
    text: "View Tag",
    textColor: "#3949D2",
    bgColor: "#3949D210",
  },
  {
    text: "Create a form",
    textColor: "#FFB800",
    bgColor: "#FFB80010",
  },
  {
    text: "Contact support",
    textColor: "#D29539",
    bgColor: "#D2953910",
  },
];

export interface DashBoardSection {
  title: string;
  url: string;
  icon: () => JSX.Element;
}

export const links: DashBoardSection[] = [
  {
    title: "Dashboard",
    url: "dashboard",
    icon: DashBoardIcon,
  },
  {
    title: "Sites",
    url: "sites",
    icon: SitesIcon,
  },
  {
    title: "Reports",
    url: "reports",
    icon: ReportsIcon,
  },
  {
    title: "Employees",
    url: "employees",
    icon: EmployeesIcon,
  },
  {
    title: "Accounts",
    url: "settings",
    icon: AccountsIcon,
  },
  {
    title: "Logs",
    url: "logs",
    icon: LogsIcon,
  },
  {
    title: "Support",
    url: "support",
    icon: SupportIcon,
  },
];
export const cardDetailsData: ExpandedCompanyDetails[] = [
  {
    id: 1,
    companyName: "Rwanda Mining Company (RMC)",
    activeSites: 12,
    description:
      "is a subsidiary of Tri Metals Mining and is involved in mineral exploration and mining activities in Rwanda.",
    districtLocation: "Kicukiro",
  },
  {
    id: 2,
    companyName: " LUNA SMELTER",
    activeSites: 12,
    description:
      "is a subsidiary of Tri Metals Mining and is involved in mineral exploration and mining activities in Rwanda.",
    districtLocation: "Kicukiro",
  },
  {
    id: 3,
    companyName: "AL-KAREEM Ltd",
    activeSites: 12,
    description:
      "is a subsidiary of Tri Metals Mining and is involved in mineral exploration and mining activities in Rwanda.",
    districtLocation: "Kicukiro",
  },
  {
    id: 4,
    companyName: "Rwanda Mining Company (RMC)",
    activeSites: 12,
    description:
      "is a subsidiary of Tri Metals Mining and is involved in mineral exploration and mining activities in Rwanda.",
    districtLocation: "Kicukiro",
  },
  {
    id: 5,
    companyName: "Rwanda Mining Company (RMC)",
    activeSites: 12,
    description:
      "is a subsidiary of Tri Metals Mining and is involved in mineral exploration and mining activities in Rwanda.",
    districtLocation: "Kicukiro",
  },
  {
    id: 6,
    companyName: "Rwanda Mining Company (RMC)",
    activeSites: 12,
    description:
      "is a subsidiary of Tri Metals Mining and is involved in mineral exploration and mining activities in Rwanda.",
    districtLocation: "Kicukiro",
  },
  {
    id: 7,
    companyName: "Rwanda Mining Company (RMC)",
    activeSites: 12,
    description:
      "is a subsidiary of Tri Metals Mining and is involved in mineral exploration and mining activities in Rwanda.",
    districtLocation: "Kicukiro",
  },
  {
    id: 8,
    companyName: "Rwanda Mining Company (RMC)",
    activeSites: 12,
    description:
      "is a subsidiary of Tri Metals Mining and is involved in mineral exploration and mining activities in Rwanda.",
    districtLocation: "Kicukiro",
  },
];
export const moreCompanyDetailsData: MoreCompanyDetails[] = [
  {
    id: 1,
    companyCEO: "Unknown",
    companyName: "Rwanda Mining Company",
    companyOverview:
      "is a subsidiary of Tri Metals Mining and is involved in mineral exploration and mining activities in Rwanda.",
    companyLicense: "Mineral Processing",
    companyType: "Production company",
    headQuarters: "Kicukiro/Rwanda",
    formed: 2019,
    sites: [
      {
        siteName: "Gihanga Site",
        siteLocation: "Muhabura, Gihanga",
        siteGeolocation: {
          latitude: "33.99E",
          longitude: "44.56",
        },
        dateOfCreation: "12 May 2026",
      },
      {
        siteName: "Kabuye Site",
        siteLocation: "Muhabura, Gasabo",
        siteGeolocation: {
          latitude: "30.99E",
          longitude: "44.56",
        },
        dateOfCreation: "12 May 2026",
      },
    ],
  },
  {
    id: 2,
    companyCEO: "Unknown2",
    companyName: "Rwanda Mining Company2",
    companyOverview:
      "is a subsidiary of Tri Metals Mining and is involved in mineral exploration and mining activities in Rwanda.",
    companyLicense: "Mineral Processing2",
    companyType: "Production company2",
    headQuarters: "Kicukiro/Rwanda2",
    formed: 2020,
    sites: [
      {
        siteName: "Kabuye Site",
        siteLocation: "Muhabura,Gasabo",
        siteGeolocation: {
          latitude: "30.99E",
          longitude: "44.56",
        },
        dateOfCreation: "12 May 2026",
      },
      {
        siteName: "Gihanga Site",
        siteLocation: "Muhabura,Gihanga",
        siteGeolocation: {
          latitude: "33.99E",
          longitude: "44.56",
        },
        dateOfCreation: "12 May 2026",
      },
    ],
  },
];
export const mfoLinks: DashBoardSection[] = [
  {
    title: "Dashboard",
    url: "/",
    icon: DashBoardIcon,
  },
  {
    title: "Forms",
    url: "forms",
    icon: FormIcon,
  },
  {
    title: "Tags",
    url: "tags",
    icon: TagIcon,
  },
  {
    title: "Production",
    url: "production",
    icon: ProductionIcon,
  },
  {
    title: "Traceability",
    url: "traceabililty",
    icon: TraceabilityIcon,
  },
];
export const rmbLinks: DashBoardSection[] = [
  {
    title: "Dashboard",
    url: "/",
    icon: DashBoardIcon,
  },
  {
    title: "Companies",
    url: "companies",
    icon: SitesIcon,
  },
  {
    title: "Reports",
    url: "reports",
    icon: ReportsIcon,
  },
];

export const companyDetails: CompanyDetails[] = [
  {
    companyName: "RMC",
    hqName: "Muhabura,Gihanga",
    licenseType: "Mineral processing",
    id: 1,
  },
  {
    companyName: "LUNA SMELTER",
    hqName: "Muhabura,Gihanga",
    licenseType: "Mineral processing",
    id: 2,
  },
  {
    companyName: "AL-KAREEM Ltd",
    hqName: "Muhabura,Gihanga",
    licenseType: "Mineral processing",
    id: 3,
  },
  {
    companyName: "RMC",
    hqName: "Muhabura,Gihanga",
    licenseType: "Mineral processing",
    id: 4,
  },
  {
    companyName: "RMC",
    hqName: "Muhabura,Gihanga",
    licenseType: "Mineral processing",
    id: 5,
  },
  {
    companyName: "RMC",
    hqName: "Muhabura,Gihanga",
    licenseType: "Mineral processing",
    id: 6,
  },
  {
    companyName: "RMC",
    hqName: "Muhabura,Gihanga",
    licenseType: "Mineral processing",
    id: 7,
  },
  {
    companyName: "RMC",
    hqName: "Muhabura,Gihanga",
    licenseType: "Mineral processing",
    id: 8,
  },
];

export const reportsData: CpyReports[] = [
  {
    id: 1,
    companyName: "LUNA SMELTER",
    companyReports: [
      {
        id: 1,
        issuedDate: "12 May 2023",
        reportName: "Temperature_rise_report-2023-08-10_Mashyuza-zinc-mine.pdf",
      },
      {
        id: 2,
        issuedDate: "15 June 2023",
        reportName: "Temperature_rise_report-2023-08-10_Mashyuza-zinc-mine.pdf",
      },
      {
        id: 3,
        issuedDate: "15 June 2023",
        reportName: "Temperature_rise_report-2023-08-10_Mashyuza-zinc-mine.pdf",
      },
      {
        id: 4,
        issuedDate: "15 June 2023",
        reportName: "Temperature_rise_report-2023-08-10_Mashyuza-zinc-mine.pdf",
      },
      {
        id: 5,
        issuedDate: "15 June 2023",
        reportName: "Temperature_rise_report-2023-08-10_Mashyuza-zinc-mine.pdf",
      },
    ],
  },
  {
    id: 2,
    companyName: "AL-KAREEM Ltd",
    companyReports: [
      {
        id: 1,
        issuedDate: "23 September 2022",
        reportName: "Temperature_rise_report-2023-08-10_Mashyuza-zinc-mine.pdf",
      },
      {
        id: 2,
        issuedDate: "23 September 2022",
        reportName: "Temperature_rise_report-2023-08-10_Mashyuza-zinc-mine.pdf",
      },
      {
        id: 3,
        issuedDate: "23 September 2022",
        reportName: "Temperature_rise_report-2023-08-10_Mashyuza-zinc-mine.pdf",
      },
      {
        id: 4,
        issuedDate: "23 September 2022",
        reportName: "Temperature_rise_report-2023-08-10_Mashyuza-zinc-mine.pdf",
      },
      {
        id: 5,
        issuedDate: "23 September 2022",
        reportName: "Temperature_rise_report-2023-08-10_Mashyuza-zinc-mine.pdf",
      },
    ],
  },
];
export const piData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];
export const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
export const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const notificationLength: String =
  "Hello your minesite has quired the highest temperature  highest temperature  highest temperature";
// export const baseUrli = "http://localhost:5000/api/v1"
export const baseUrli = "http://194.163.167.131:8040";
