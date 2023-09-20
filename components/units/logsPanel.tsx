import { Status } from "@/@types/status";
import StatusView from "../ui/status";
import { useEffect, useState } from "react";
import { baseUrli } from "@/utils/dataAssets";

import { group } from "console";
import { axios } from "@/services/axios";

export default function LogsPanel({ siteId }: { siteId: string }) {
  const [siteIncidents, setSiteIncidents] = useState<{ [key: string]: any[] }>(
    {}
  );

  let i = 0;
  const getIncidents = async () => {
    try {
      const res = await axios.get(`/incidents/ofloggedIn-company`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
        },
      });
    
      const incidents = res.data.data;
      console.log(`incidents are ${incidents}`)
      const groupedIncidents: { [key: string]: any[] } = {};

      incidents.forEach((incident: any) => {
        const createdAt: string = incident.createdAt;
        if (groupedIncidents[createdAt]) {
          groupedIncidents[createdAt].push(incident);
        } else {
          groupedIncidents[createdAt] = [incident];
        }
      });
      setSiteIncidents(groupedIncidents);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getIncidents();
    console.log(siteIncidents);
  }, []);

  if (Object.keys(siteIncidents).length == 0)
    return (
      <div className="text-black-500">
        Wait while we get all the logs for you....
      </div>
    );
  return (
    <div>
      <table
        className="w-full my-2 rounded-md bg-black-900 text-sm overflow-hidden "
        id="logs-panel"
      >
        <thead className="bg-[#3F3F3F] text-white text-left font-sans font-bold rounded-tl-md rounded-tr-md w-full">
          <tr>
            <th className="py-3 px-4">Time snapshot</th>
            <th className="py-3 px-4">Incident Type</th>
            <th className="py-3 px-4">Value</th>
            <th className="py-3 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {siteIncidents &&
            Object.keys(siteIncidents).map((createdAt, index) => {
              const incidentsForDate = siteIncidents[createdAt];

              const temperature1 = incidentsForDate[0].mesurement;
              const atmosphericPressure =
                incidentsForDate[1] == undefined
                  ? "empty"
                  : incidentsForDate[1].mesurement;
              const temperature2 =
                incidentsForDate[2] == undefined
                  ? "empty"
                  : incidentsForDate[2].mesurement;
              console.log(incidentsForDate[1]);
              return (
                <tr
                  key={index}
                  className="text-white  border text-left font-sans rounded-tl-md rounded-tr-md w-full h-10 logs-panel-td"
                >
                  <td className="py-1 px-4">{createdAt}</td>
                  {incidentsForDate.map((incident, index) => {
                    return (
                      <td key={index} className="py-1 px-4">
                        {incident.incidentType}
                      </td>
                    );
                  })}
                  {incidentsForDate.map((incident, index) => {
                    return (
                      <td key={index} className="py-1 px-4">
                        {incident.mesurement} °C
                      </td>
                    );
                  })}
                  {incidentsForDate.map((incident, index) => {
                    return (
                      <td key={index} className="py-1 px-4">
                        <StatusView status={incident.status} />
                      </td>
                    );
                  })}
                  {/* <StatusView status={"HEALTHY"} /> */}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
