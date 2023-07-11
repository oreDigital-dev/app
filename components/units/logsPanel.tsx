import { Status } from "@/@types/status";
import StatusView from "../ui/status";
import { useEffect, useState } from "react";
import { baseUrl } from "@/utils/dataAssets";
import axios from "axios";

export default function LogsPanel({ siteId }: { siteId: string }) {
  const [siteIncidents, setSiteIncidents] = useState({});

  const getIncidents = async () => {
    try {
      const res = await axios.get(`${baseUrl}/incidents`);
      const incidents = res.data['incidents']

      const groupedIncidents = await incidents.reduce((acc: any, obj: any) => {
        const createdAt = obj.createdAt.slice(0, 19);

        if(!acc[createdAt]) {
          acc[createdAt] = []
        }

        acc[createdAt].push(obj)
        return acc;
      })
      const incidents_d = Object.keys(groupedIncidents)

      const incidents_e = incidents_d.map(item => {
        console.log(item);
        return item;
      })
      console.log(incidents_e)
      
      setSiteIncidents(groupedIncidents)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getIncidents();
  }, []);


  return (
    <div>
      <table
        className="w-full my-2 rounded-md bg-black-900 text-sm overflow-hidden "
        id="logs-panel"
      >
        <thead className="bg-[#3F3F3F] text-white text-left font-sans font-bold rounded-tl-md rounded-tr-md w-full">
          <tr>
            <th className="py-3 px-4">Time snapshot</th>
            <th className="py-3 px-4">Temperature (°C)</th>
            <th className="py-3 px-4">Humidity (mm/Hr)</th>
            <th className="py-3 px-4">Head Index (°C)</th>
            <th className="py-3 px-4">Status</th>
          </tr>
        </thead>

        <tbody>
          <tr className=" text-white text-left font-sans rounded-tl-md rounded-tr-md w-full h-10 logs-panel-td">
            <td className="py-1 px-4">Mon 23 Jan 2023 11:00 AM</td>
            <td className="py-1 px-4">20 °C</td>
            <td className="py-1 px-4">300 Atm</td>
            <td className="py-1 px-4">14 °C</td>
            <td className="py-1 px-4">
              <StatusView status={Status.DANGER} />
            </td>
          </tr>
          <tr className=" text-white text-left font-sans rounded-tl-md rounded-tr-md w-full h-10 logs-panel-td">
            <td className="py-1 px-4">Mon 23 Jan 2023 11:00 AM</td>
            <td className="py-1 px-4">20 °C</td>
            <td className="py-1 px-4">300 Atm</td>
            <td className="py-1 px-4">14 °C</td>
            <td className="py-1 px-4">
              <StatusView status={Status.DANGER} />
            </td>
          </tr>
          <tr className=" text-white text-left font-sans rounded-tl-md rounded-tr-md w-full h-10 logs-panel-td">
            <td className="py-1 px-4">Mon 23 Jan 2023 11:00 AM</td>
            <td className="py-1 px-4">20 °C</td>
            <td className="py-1 px-4">300 Atm</td>
            <td className="py-1 px-4">14 °C</td>
            <td className="py-1 px-4">
              <StatusView status={Status.DANGER} />
            </td>
          </tr>
          <tr className=" text-white text-left font-sans rounded-tl-md rounded-tr-md w-full h-10 logs-panel-td">
            <td className="py-1 px-4">Mon 23 Jan 2023 11:00 AM</td>
            <td className="py-1 px-4">20 °C</td>
            <td className="py-1 px-4">300 Atm</td>
            <td className="py-1 px-4">14 °C</td>
            <td className="py-1 px-4">
              <StatusView status={Status.DANGER} />
            </td>
          </tr>
          <tr className=" text-white text-left font-sans rounded-tl-md rounded-tr-md w-full h-10 logs-panel-td">
            <td className="py-1 px-4">Mon 23 Jan 2023 11:00 AM</td>
            <td className="py-1 px-4">20 °C</td>
            <td className="py-1 px-4">300 Atm</td>
            <td className="py-1 px-4">14 °C</td>
            <td className="py-1 px-4">
              <StatusView status={Status.DANGER} />
            </td>
          </tr>
          <tr className=" text-white text-left font-sans rounded-tl-md rounded-tr-md w-full h-10 logs-panel-td">
            <td className="py-1 px-4">Mon 23 Jan 2023 11:00 AM</td>
            <td className="py-1 px-4">20 °C</td>
            <td className="py-1 px-4">300 Atm</td>
            <td className="py-1 px-4">14 °C</td>
            <td className="py-1 px-4">
              <StatusView status={Status.DANGER} />
            </td>
          </tr>
          <tr className=" text-white text-left font-sans rounded-tl-md rounded-tr-md w-full h-10 logs-panel-td">
            <td className="py-1 px-4">Mon 23 Jan 2023 11:00 AM</td>
            <td className="py-1 px-4">20 °C</td>
            <td className="py-1 px-4">300 Atm</td>
            <td className="py-1 px-4">14 °C</td>
            <td className="py-1 px-4">
              <StatusView status={Status.DANGER} />
            </td>
          </tr>
          <tr className=" text-white text-left font-sans rounded-tl-md rounded-tr-md w-full h-10 logs-panel-td">
            <td className="py-1 px-4">Mon 23 Jan 2023 11:00 AM</td>
            <td className="py-1 px-4">20 °C</td>
            <td className="py-1 px-4">300 Atm</td>
            <td className="py-1 px-4">14 °C</td>
            <td className="py-1 px-4">
              <StatusView status={Status.DANGER} />
            </td>
          </tr>
          <tr className=" text-white text-left font-sans rounded-tl-md rounded-tr-md w-full h-10 logs-panel-td">
            <td className="py-1 px-4">Mon 23 Jan 2023 11:00 AM</td>
            <td className="py-1 px-4">20 °C</td>
            <td className="py-1 px-4">300 Atm</td>
            <td className="py-1 px-4">14 °C</td>
            <td className="py-1 px-4">
              <StatusView status={Status.DANGER} />
            </td>
          </tr>
          <tr className=" text-white text-left font-sans rounded-tl-md rounded-tr-md w-full h-10 logs-panel-td">
            <td className="py-1 px-4">Mon 23 Jan 2023 11:00 AM</td>
            <td className="py-1 px-4">20 °C</td>
            <td className="py-1 px-4">300 Atm</td>
            <td className="py-1 px-4">14 °C</td>
            <td className="py-1 px-4">
              <StatusView status={Status.DANGER} />
            </td>
          </tr>
          <tr className=" text-white text-left font-sans rounded-tl-md rounded-tr-md w-full h-10 logs-panel-td">
            <td className="py-1 px-4">Mon 23 Jan 2023 11:00 AM</td>
            <td className="py-1 px-4">20 °C</td>
            <td className="py-1 px-4">300 Atm</td>
            <td className="py-1 px-4">14 °C</td>
            <td className="py-1 px-4">
              <StatusView status={Status.DANGER} />
            </td>
          </tr>
          <tr className=" text-white text-left font-sans rounded-tl-md rounded-tr-md w-full h-10 logs-panel-td">
            <td className="py-1 px-4">Mon 23 Jan 2023 11:00 AM</td>
            <td className="py-1 px-4">20 °C</td>
            <td className="py-1 px-4">300 Atm</td>
            <td className="py-1 px-4">14 °C</td>
            <td className="py-1 px-4">
              <StatusView status={Status.DANGER} />
            </td>
          </tr>
          <tr className=" text-white text-left font-sans rounded-tl-md rounded-tr-md w-full h-10 logs-panel-td">
            <td className="py-1 px-4">Mon 23 Jan 2023 11:00 AM</td>
            <td className="py-1 px-4">20 °C</td>
            <td className="py-1 px-4">300 Atm</td>
            <td className="py-1 px-4">14 °C</td>
            <td className="py-1 px-4">
              <StatusView status={Status.DANGER} />
            </td>
          </tr>
          <tr className=" text-white text-left font-sans rounded-tl-md rounded-tr-md w-full h-10 logs-panel-td">
            <td className="py-1 px-4">Mon 23 Jan 2023 11:00 AM</td>
            <td className="py-1 px-4">20 °C</td>
            <td className="py-1 px-4">300 Atm</td>
            <td className="py-1 px-4">14 °C</td>
            <td className="py-1 px-4">
              <StatusView status={Status.DANGER} />
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
}
