"use client";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { closeSearchModal } from "@/redux/features/modal/modalSlice";
import Header from "./Header";
import {
  PiCaretDownBold,
  PiMagnifyingGlassBold,
  PiPlusCircle,
  PiSlidersBold,
  PiXBold,
} from "react-icons/pi";
import { savedRecipes } from "@/helpers/constants";
import SavedCardRecipe from "./saved/SavedCardRecipe";

const SearchModal = () => {
  const [active, setActive] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [inputValues, setInputValues] = useState<string[]>([]);
  const { isSearchModalOpen } = useAppSelector((store) => store.modal);
  const dispatch = useAppDispatch();

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addInputValueHandler = () => {
    if (!inputValue || inputValue.length < 3) return;

    const lowerCaseValue = inputValue.toLowerCase();

    // Check if the inputValue already exists in the inputValues array
    if (!inputValues.includes(lowerCaseValue)) {
      setInputValues([...inputValues, lowerCaseValue]);
      setInputValue("");
    }
  };

  const deleteItemHandler = (value: string) => {
    setInputValues(inputValues.filter((item) => item !== value));
  };

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
          <div className="text-xs font-semibold">
            <div className="flex-between">
              <span className="text-main-gray">Time to cook</span>
              <span className="text-dark-gray">50 min</span>
            </div>

            <input
              type="range"
              min={1}
              max={5}
              // step="1"
              // value={3}
              // onChange={updatePrice}
              className="h-[4px] w-full appearance-none rounded-md bg-orange accent-orange "
            />
          </div>

          {/* SELECT CUISINE */}
          <div>
            <div className="mb-2 flex items-center justify-start text-xs font-semibold">
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
          <div>
            <div className="mb-2 flex items-center justify-start text-xs font-semibold">
              <span className="text-main-gray">Sub Ingredients</span>
            </div>
            <div className="relative">
              {/* plus button component(common) */}
              <button
                type="button"
                onClick={addInputValueHandler}
                onKeyDown={(e) => {
                  if (e.key === "Enter") e.preventDefault();
                }}
                className="absolute right-1 top-1/2 -translate-y-1/2 p-2"
              >
                <PiPlusCircle className="text-lg text-orange" />
              </button>
              <input
                // onChange={updateSearch}
                placeholder="Onion"
                value={inputValue}
                onChange={changeInputHandler}
                onKeyDown={(e) => {
                  if (e.key === "Enter") addInputValueHandler();
                }}
                className="w-full appearance-none rounded-md border-none bg-white p-4 outline-offset-0 outline-orange"
              />
            </div>

            {/* Show added input values */}
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
              {inputValues.map((value) => (
                <button
                  key={value}
                  onClick={() => deleteItemHandler(value)}
                  className="flex items-center gap-2 rounded bg-footer p-2 py-1"
                >
                  <span>{value}</span>
                  <span>
                    <PiXBold className="text-red-500" />
                  </span>
                </button>
              ))}
            </div>
          </div>

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
