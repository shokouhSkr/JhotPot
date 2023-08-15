import { Header, Ingredient } from "@/components";
import ShowMore from "@/components/ShowMore";
import Image from "next/image";
import img from "@/public/images/pizza1.png";
import img2 from "@/public/shrimp.svg";
import {
  PiCaretLeftBold,
  PiCookingPotBold,
  PiFireSimpleBold,
  PiHeartStraightBold,
  PiPepperBold,
  PiShareNetworkFill,
} from "react-icons/pi";

const txt = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cum architecto, repellat
            optio labore excepturi odit itaque animi saepe commodi exercitationem, maiores corrupti
            hic aperiam atque impedit culpa unde! Alias! Commodi, reprehenderit. Itaque qui,
            perspiciatis dignissimos excepturi quis doloremque quo reiciendis, inventore at
            doloribus nostrum, vitae voluptate quidem nesciunt! Fugit labore, cupiditate modi
            error aperiam, magnam fugit rem laborum minus
            dolorum eaque voluptates similique! Error, quia harum odit quo sapiente mollitia cumque
            a quis. Doloribus perferendis`;

const SingleRecipe = ({ params }: { params: { recipeId: string } }) => {
  return (
    <section className="overflow-hidden">
      <div className="h-24 bg-[#fec5a8] px-[1.75rem] py-4">
        <Header icon={<PiCaretLeftBold />} />
      </div>
      <div className="relative z-20 -mt-4 rounded-t-[26px] bg-white px-8 py-5">
        {/* IMAGE */}
        <div className="absolute -right-[3.25rem] -top-[7.25rem] transition-transform duration-500 hover:rotate-[30deg]">
          <Image src={img} alt="pizza" width={250} height={250} />
        </div>

        {/* BUTTONS */}
        <div className="mb-10 flex items-center gap-6 text-lg">
          <button type="button">
            <PiShareNetworkFill />
          </button>
          <button type="button">
            <PiHeartStraightBold />
          </button>
        </div>
        {/* CATEGORY */}
        <div className="mb-4 mt-16 border-l-2 border-orange pl-2 text-sm font-semibold text-orange">
          Chinese
        </div>
        {/* TITLE */}
        <h1 className="mb-5 text-3xl font-bold">Hot & Prawn Pizza</h1>
        {/* INFO */}
        <div className="flex-between font-semibold text-dark-gray">
          {/* TIME */}
          <div className="flex items-center gap-1">
            <span className="text-lg">
              <PiCookingPotBold />
            </span>
            <span className="text-xs">25 min</span>
          </div>
          {/* INGREDIENTS */}
          <div className="flex items-center gap-1">
            <span className="text-lg">
              <PiPepperBold />
            </span>
            <span className="text-xs">5 ing</span>
          </div>
          {/* CALORIE */}
          <div className="flex items-center gap-1">
            <span className="text-lg">
              <PiFireSimpleBold />
            </span>
            <span className="text-xs">450 cal</span>
          </div>
        </div>
        {/* DESCRIPTION */}
        <div className="my-8 text-sm">
          <ShowMore maxChars={120} text={txt} />
        </div>
        {/* INGREDIENTS */}
        <div className="mb-8">
          <h5 className="mb-2 font-semibold">Ingredients (5)</h5>
          <div className="hide-scrollbar flex items-center gap-4 overflow-scroll">
            <Ingredient image={img2} title="onion" />
            <Ingredient image={img2} title="mint" />
            <Ingredient image={img2} title="garlic" />
            <Ingredient image={img2} title="eggs" />
            <Ingredient image={img2} title="oil" />
            <Ingredient image={img2} title="oil" />
            <Ingredient image={img2} title="oil" />
            <Ingredient image={img2} title="oil" />
          </div>
        </div>
        {/* COOKING RECIPE */}
        <div className="mb-4">
          <h5 className="mb-2 font-semibold">Let's make it step by step</h5>
          {/* STEPS */}
          <div className="mb-4 flex items-center gap-4">
            {/* VIDEO */}
            <div className="flex-center h-24 w-2/5 rounded-md bg-red-200">video</div>
            {/* DESCRIPTION */}
            <div className="flex w-3/5 flex-col gap-2">
              <span className="text-sm font-semibold text-dark-gray">step 1</span>
              <p className="line-clamp-3 text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quo assumenda ea
                veritatis reiciendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                quo assumenda ea veritatis reiciendis
              </p>
            </div>
          </div>
          <div className="mb-4 flex items-center gap-4">
            {/* VIDEO */}
            <div className="flex-center h-24 w-2/5 rounded-md bg-red-200">video</div>
            {/* DESCRIPTION */}
            <div className="flex w-3/5 flex-col gap-2">
              <span className="text-sm font-semibold text-dark-gray">step 1</span>
              <p className="line-clamp-3 text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quo assumenda ea
                veritatis reiciendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                quo assumenda ea veritatis reiciendis
              </p>
            </div>
          </div>
          <div className="mb-4 flex items-center gap-4">
            {/* VIDEO */}
            <div className="flex-center h-24 w-2/5 rounded-md bg-red-200">video</div>
            {/* DESCRIPTION */}
            <div className="flex w-3/5 flex-col gap-2">
              <span className="text-sm font-semibold text-dark-gray">step 1</span>
              <p className="line-clamp-3 text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quo assumenda ea
                veritatis reiciendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                quo assumenda ea veritatis reiciendis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleRecipe;
