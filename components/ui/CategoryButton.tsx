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
      className={` p-1 px-2 w-[25%] rounded-md ${categoryState ==category?' bg-app  border border-app text-white':'bg-white border border-app text-black'}  font-medium text-lg flex items-center justify-center`}
      onClick={() => clickHandler(category)}
    >
      {category}
    </button>
  );
};

export default CategoryButton;
