"use client";

import { useState } from "react";
import { PiPlusCircle, PiXBold } from "react-icons/pi";

const AddIngredients = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputValues, setInputValues] = useState<string[]>([]);

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
    <div>
      <div className="mb-2 flex items-center justify-start text-sm font-medium">
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
  );
};

export default AddIngredients;
