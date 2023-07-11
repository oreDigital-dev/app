import { Status } from "./status";

export interface MiningSite {
    id: string;
    name: string;
    location: string;
    img: string;
    status: Status;
}