import React, { useState } from "react";
import { BsFileEarmarkText } from "react-icons/bs";
import { Slider } from "@material-tailwind/react";

const Reports = () => {
  const [value, setValue] = useState(50); // Initial value

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <div className="m-[20px] rounded-md">
      <div className=" bg-white h-auto relative p-[20px] rounded-md shadow-sm shadow-neutal-300">
        <div className="bg-[#5160B3] text-white p-[10px] rounded-full shadow-sm shadow-neutal-300 mt-2">
          <h1 className="text-center">Basic information about the incident</h1>
        </div>
        <div className="flex mt-4 justify-evenly">
          <div className="flex p-[13px] bg-white border-[1px] border-solid border-[#5160B3] w-1/3 rounded-full">
            <p>Date of Incident</p>
            <input type="date" className="ml-4" />
          </div>
          <div className="flex p-[13px] bg-white border-[1px] border-solid border-[#5160B3]  rounded-full">
            <p>Place of Incident :</p>
            <input type="text" className="ml-4" />
          </div>
          <div className="flex p-[13px] bg-white border-[1px] border-solid border-[#5160B3] w-1/3 rounded-full">
            <p>Select the company (project) : </p>
            <input type="text" className="ml-4" />
          </div>
        </div>
        <div className="flex mt-4 justify-evenly">
          <div className="flex p-[10px] bg-white border-[1px] border-solid border-[#5160B3] w-1/3 rounded-full">
            <p>Mining Area :</p>
            <input type="text" className="ml-4" />
          </div>
          <div className="flex p-[10px] bg-white border-[1px] border-solid border-[#5160B3]  rounded-full">
            <p>Minig site :</p>
            <input type="text" className="ml-4" />
          </div>
          <div className="flex p-[10px] bg-white border-[1px] border-solid border-[#5160B3] w-1/3 rounded-full">
            <p>Specific location of Tunnel : </p>
            <input type="text" className="ml-4" />
          </div>
        </div>
        <div className="flex mt-4 justify-evenly">
          <div className="flex p-[10px] bg-white border-[1px] border-solid border-[#5160B3] w-2/5 rounded-full">
            <p>Category of the incident :</p>
            <input type="text" className="ml-4" />
          </div>
          <div className="flex p-[10px] bg-white border-[1px] border-solid border-[#5160B3] w-2/5 rounded-full">
            <p>Incident Indicator :</p>
            <input type="text" className="ml-4" />
          </div>
        </div>
        <div className="bg-[#5160B3] text-white p-[10px] rounded-full shadow-sm shadow-neutal-300 mt-2">
          <h1 className="text-center">In case of an accident</h1>
        </div>
        <div className="flex p-[10px] bg-white border-[1px] border-solid border-[#5160B3] mt-4 rounded-full">
          <p>Name of the Victim (If there's any) :</p>
          <input type="text" className="ml-4" />
        </div>
        <div className="mt-2">
          <textarea
            className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-[#5160B3]"
            placeholder="Appropriate description of the incident"
          ></textarea>
        </div>

        <div className="flex mt-4 justify-evenly">
          <div className="flex p-[10px] bg-white border-[1px] border-solid border-[#5160B3] w-1/5 rounded-full">
            <p>Bleeding (If any) :</p>
          </div>
          <div className="bg-[#45B1BF] py-2 w-1/5 rounded-full text-white text-xs items-center flex justify-center">
            <p className="pr-4">{value}%</p>
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={handleChange}
              className="w-2/3 h-4 rounded-full appearance-none bg-gray-200"
              style={{
                background: `linear-gradient(to right, white ${value}%, #e6e6e6 ${value}%, #e6e6e6 100%)`,
              }}
            />
          </div>
          <div className="flex p-[10px] bg-white border-[1px] border-solid border-[#5160B3] w-1/5 rounded-full">
            <p>Fraction (If any) :</p>
          </div>
          <div className="bg-[#45B1BF] py-2 w-1/5 rounded-full text-white text-xs items-center flex justify-center">
          <p className="pr-4">{value}%</p>
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={handleChange}
              className="w-2/3 h-4 rounded-full appearance-none bg-gray-200"
              style={{
                background: `linear-gradient(to right, white ${value}%, #e6e6e6 ${value}%, #e6e6e6 100%)`,
              }}
            />
          </div>
        </div>
        <div className="flex mt-4 justify-evenly">
          <div className="flex p-[10px] bg-white border-[1px] border-solid border-[#5160B3] w-1/5 rounded-full">
            <p>Condition / state :</p>
          </div>
          <div className="bg-[#45B1BF] py-2 w-1/5 rounded-full text-white text-xs items-center flex justify-center">
            <button className="border-r-[1px] border-solid border-r-white pr-4 hover:border-b-[1px] hover:border-b-solid hover:border-b-white py-2">
              Good
            </button>
            <button className="border-r-[1px] border-solid border-r-white pr-4 pl-4 hover:border-b-[1px] hover:border-b-solid hover:border-b-white py-2">
              Average
            </button>
            <button className="pl-4 hover:border-b-[1px] hover:border-b-solid hover:border-b-white py-2">
              Critical
            </button>
          </div>
          <div className="flex p-[10px] bg-white border-[1px] border-solid border-[#5160B3] w-1/5 rounded-full">
            <p>Fraction (If any) :</p>
          </div>
          <div className="bg-[#45B1BF] py-2 w-1/5 rounded-full text-white text-xs items-center flex justify-center">
          <p className="pr-4">{value}%</p>
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={handleChange}
              className="w-2/3 h-4 rounded-full appearance-none bg-gray-200"
              style={{
                background: `linear-gradient(to right, white ${value}%, #e6e6e6 ${value}%, #e6e6e6 100%)`,
              }}
            />
          </div>
        </div>
        <div className="mt-2">
          <textarea
            className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-[#5160B3]"
            placeholder="Actions taken to address the incident"
          ></textarea>
        </div>
        <div>
          <div className="bg-[#5160B3] text-white p-[10px] rounded-full shadow-sm shadow-neutal-300 mt-2">
            <h1 className="text-center">
              Additional information about the incident
            </h1>
          </div>
          <div className="flex mt-4 justify-evenly">
            <div className="flex p-[10px] bg-white border-[1px] border-solid border-[#5160B3] w-1/3 rounded-full">
              <p>First Information source :</p>
              <input type="text" className="ml-4" />
            </div>
            <div className="flex p-[10px] bg-white border-[1px] border-solid border-[#5160B3] w-1/3 rounded-full">
              <p>Second Information source :</p>
              <input type="text" className="ml-4" />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center h-40 w-1/3 border-2 border-[#5160B3] border-dashed rounded-lg cursor-pointer bg-white mt-4">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <BsFileEarmarkText className="text-2xl mb-4" />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
            <div className="flex justify-end">
            <button className="py-3 pl-2 pr-2 w-40 flex text-white items-center justify-center  rounded-lg bg-[#5160B3]">
              <span>Send</span>
            </button>
          </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};
export default Reports;
