"use client";

import { SingleTabProps } from "@/types";

const SingleTab = ({ activeTab, setActiveTab, text }: SingleTabProps) => {
  return (
    <button
      type="button"
      onClick={() => setActiveTab(text)}
      className={`${
        activeTab === text ? " border-orange text-orange" : "border-white text-main-gray"
      } tab inline-block w-1/2 border-b-[1.5px]`}
    >
      {text === "Recipes" ? "Recipes (598)" : "Reviews"}
    </button>
  );
};

export default SingleTab;
