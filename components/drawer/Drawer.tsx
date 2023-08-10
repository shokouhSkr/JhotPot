"use client";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { closeDrawer } from "@/redux/features/modal/modalSlice";
import { PiXBold } from "react-icons/pi";
import { Header, DrawerWrapper } from "@/components";
import { BsBellFill } from "react-icons/bs";
import Image from "next/image";
import img from "@/public/images/person.jpg";
import { getGreetingPeriod } from "@/helpers/utils";

const Drawer = () => {
  const { isDrawerOpen } = useAppSelector((store) => store.modal);
  const dispatch = useAppDispatch();

  return (
    <>
      {/* BACKDROP */}
      <div
        className={`${isDrawerOpen && "fixed left-0 top-0 z-40 h-screen w-screen bg-[#99999977]"}`}
        onClick={() => dispatch(closeDrawer())}
      />

      {/* OVERLAY */}
      <DrawerWrapper>
        <Header
          icon={<PiXBold />}
          content={
            <span className="pr-2">
              <BsBellFill />
            </span>
          }
          clickHandler={() => dispatch(closeDrawer())}
        />
        {/* AVATAR */}
        <div className="flex-center mb-4 mt-10">
          <div className="avatar">
            <div className="relative z-20 h-20 w-20 rounded-md">
              <Image src={img} alt="image" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* TITLE */}
        <div className="relative z-30 mx-auto mb-6 w-36 text-center font-semibold">
          <h3 className="-mb-1 text-sm">Good {getGreetingPeriod()}, Anup!</h3>
        </div>
      </DrawerWrapper>
    </>
  );
};

export default Drawer;
