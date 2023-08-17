"use client";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { closeSearchModal } from "@/redux/features/modal/modalSlice";
import { Header, TimeRangeSlider, SavedCardRecipe, AddIngredients } from "@/components";
import { PiCaretDownBold, PiMagnifyingGlassBold, PiSlidersBold, PiXBold } from "react-icons/pi";
import { savedRecipes } from "@/helpers/constants";

const SearchModal = () => {
  const [active, setActive] = useState(false);
  const { isSearchModalOpen } = useAppSelector((store) => store.modal);
  const dispatch = useAppDispatch();

  return (
    <div
      className={`${
        isSearchModalOpen ? "block" : "hidden"
      } fixed inset-x-0 bottom-[70px] top-0 z-50 overflow-scroll bg-navbar px-6 py-4`}
    >
      <Header
        title="Search filter"
        icon={<PiXBold />}
        clickHandler={() => dispatch(closeSearchModal())}
      />

      {/* SEARCH INPUT */}
      <div className="flex items-center gap-4 text-sm">
        <form onSubmit={(e) => e.preventDefault()} className="relative w-full">
          <span className="absolute right-3 top-[0.75rem]">
            <PiMagnifyingGlassBold className="text-2xl text-orange" />
          </span>
          <input
            type="text"
            placeholder="Pizza"
            className="w-full rounded-md border-none p-4 focus:outline-none focus:ring-0"
          />
        </form>

        {/* FILTER BUTTON */}
        <button
          type="button"
          onClick={() => setActive(!active)}
          className={`${active ? "bg-orange" : "bg-white"} flex-center w-[45px] rounded-md p-3 `}
        >
          <PiSlidersBold className={`${active ? "text-white" : "text-orange"} rotate-90 text-xl`} />
        </button>
      </div>

      {active && (
        <div className="mt-6 space-y-6 text-sm">
          {/* TIME RANGE SLIDER */}
          <TimeRangeSlider />

          {/* SELECT CUISINE */}
          <div>
            <div className="mb-2 flex items-center justify-start text-sm font-medium">
              <span className="text-main-gray">Select Cuisine</span>
            </div>
            <div className="relative">
              <span className="absolute right-3 top-1/2 -translate-y-1/2">
                <PiCaretDownBold />
              </span>
              <select className="w-full appearance-none rounded-md border-none bg-white p-4 outline-offset-0 outline-orange">
                <option defaultChecked>Chinese</option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
          </div>

          {/* SUB INGREDIENTS */}
          <AddIngredients />

          {/* SEARCH BUTTON */}
          <button
            type="button"
            onClick={() => {
              // do something
              setActive(false);
            }}
            className="absolute inset-x-4 bottom-4 rounded-lg bg-orange py-3 text-white"
          >
            Search
          </button>
        </div>
      )}

      {!active && (
        <div className="mt-10 flex flex-col gap-9">
          {savedRecipes.map((item) => {
            return <SavedCardRecipe key={item.title} {...item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default SearchModal;
