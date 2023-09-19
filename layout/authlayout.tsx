import CategoryButton from "@/components/ui/CategoryButton";
import Navbar from "@/components/ui/Navbar";
import Logo from "@/components/ui/logo";
import { setCategory, setSubcategory } from "@/features/formCategories";
import { RootState } from "@/stores/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const subCategory = useSelector(
    (state: RootState) => state.formCategories.subCategory
  );
  
  const [visibility, setVisibility] = useState(false);
  const clickHandler = (category: string) => {
    dispatch(setCategory(category));
    setVisibility(true);
  };
  const handleSubcategory = (subCategory: string) => {
    dispatch(setSubcategory(subCategory));
  };
  return (
    <div className="relative flex flex-col authBack bg-cover bg-transparent">
      <div className="z-40 bg-white mx-auto flex flex-col  border rounded-lg w-[40%] py-2 px-4 space-y-4 h-auto">
        <div className="flex justify-center">
        <Logo withText />
        </div>
        <div className="flex  justify-evenly py-1 w-full">
          <CategoryButton category="RMB" clickHandler={clickHandler} />
          <CategoryButton category="Company" clickHandler={clickHandler} />
          <CategoryButton category="Rescue Team" clickHandler={clickHandler} />
        </div>
        <div className={`flex justify-evenly w-full`}>
          <button
            className=" flex gap-4 rounded-sm px-4  text-black items-center"
            onClick={() => handleSubcategory("Admin")}
          >
            <span className={`w-4 h-4 rounded-full ${subCategory == "Admin"?"bg-app border border-app":"bg-white border border-slate-200"}`} />
            Admin
          </button>
          <button
            className="flex gap-4 items-center rounded-sm px-4  text-black"
            onClick={() => handleSubcategory("Employee")}
          >
            <span className={`w-4 h-4 rounded-full ${subCategory == "Employee"?"bg-app border border-app":"bg-white border border-slate-200"}`} />
            Employee
          </button>
        </div>
        {children}
      </div>
      <div className="w-full h-[110vh] bg-black-900/80 absolute z-20" />
    </div>
  );
};
export default AuthLayout;
