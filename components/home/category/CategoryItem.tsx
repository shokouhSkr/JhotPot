import { CategoryItem } from "@/types";
import Image from "next/image";

const CategoryItem = ({ image, title }: CategoryItem) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-start rounded-md bg-navbar p-0.5 transition-all duration-300 hover:bg-main-gray active:bg-main-gray">
      <div className="relative h-8 w-8">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <span className="inline-block w-12 text-center text-[11px]">{title}</span>
    </div>
  );
};

export default CategoryItem;
