import StatusView from "../ui/status";
import { useEffect, useState } from "react";
import { axios } from "@/services/axios";

export default function LogsPanel({ siteId }: { siteId: string }) {
  const [siteIncidents, setSiteIncidents] = useState<{ [key: string]: any[] }>(
    {}
  );

  let i = 0;
  const getIncidents = async () => {
    try {
      const res = await axios.get(`/incidents/all`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("refreshToken")!
          )}`,
        },
      });

      const incidents = res.data.data;
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
              const temperature1 = incidentsForDate[0].measurement;
              const atmosphericPressure =
                incidentsForDate[1] == undefined
                  ? "empty"
                  : incidentsForDate[1].measurement;
              const temperature2 =
                incidentsForDate[2] == undefined
                  ? "empty"
                  : incidentsForDate[2].measurement;
              return (
                <tr
                  key={index}
                  className="text-white  border text-left font-sans rounded-tl-md rounded-tr-md w-full h-10 logs-panel-td"
                >
                  <td>
                    {incidentsForDate.map((incident, index) => {
                      return (
                        <p key={index} className="py-1 px-4">
                          {incident.createdAt}
                        </p>
                      );
                    })}
                  </td>
                  <td>
                    {incidentsForDate.map((incident, index) => {
                      return (
                        <p key={index} className="py-1 px-4">
                          {incident.type}
                        </p>
                      );
                    })}
                  </td>
                  <td className="">
                    {incidentsForDate.map((incident, index) => {
                      return (
                        <p key={index} className="py-1 px-4">
                          {incident.measurement} °C
                        </p>
                      );
                    })}
                  </td>
                  <td className="">
                    {incidentsForDate.map((incident, index) => {
                      return (
                        <p key={index} className="">
                          <StatusView status={incident.status} />
                        </p>
                      );
                    })}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
