import { categoryItems } from "@/helpers/constants";
import CategoryItem from "./CategoryItem";

const Category = () => {
  return (
    <div className="hide-scrollbar flex flex-nowrap items-start gap-4 overflow-auto">
      {categoryItems.map((item) => {
        return <CategoryItem key={item.title} {...item} />;
      })}
    </div>
  );
};

export default Category;
