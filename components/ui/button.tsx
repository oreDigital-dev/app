import { HTMLAttributes } from "react";


export default function Button( {...props} :  HTMLAttributes<HTMLButtonElement>){
    return (
        <button className="w-full py-[14px] px-10 text-center bg-app text-white rounded-md" {...props}>{ props.children }</button>

    )
}