import { Model } from "./model.type";

export type MiningSiteType = Model & {  
    id: "2c9e2f7b-236b-4e7f-9b86-435d32d5d3e9";
    name: string;
    createdAt: "2023-10-14T08:15:08.126Z";
    updatedAt: "2023-10-14T08:15:08.126Z";
    minerals: [
      {
        id: "730bc1d4-225b-4fbf-882a-c1ead58f7da2";
        name: string;
        mineralCode: string;
        mineralDescripption: string;
        createdAt: "2023-10-14T08:08:34.970Z";
        updatedAt: "2023-10-14T08:08:34.971Z"
      }
    ];
    company: {
      id: "d74eaecf-3b56-4abe-aa30-a04a67328a6a";
      name: string;
      email: string;
      phoneNumber: string;
      numberOfEmployees: 0;
      ownershipType: string;
      productionCapacity: 0;
      miniLicense: 0;
      createdAt: "2023-10-14T08:12:46.040Z";
      updatedAt: "2023-10-14T08:12:46.040Z";
      status: string;
      visibility: string;
    },
    address: {
      id: "5c5560be-dca6-41d4-b8b7-cc300f74e095";
      province: string;
      district: string;
      sector: string;
      cell: string;
      village: string;
      createdAt: "2023-10-14T08:15:08.126Z";
      updatedAt: "2023-10-14T08:15:08.126Z";
      country: string;
    }
  };


