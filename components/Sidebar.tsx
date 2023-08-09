"use client";

import { LuAlignJustify, LuSearch } from "react-icons/lu";
import { openSearchModal } from "@/redux/features/modal/modalSlice";
import { useAppDispatch } from "@/redux/hooks";
import NavbarBtn from "./SidebarBtn";

const Sidebar = () => {
  const dispatch = useAppDispatch();

  return (
    <aside className="fixed bottom-[70px] left-0 top-0 w-14 bg-navbar">
      <nav className="mt-[15px] p-1">
        {/* BUTTONS */}
        <div className="mb-16 flex flex-col items-center gap-2">
          <NavbarBtn icon={<LuAlignJustify />} clickHandler={() => dispatch(openSearchModal())} />
          <NavbarBtn icon={<LuSearch />} clickHandler={() => console.log("search")} />
        </div>

        {/* LINKS */}
        <div className="ml-0 flex flex-col gap-16 text-[13px]">
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

export default Sidebar;
