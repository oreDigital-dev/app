import {BsEyeSlashFill,BsEyeFill} from 'react-icons/bs';

interface InputProps {
  className?:string;
  label: string | null;
  state: string | number | null;
  setState: (state: any) => void;
  placeholder: string | null;
  type: "text" | "password" | "email" | "number" | "select"|string;
}
export default function Input3({
  label,
  state,
  setState,
  placeholder,
  type,
  className
}: InputProps) {
  const options: String[] = [
    "DIAMOND",
    "ALUMINIUM",
    "COAL",
    "CASEGRETTES",
    "ZINC",
    "ROCK",
  ];
 

  return (
    <div>
      {label && <label className="mb-3 font-semibold">{label}</label>}
      {
        type =="select" && label == "Mineral types" ?(
          <select
          className=" border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md text-[black]"
          placeholder="Types of minerals available"
          onChange={(e) => setState(e.target.value)}
        >
          <option>GOLD</option>
          {
            
            options.map((option, index) => (
              <option key={index} value={option as string}>
                {option}
              </option>
            ))
}
          
        </select>
        )

       :
          (
            <input
            type={type}
            placeholder={placeholder as string}
            defaultValue={state as any}
            className={`border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md ${className}`}
            onChange={(e) => setState(e.target.value)}
          />

          
          )
          }     
    </div>
  );
}
