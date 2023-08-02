import Image from "next/image";
import { PiPepperBold, PiCookingPotBold, PiPlusCircle } from "react-icons/pi";
import Link from "next/link";
import { CardRecipe } from "@/types";

const SingleCardRecipe = ({
  image,
  title,
  category,
  description,
  ingredients,
  time,
}: CardRecipe) => {
  return (
    <div className="relative flex h-96 w-52 flex-1 flex-col items-end justify-end rounded-2xl">
      {/* IMAGE */}
      {/* <div className="absolute -right-[25px] -top-[66px]">
        <div className="relative h-[160px] w-[160px]">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div> */}
      <div className="absolute -right-[18px] -top-[40px]">
        <Image src={image} alt={title} width={140} height={140} />
      </div>

      {/* INFO */}
      <div className="rounded-2xl bg-[#fec5a8] p-4">
        {/* CATEGORY */}
        <div className="mb-3 mt-16 border-l-2 border-orange pl-2 text-[11px] font-semibold text-orange">
          {category}
        </div>

        {/* TITLE */}
        <h1 className="mb-5 text-2xl font-bold">{title}</h1>

        {/* DESCRIPTION */}
        <div className="mb-5 text-dark-gray">
          <p className="mb-5 text-sm">{description}</p>
          <div className="flex-between font-semibold">
            <div className="flex items-center gap-1">
              <span className="text-lg font-semibold">
                <PiCookingPotBold />
              </span>
              <span className="text-xs">{time} min</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-lg">
                <PiPepperBold />
              </span>
              <span className="text-xs">{ingredients} ing</span>
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex-between mb-2">
          <button className="flex-center rounded-lg bg-light-orange p-3">
            <PiPlusCircle className="text-lg text-orange" />
          </button>
          <Link
            href="/view"
            className="flex-center rounded-lg bg-orange px-6 py-3 text-sm text-white"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCardRecipe;
