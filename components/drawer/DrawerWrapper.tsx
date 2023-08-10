"use client";

import { useAppSelector } from "@/redux/hooks";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const { isDrawerOpen } = useAppSelector((store) => store.modal);

  return (
    <>
      <aside
        className={`${
          isDrawerOpen ? "translate-x-0" : "-translate-x-80"
        } fixed inset-y-0 left-0 z-50 w-72 bg-navbar p-4 shadow-lg transition-transform duration-300`}
      >
        {/* CIRCLES */}
        <div className="absolute -left-16 -top-12 mx-auto h-[300px] w-[300px] rounded-full bg-footer">
          <div className="absolute -top-2 left-14 mx-auto h-[200px] w-[200px] rounded-full bg-navbar" />
        </div>

        <div
          className="absolute -bottom-16 -left-14 mx-auto h-[200px] w-[200px] rounded-full 
        bg-footer"
        />

        {children}
      </aside>
    </>
  );
};

export default Wrapper;
