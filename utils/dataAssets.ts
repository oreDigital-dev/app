import { CompanyRecords } from "@/@types/interfaces";

import { AccountsIcon, DashBoardIcon, EmployeesIcon, LogsIcon, ReportsIcon, SettingsIcon, SitesIcon, SupportIcon, feedBackIcon, helpIcon, logoutIcon } from "@/components/icons";
export let  countryList : String[] = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
export const districts : String[] = [
    'Gasabo',
    'Kicukiro',
    'Nyarugenge',
    'Kamonyi',
    'Muhanga',
    'Ruhango',
    'Nyanza',
    'Huye',
    'Gisagara',
    'Nyamagabe',
    'Nyamasheke',
    'Rusizi',
    'Karongi',
    'Rutsiro',
    'Rubavu',
    'Nyabihu',
    'Ngororero',
    'Musanze',
    'Gakenke',
    'Rulindo',
    'Gicumbi',
    'Burera',
    'Rwamagana',
    'Kayonza',
    'Kirehe',
    'Ngoma',
    'Nyagatare',
    'Gatsibo',
    'Bugesera',
    'Kicukiro',
    'Rubavu'
]


export const ownerShipDetails = ["PRIVATE", "PUBLIC"]

export const loginTypes = ["RMB_MEMBER","USER", "POLICE","RED_CROSS", "COMPANY_WORKER", "SYSTEM_ADMIN" ]

export const profileLinks = [
    {
        icon:SettingsIcon,
        name:"Settings & privacy",
        link:""
    },
    {
        icon:helpIcon,
        name:"Help & Support",
        link:""
    },
    {
        icon:feedBackIcon,
        name:"Give feedback",
        link:""
    },
    {
        icon:logoutIcon,
        name:"Logout",
        link:""
    }
]

export const notificationLinks = [
    {
        id:1,
        name:"All",
        number:90,
    },
    {
        id:2,
        name:"Minesites & Incidents",
        number:34,
    },
    {
        id:3,
        name:"Companies & Reports",
        number:23
    },
    {
        id:4,
        name:"Users & employees",
        number:12,
    }
]

export const mineSiteDetails = [
    {
        name:"minesiteName",
        type:"text"
    },
    {
        name:"MineralTypes",
        type:"select"
    },
    {
        name:"Country",
        type:"text"
    },
    {
        name:"District",
        type:"text"
    }
]


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
 export  const quickActions = [
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
      url: "accounts",
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


 export  const piData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
  ];
 export  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
 export  const data = [
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
export const notificationLength : String = "Hello your minesite has quired the highest temperature  highest temperature  highest temperature"
// export const baseUrli = "http://localhost:5000/api/v1"
export const baseUrli = "https://ore-d-iot.onrender.com/api/v1"