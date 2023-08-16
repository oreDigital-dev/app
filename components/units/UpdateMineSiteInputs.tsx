import { setSelectedMineSite } from "@/features/minesitesSlice";
import { countryList, districts } from "@/utils/dataAssets";

interface InputProps {
  value: String;
  label: string | null;
  state: string | number | null;
  setState: (state: any) => void;
  placeholder: string | null;
  type: "text" | "password" | "email" | "number" | "select";
}
export default function Input4({
  label,
  state,
  setState,
  value,
  placeholder,
  type,
}: InputProps) {
  const options: String[] = [
    "COMPANY",
    "RMB",
    "POLICE",
    "RED_CROSS",
    "COMPANY_WORKER",
    "SYTEM_ADMIN",
  ];

  const options2: String[] = [
    "DIAMOND",
    "ALUMINIUM",
    "COAL",
    "CASEGRETTES",
    "ZINC",
    "ROCK",
  ];
  return (
    <div>
      {label && <label className="mb-3">{label}</label>}
      {label == "Minesite Name" && (
        <input
          type={type}
          value={value.toString()}
          placeholder={placeholder as string}
          defaultValue={state as any}
          className="border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md"
          onChange={(e) => setState(e.target.value)}
        />
      )}
      {label == "Mineral types" && (
        <select
          className=" border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md text-[black]"
          placeholder="How do you want to login"
          onChange={(e) => setState(e.target.value)}
        >
          <option>{value}</option>
          {options2.map((option, index) => (
            <option key={index} value={option as string}>
              {option}
            </option>
          ))}
        </select>
      )}
      {label === "District" && (
        <select
          defaultValue="Rwanda"
          className=" border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md text-[black]"
          placeholder="How do you want to login"
          onChange={(e) => setState(e.target.value)}
        >
          <option>NYABIHU</option>
          {districts.map((district, index) => (
            <option key={index} value={district as string}>
              {district}
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
    </div>
  );
}
