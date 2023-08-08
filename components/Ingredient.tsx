import Image from "next/image";
import { IngredientProps } from "@/types";

const Ingredient = ({ image, title }: IngredientProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="relative h-12 w-12 rounded-md bg-light-gray">
        <Image src={image} alt={title} fill className="object-cover p-1" />
      </div>
      <span className="text-center text-xs">{title}</span>
    </div>
  );
};

export default Ingredient;
