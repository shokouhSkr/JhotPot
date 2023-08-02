import Image from "next/image";
import img from "@/public/images/pizza1.png";
import { PiCookingPotBold, PiPepperBold, PiPlusCircle, PiShareNetworkFill } from "react-icons/pi";

const SavedCardRecipe = () => {
  return (
    <div className="relative grid grid-cols-4 rounded-md border-[1.5px] border-navbar p-2">
      {/* LEFT */}
      <div className="col-span-1">
        {/* IMAGE */}
        <div className="absolute -left-4 -top-5">
          <Image src={img} alt="image" width={115} height={115} />
        </div>
      </div>

      {/* RIGHT */}
      <div className="col-span-3 col-start-2 ml-[25px] p-2 2xs:ml-4">
        {/* CATEGORY */}
        <div className="flex-between mb-2">
          <div className="border-l-2 border-orange pl-2 text-[11px] font-semibold text-orange">
            Chinese
          </div>

          {/* BUTTONS */}
          <div className="flex items-center text-xl">
            <button type="button" className="mr-2.5">
              <PiShareNetworkFill />
            </button>
            <button type="button">
              <PiPlusCircle className="text-orange" />
            </button>
          </div>
        </div>

        {/* TITLE */}
        <h1 className="mb-2 text-lg font-bold">Hot & Prawn Pizza</h1>

        {/* INGREDIENTS & TIME */}
        <div className="flex-between font-semibold text-dark-gray">
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
    </div>
  );
};

export default SavedCardRecipe;
