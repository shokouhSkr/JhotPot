import Image from "next/image";
import Link from "next/link";
import { CardRecipe } from "@/types";
import { PiPlusCircle } from "react-icons/pi";

const MiniRecipe = ({ category, title, image }: CardRecipe) => {
  return (
    <div className="relative rounded-md bg-[#fec5a8] p-2">
      {/* IMAGE */}
      <div className="absolute -right-1.5 -top-4 h-32 w-32 2xs:h-[90px] 2xs:w-[90px]">
        <Image src={image} alt={title} fill />
      </div>

      {/* ADD BUTTON */}
      <button type="button" className="mb-2 p-1">
        <PiPlusCircle className="text-xl text-orange" />
      </button>

      {/* CATEGORY AND TITLE */}
      <div className="p-2">
        <div className="mb-1 border-l-2 border-orange pl-1 text-[11px] font-semibold text-orange">
          {category}
        </div>
        <h1 className="mb-2 w-20 text-sm font-bold">{title}</h1>
      </div>

      <Link
        href="/view"
        className="mx-2 mb-1 block rounded-lg bg-orange py-2 text-center text-sm text-white"
      >
        View Recipe
      </Link>
    </div>
  );
};

export default MiniRecipe;
