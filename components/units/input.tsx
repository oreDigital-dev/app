
interface InputProps {
    label : string | null ,
    state : string |  number | null ,
    setState :  (state : any) =>  void ,
    placeholder : string |  null ,
    type: 'text' | 'password' |  'email'  | 'number'
}


export default function Input({ label, state,  setState, placeholder , type } :  InputProps){
    return (
        <div>
            {label && <label className="mb-3">{ label }</label>}
            <input type={type} placeholder={placeholder as string} defaultValue={state as any} className="border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md"   onChange={(e) =>  setState(e.target.value)} />
        </div>
    )
}