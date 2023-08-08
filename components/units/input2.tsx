import { countryList, loginTypes } from "@/utils/dataAssets";
import { districts } from "@/utils/dataAssets";
interface InputProps {
  label: string | null;
  state: string | number | null;
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
          <option>COMPANY</option>
          {loginTypes.map((option, index) => (
            <option key={index} value={option as string}>
              {option}
            </option>
          ))}
        </select>
      )}
      {label === "Country" && (
        <select
          className=" border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md text-[black]"
          placeholder="How do you want to login"
          onChange={(e) => setState(e.target.value)}
        >
          <option>Rwanda</option>
          {countryList.map((country, index) => (
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
          <option>Nyabihu</option>
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
    </div>
  );
}
