import React from "react";
import StatusView from "../ui/status";
export default function SiteStatus() {
  return (
    <div>
      <table className="w-full my-2 rounded-md  text-sm overflow-hidden ">
        <thead className="text-left font-sans font-bold rounded-tl-md rounded-tr-md w-full">
          <tr>
            <th className="py-3 px-4">#</th>
            <th className="py-3 px-4">Site</th>
            <th className="py-3 px-4">Location</th>
            <th className="py-3 px-4">Latitude</th>
            <th className="py-3 px-4">Longitude</th>
            <th className="py-3 px-4">Region</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">More</th>
          </tr>
        </thead>

        <tbody>
          <tr className=" text-left font-sans rounded-tl-md rounded-tr-md w-full h-10 logs-panel-td">
            <th>
              {" "}
              <div className="h-6 w-6 bg-gray-200 rounded-md"></div>
            </th>
            <td className="py-1 px-4">Gihanga Site</td>
            <td className="py-1 px-4">Muhanga, Gihanga</td>
            <td className="py-1 px-4">33.56 E</td>
            <td className="py-1 px-4">56.05</td>
            <td className="py-1 px-4">South-Zuba</td>
            <td className="py-1 px-4">
              <StatusView status={"HEALTHY"} />
            </td>
            <td>
              <button className="py-2  flex items-center  gap-2 px-4 rounded-full bg-app/10  hover:bg-app/30  text-app fill-app">
                <span>Details</span>
              </button>
            </td>
          </tr>
          <tr className=" text-left font-sans rounded-tl-md rounded-tr-md w-full h-10 logs-panel-td">
            <th>
              {" "}
              <div className="h-6 w-6 bg-gray-200 rounded-md"></div>
            </th>
            <td className="py-1 px-4">Gihanga Site</td>
            <td className="py-1 px-4">Muhanga, Gihanga</td>
            <td className="py-1 px-4">33.56 E</td>
            <td className="py-1 px-4">56.05</td>
            <td className="py-1 px-4">South-Zuba</td>
            <td className="py-1 px-4">
              <StatusView status={"HEALTHY"} />
            </td>
            <td>
              <button className="py-2  flex items-center  gap-2 px-4 rounded-full bg-app/10  hover:bg-app/30  text-app fill-app">
                <span>Details</span>
              </button>
            </td>
          </tr>
          <tr className=" text-left font-sans rounded-tl-md rounded-tr-md w-full h-10 logs-panel-td">
            <th>
              {" "}
              <div className="h-6 w-6 bg-gray-200 rounded-md"></div>
            </th>
            <td className="py-1 px-4">Gihanga Site</td>
            <td className="py-1 px-4">Muhanga, Gihanga</td>
            <td className="py-1 px-4">33.56 E</td>
            <td className="py-1 px-4">56.05</td>
            <td className="py-1 px-4">South-Zuba</td>
            <td className="py-1 px-4">
              <StatusView status={"HEALTHY"} />
            </td>
            <td>
              <button className="py-2  flex items-center  gap-2 px-4 rounded-full bg-app/10  hover:bg-app/30  text-app fill-app">
                <span>Details</span>
              </button>
            </td>
          </tr>
          <tr className=" text-left font-sans rounded-tl-md rounded-tr-md w-full h-10 logs-panel-td">
            <th>
              {" "}
              <div className="h-6 w-6 bg-gray-200 rounded-md"></div>
            </th>
            <td className="py-1 px-4">Gihanga Site</td>
            <td className="py-1 px-4">Muhanga, Gihanga</td>
            <td className="py-1 px-4">33.56 E</td>
            <td className="py-1 px-4">56.05</td>
            <td className="py-1 px-4">South-Zuba</td>
            <td className="py-1 px-4">
              <StatusView status={"HEALTHY"} />
            </td>
            <td>
              <button className="py-2  flex items-center  gap-2 px-4 rounded-full bg-app/10  hover:bg-app/30  text-app fill-app">
                <span>Details</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
