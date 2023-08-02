import Image from "next/image";
import Img from "@/public/images/pizza.png";
import { PiPepperBold, PiCookingPotBold, PiPlusCircle } from "react-icons/pi";
import Link from "next/link";

const SingleRecipe = () => {
  return (
    <div className="relative flex h-96 w-52 flex-1 flex-col items-end justify-end rounded-2xl">
      {/* IMAGE */}
      <div className="absolute -right-[25px] -top-[66px]">
        <div className="relative h-[160px] w-[160px]">
          <Image src={Img} alt="efef" fill className="object-cover" />
        </div>
      </div>

      {/* INFO */}
      <div className="rounded-2xl bg-[#fec5a8] p-4">
        {/* CATEGORY */}
        <div className="mb-3 mt-16 border-l-2 border-orange pl-2 text-[11px] font-semibold text-orange">
          Chinese
        </div>

        {/* TITLE */}
        <h1 className="mb-5 text-2xl font-bold">Hot & Prawn Pizza</h1>

        {/* DESCRIPTION */}
        <div className="mb-5 text-dark-gray">
          <p className="mb-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsum dolor sit amet
            voluptate.
          </p>
          <div className="flex-between font-semibold">
            <div className="flex items-center gap-1">
              <span className="text-lg font-semibold">
                <PiCookingPotBold />
              </span>
              <span className="text-xs">20 min</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-lg">
                <PiPepperBold />
              </span>
              <span className="text-xs">5 ing</span>
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

export default SingleRecipe;
