import { BsFillPersonFill, BsGridFill, BsGearFill } from "react-icons/bs";
import { MdBookmark } from "react-icons/md";

export const footerLinks = [
  {
    title: "Home",
    icon: <BsGridFill />,
    path: "/",
  },
  {
    title: "Profile",
    icon: <BsFillPersonFill />,
    path: "/profile",
  },
  {
    title: "Saved",
    icon: <MdBookmark />,
    path: "/saved",
  },
  {
    title: "Settings",
    icon: <BsGearFill />,
    path: "/settings",
  },
];
