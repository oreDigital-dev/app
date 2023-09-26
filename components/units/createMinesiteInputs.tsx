interface InputProps {
  max?:number;
  min?:number;
  label: string | null;
  state: string | number | null;
  setState: (state: any) => void;
  placeholder: string | null;
  type: "text" | "password" | "email" | "number" | "select";
}
export default function Input({
  label,
  state,
  setState,
  placeholder,
  type,
  max,
  min
}: InputProps) {
  const options: String[] = [
    "COMPANY",
    "RMB",
    "POLICE",
    "RED_CROSS",
    "COMPANY_WORKER",
    "SYTEM_ADMIN",
  ];
  return (
    <div>
      {label && <label className="mb-3 text-lg">{label}</label>}
      {type == "select" && label == "Mineral types" ? (
        <select
          className=" border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md text-[black]"
          placeholder="How do you want to login"
          onChange={(e) => setState(e.target.value)}
        >
          <option>How do you want to login ?</option>
          {options.map((option, index) => (
            <option key={index} value={option as string}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder as string}
          defaultValue={state as any}
          className="border-2 border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md"
          onChange={(e) => setState(e.target.value)}
        />
      )}
    </div>
  );
}
