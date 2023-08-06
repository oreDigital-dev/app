import { Status } from "@/@types/status";
import StatusView from "../ui/status";
import { useEffect, useState } from "react";
import { baseUrl } from "@/utils/dataAssets";
import axios from "axios";

export default function LogsPanel({ siteId }: { siteId: string }) {
  const [siteIncidents, setSiteIncidents] = useState<object | any>({});

  const getIncidents = async () => {
    try {
      const res = await axios.get(`${baseUrl}/incidents`);
      const incidents = res.data["incidents"];

      const groupedIncidents = await incidents.reduce((acc: any, obj: any) => {
        const createdAt = obj.createdAt.slice(0, 19);

        if (!acc[createdAt]) {
          acc[createdAt] = [];
        }

        acc[createdAt].push(obj);
        return acc;
      });
      setSiteIncidents(groupedIncidents);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getIncidents();
  }, []);

  if (Object.keys(siteIncidents).length == 0)
    return <div>Wait while we get all the logs for you....</div>;
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
          {Object.keys(siteIncidents)
            .filter((inc: any) => siteIncidents[inc].length >= 3)
            .map((arrItem) => {
              console.log(siteIncidents[arrItem][0]["mesurement"]);
              if (!siteIncidents[arrItem][0]["mesurement"]) return;
              return (
                <tr className=" text-white text-left font-sans rounded-tl-md rounded-tr-md w-full h-10 logs-panel-td">
                  <td className="py-1 px-4">{siteIncidents.createdAt}</td>
                  <td className="py-1 px-4">
                    {siteIncidents[arrItem][0]["mesurement"]} °C
                  </td>
                  <td className="py-1 px-4">
                    {siteIncidents[arrItem][1]["mesurement"]} Atm
                  </td>
                  <td className="py-1 px-4">
                    {siteIncidents[arrItem][2]["mesurement"]} °C
                  </td>
                  <td className="py-1 px-4">
                    <StatusView status={"HEALTHY"} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
