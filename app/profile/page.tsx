"use client";

import { useState } from "react";
import { Header, Wrapper, Stat, SingleTab, CardReview } from "@/components";
import Image from "next/image";
import img from "@/public/images/person.jpg";
import { BsBellFill, BsCloudUpload } from "react-icons/bs";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<"Recipes" | "Reviews">("Reviews");

  return (
    <Wrapper>
      <Header
        component={
          <span className="pr-2">
            <BsBellFill />
          </span>
        }
      />

      {/* AVATAR */}
      <div className="flex-center mb-4">
        <div className="avatar">
          <div className="relative z-20 h-24 w-24 rounded-md">
            <Image src={img} alt="image" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* TITLE */}
      <div className="relative z-30 mx-auto mb-6 w-36 text-center font-semibold">
        <h3 className="-mb-1 text-sm">Anup Kanty Dep</h3>
        <span className="text-xs text-dark-gray">Chef EGS</span>
      </div>

      {/* STATS */}
      <div className="mb-5 flex items-center justify-center gap-[6%]">
        <Stat title="followers" stat={1200} />
        <Stat title="recipes" stat={598} />
        <Stat title="views" stat={2900} />
      </div>

      {/* BUTTONS */}
      <div className="flex-center mx-4 mb-5 gap-[5%]">
        <button
          type="button"
          className="btn-wide rounded-md border border-main-gray bg-light-gray py-3 text-center text-sm"
        >
          Edit Profile
        </button>
        <button
          type="button"
          className="flex-center w-[45px] rounded-md border border-main-gray bg-light-gray p-3 text-sm"
        >
          <BsCloudUpload className="text-xl text-orange" />
        </button>
      </div>

      {/* TABS */}
      <div className="tabs mx-auto mb-4 max-w-md px-4">
        <SingleTab activeTab={activeTab} setActiveTab={setActiveTab} text="Recipes" />
        <SingleTab activeTab={activeTab} setActiveTab={setActiveTab} text="Reviews" />

        {/* REVIEWS */}
        <div
          className={`${
            activeTab === "Reviews" ? "block" : "hidden"
          } hide-scrollbar mt-4 flex h-40 flex-col gap-2 overflow-y-scroll`}
        >
          {/* SINGLE REVIEW CARD */}
          <CardReview/>
          <CardReview/>
          <CardReview/>
        </div>

        {/* RECIPES */}
        <div
          className={`${
            activeTab === "Recipes" ? "block" : "hidden"
          } hide-scrollbar mt-4 h-40 overflow-y-scroll bg-red-200`}
        >
          hi
        </div>
      </div>
    </Wrapper>
  );
};

export default Profile;
