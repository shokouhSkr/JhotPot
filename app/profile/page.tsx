import { Header, Wrapper, Stat } from "@/components";
import Image from "next/image";
import img from "@/public/images/person.jpg";
import { BsBellFill } from "react-icons/bs";

const Profile = () => {
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
      <div className="flex items-center justify-center gap-[6%]">
        <Stat title="followers" stat={1200} />
        <Stat title="recipes" stat={598} />
        <Stat title="views" stat={2900} />
      </div>

      {/* BUTTONS (from recipe card) */}
      <div></div>

      {/* TABS */}
      <div></div>
    </Wrapper>
  );
};

export default Profile;
