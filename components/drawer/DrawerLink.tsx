"use client";

import { useAppDispatch } from "@/redux/hooks";
import { closeDrawer } from "@/redux/features/modal/modalSlice";
import Link from "next/link";
import { DrawerLink } from "@/types";

const DrawerLink = ({ icon, title, path }: DrawerLink) => {
  const dispatch = useAppDispatch();

  return (
    <Link
      href={path}
      onClick={() => dispatch(closeDrawer())}
      className="flex items-center py-4 px-5 transition-all duration-300 hover:bg-white active:bg-white"
    >
      <span className="mr-4 text-lg">{icon}</span>
      <span>{title}</span>
    </Link>
  );
};

export default DrawerLink;
