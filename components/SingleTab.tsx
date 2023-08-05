"use client";

import { SingleTabProps } from "@/types";

const SingleTab = ({ activeTab, setActiveTab, text }: SingleTabProps) => {
  return (
    <button
      type="button"
      onClick={() => setActiveTab(text)}
      className={`${
        activeTab === text ? " border-b-[1.5px] border-orange text-orange" : "text-main-gray"
      } tab inline-block w-1/2 `}
    >
      {text === "Recipes" ? "Recipes (598)" : "Reviews"}
    </button>
  );
};

export default SingleTab;
