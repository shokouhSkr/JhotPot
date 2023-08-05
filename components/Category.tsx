import { categoryItems } from "@/helpers/constants";
import Image from "next/image";

const Category = ({ image }: { image?: boolean }) => {
  return (
    <div className="hide-scrollbar flex items-start gap-4 overflow-auto">
      {categoryItems.map((item) => {
        return (
          <div
            key={item.title}
            className="flex flex-1 flex-col items-center justify-start rounded-lg bg-navbar p-0.5 transition-all duration-300 hover:bg-main-gray active:bg-main-gray"
          >
            {image && (
              <div className="relative h-8 w-8">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
            )}
            <span className={`${!image && "py-1.5"} inline-block w-12 text-center text-[11px]`}>
              {item.title}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
