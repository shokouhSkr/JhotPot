"use client";

import { useState } from "react";
import { LuAlignJustify, LuSearch } from "react-icons/lu";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);

  return (
    <aside className="fixed bottom-[70px] left-0 top-0 w-14 bg-navbar">
      <nav className="mt-6 p-1">
        {/* BUTTONS */}
        <div className="mb-16 flex flex-col items-center gap-6">
          <button
            type="button"
            onClick={() => {
              setIsSidebarOpen(true);
              console.log("open sidebar");
            }}
          >
            <LuAlignJustify />
          </button>
          <button
            type="button"
            onClick={() => {
              setIsSearchModalOpen(true);
              console.log("open search modal");
            }}
          >
            <LuSearch />
          </button>
        </div>

        {/* LINKS */}
        <div className="ml-0 mt-32 flex flex-col gap-16 text-[13px]">
          <a href="#snacks" className="-rotate-90">
            Refrigerator
          </a>
          <a href="#food" className="-rotate-90">
            Snacks
          </a>
          <a href="#drinks" className="-rotate-90">
            Drinks
          </a>
          <a href="#drinks" className="-rotate-90">
            Food
          </a>
        </div>
      </nav>
    </aside>
  );
};

export default Navbar;
