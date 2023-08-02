import { NavbarBtnProps } from "@/types";

const NavbarBtn = ({ clickHandler, icon }: NavbarBtnProps) => {
  return (
    <button
      type="button"
      className="rounded-full p-2 transition-all duration-300 hover:bg-main-gray active:bg-main-gray"
      onClick={clickHandler}
    >
      <span className="text-lg">{icon}</span>
    </button>
  );
};

export default NavbarBtn;
