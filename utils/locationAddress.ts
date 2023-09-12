import axios from "axios";
let allData: any;


export async function getAllData() {
    const url = `utils/locationData.json`;
  
    try {
      const response = await axios.get(url);
      allData = response.data;
      console.log(allData);
    } catch (err) {
      console.log(err);
    }
  }
  
  

export function getAllDataInternal(this:any) {
const url = `utils/locationData.json`;
return axios.get(url);
}

export function getProvinces(): string[] {
    if(allData) {
    return Object.keys(allData);
    }
    return [];
}

export function getDistricts(province: string): string[] {
try {
    const data = allData[province];
    return Object.keys(data);
} catch (error) {
    console.log(error);
    return [];
}
}

export function getSectors(province: string, district: string): string[] {
try {
    const data = allData[province][district];
    return Object.keys(data);
} catch (error) {
    console.log(error);
    return [];
}
}

export function getCells(province: string, district: string, sector: string): string[] {
try {
    const data = allData[province][district][sector];
    return Object.keys(data);
} catch (error) {
    console.log(error);
    return [];
}
}

export function getVillages(province: string, district: string, sector: string, cell: string): string[] {
try {
    const data = allData[province][district][sector][cell];
    return data
} catch (error) {
    console.log(error);
    return [];
}
}