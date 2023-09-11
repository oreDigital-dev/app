import { LabelIcon } from "../icons";
import { useRouter } from "next/router";

export interface FormCategoryCardProps {
  title: String;
  color: string;
  className?: string;
}

const FormCategoryCard = (props: FormCategoryCardProps) => {
    const router = useRouter();
    const handleCreateForm = async()=>{
await router.push("/mfo/forms/createForm")
    }
  return (
    <div
      className={`px-12 drop-shadow-md  py-[30px] space-y-2 z-20 bg-white rounded-md ${props.className}`}
    >
      <h1 className={`${props.color && `text-[${props.color}]`}  text-center font-bold text-xl`}>
        {props.title}
      </h1>
      <div onClick={handleCreateForm} className="flex justify-end items-center gap-8 hover:cursor-pointer">
        <LabelIcon color={props.color} />
        <p className={`text-[${props.color}] underline underline-1`}>
          New Form
        </p>
      </div>
    </div>
  );
};
export default FormCategoryCard;
