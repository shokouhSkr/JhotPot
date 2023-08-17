import { categoryItems } from "@/helpers/constants";
import { CategoryType } from "@/types";
import Image from "next/image";

const Category = ({ withImage, withTitle }: CategoryType) => {
  return (
    <div className="hide-scrollbar flex items-start gap-4 overflow-auto">
      {categoryItems.map((item) => {
        const { title, image } = item;

        return (
          <button
            key={title}
            type="button"
            className={`${
              withImage && !withTitle ? "p-2" : "p-0.5 py-2"
            } relative flex flex-1 flex-col items-center justify-start rounded-lg bg-navbar transition-all duration-300`}
          >
            {withImage && (
              <div className="relative h-8 w-8">
                <Image src={image} alt={title} fill className="object-cover" />
              </div>
            )}
            {withTitle && (
              <span className={`inline-block w-12 text-center text-[11px]`}>{title}</span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
