import { RootState } from "@/stores/store";
import { useSelector } from "react-redux";

const CategoryButton = ({
  category,
  clickHandler,
}: {
  category: string;
  clickHandler: (category: string) => void;
}) => {
  const categoryState = useSelector(
    (state: RootState) => state.formCategories.category
  );
  const subCategoryState = useSelector(
    (state: RootState) => state.formCategories.subCategory
  );
  return (
    <button
      className={` p-1 px-2 w-[25%] ${categoryState ==category?' bg-app rounded-sm  border border-app text-white':'text-black'}  font-semibold text-md flex items-center justify-start`}
      onClick={() => clickHandler(category)}
    >
      {category}
    </button>
  );
};

export default CategoryButton;
