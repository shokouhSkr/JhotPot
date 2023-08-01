import { CategoryItem, FooterLinks } from "@/types";
import { BsFillPersonFill, BsGridFill, BsGearFill } from "react-icons/bs";
import { MdBookmark } from "react-icons/md";

export const footerLinks: FooterLinks = [
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

export const categoryItems: CategoryItem[] = [
  {
    title: "All",
    image: "/shrimp.svg",
  },
  {
    title: "Persian",
    image: "/noodle.svg",
  },
  {
    title: "Chinese",
    image: "/shrimp.svg",
  },
  {
    title: "Arabic",
    image: "/noodle.svg",
  },
  {
    title: "Italian",
    image: "/shrimp.svg",
  },
  {
    title: "Hindi",
    image: "/noodle.svg",
  },
];
