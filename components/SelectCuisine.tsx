"use client";

import { useState } from "react";
import { categoryItems } from "@/helpers/constants";

const SelectCuisine = () => {
  const [selectedCategory, setSelectedCategory] = useState(categoryItems[1].title);

  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-main-gray">Select cuisine</span>

      <div className="hide-scrollbar flex items-start gap-4 overflow-auto">
        {categoryItems.slice(1).map((item) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setSelectedCategory(item.title)}
            className={`${
              selectedCategory === item.title
                ? "border-orange text-orange"
                : "border-white text-navy"
            } relative flex rounded-lg border bg-white px-4 py-2 transition-colors duration-300`}
          >
            <span className="w-12 text-xs">{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectCuisine;
