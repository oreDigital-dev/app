import { loginTypes, ownerShipDetails,rescueTeamsCategories } from "@/utils/dataAssets";
import { districts } from "@/utils/dataAssets";
interface InputProps {
  label: string | null;
  state: string | number | null | Array<string>;
  setState: (state: any) => void;
  placeholder: string | null;
  type: "text" | "password" | "email" | "number" | "select";
}
export default function Input2({
  label,
  state,
  setState,
  placeholder,
  type,
}: InputProps) {
  return (
    <div>
      {label && <label className="mb-3">{label}</label>}
      {label == "Login as" && (
        <select
          className=" border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md text-[black]"
          placeholder="How do you want to login"
          onChange={(e) => setState(e.target.value)}
        >
          <option value={""}>SELECT ROLE</option>
          {loginTypes.map((option, index) => (
            <option key={index} value={option as string}>
              {option}
            </option>
          ))}
        </select>
      )}
      {label == "Rescue Team Category" && (
        <select
          className=" border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md text-[black]"
          placeholder="Select The Rescue Team"
          onChange={(e) => setState(e.target.value)}
        >
          <option value={""}>SELECT ROLE</option>
          {rescueTeamsCategories.map((option, index) => (
            <option key={index} value={option as string}>
              {option}
            </option>
          ))}
        </select>
      )}
     {/* {label === "Country" && (
        <select
          className=" border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md text-[black]"
          placeholder="How do you want to login"
          onChange={(e) => setState(e.target.value)}
        >
          <option>Select country</option>
          {countryList.map((country, index) => (
            <option key={index} value={country as string}>
              {country}
            </option>
          ))}
        </select>
      )} */}
      {label === "Type of ownership" && (
        <select
          className=" border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md text-[black]"
          placeholder="How do you want to login"
          onChange={(e) => setState(e.target.value)}
        >
          <option>Select ownership</option>
          {ownerShipDetails.map((country, index) => (
            <option key={index} value={country as string}>
              {country}
            </option>
          ))}
        </select>
      )}
    {label === "District" && (
        <select
          className=" border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md text-[black]"
          placeholder="How do you want to login"
          onChange={(e) => setState(e.target.value)}
        >
          <option>Select district</option>
          {districts.map((district, index) => (
            <option key={index} value={district as string}>
              {district}
            </option>
          ))}
        </select>
      )}
      {label == "Postal Code" && (
        <input
          type={type}
          placeholder={placeholder as string}
          defaultValue={state as any}
          className="border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md"
          onChange={(e) => setState(e.target.value)}
        />
      )}
       {label == "Province" && (
        <input
          type={type}
          placeholder={placeholder as string}
          defaultValue={state as any}
          className="border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md"
          onChange={(e) => setState(e.target.value)}
        />
      )}
       {label == "Sector" && (
        <input
          type={type}
          placeholder={placeholder as string}
          defaultValue={state as any}
          className="border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md"
          onChange={(e) => setState(e.target.value)}
        />
      )}
       {label == "Cell" && (
        <input
          type={type}
          placeholder={placeholder as string}
          defaultValue={state as any}
          className="border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md"
          onChange={(e) => setState(e.target.value)}
        />
      )}
       {label == "Village" && (
        <input
          type={type}
          placeholder={placeholder as string}
          defaultValue={state as any}
          className="border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md"
          onChange={(e) => setState(e.target.value)}
        />
      )}
      
    </div>
  );
}
