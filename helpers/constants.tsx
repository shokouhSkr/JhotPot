import { CategoryItem, FooterLink, CardRecipe } from "@/types";
import { BsFillPersonFill, BsGridFill, BsGearFill } from "react-icons/bs";
import { MdBookmark } from "react-icons/md";

export const footerLinks: FooterLink[] = [
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

// complete recipe
export const recipes: CardRecipe[] = [
  {
    title: "Hot & Prawn Pizza",
    image: "/images/pizza1.png",
    category: "Chinese",
    time: 30,
    ingredients: 6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsum dolor sit amet voluptate.",
  },
  {
    title: "Hot & Prawn Pizza",
    image: "/images/pizza1.png",
    category: "Persian",
    time: 20,
    ingredients: 7,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsum dolor sit amet voluptate.",
  },
  {
    title: "Hot & Prawn Pizza",
    image: "/images/pizza1.png",
    category: "Persian",
    time: 20,
    ingredients: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsum dolor sit amet voluptate.",
  },
  {
    title: "Hot & Prawn Pizza",
    image: "/images/pizza1.png",
    category: "Hindi",
    time: 10,
    ingredients: 2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsum dolor sit amet voluptate.",
  },
  {
    title: "Hot & Prawn Pizza",
    image: "/images/pizza1.png",
    category: "Arabic",
    time: 25,
    ingredients: 4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsum dolor sit amet voluptate.",
  },
  {
    title: "Hot & Prawn Pizza",
    image: "/images/pizza1.png",
    category: "Italian",
    time: 60,
    ingredients: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsum dolor sit amet voluptate.",
  },
];

export const savedRecipes: CardRecipe[] = [
  {
    title: "Hot & Prawn Pizza",
    image: "/images/pizza1.png",
    category: "Chinese",
    time: 30,
    ingredients: 6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsum dolor sit amet voluptate.",
  },
  {
    title: "Hot & Prawn Pizza",
    image: "/images/pizza1.png",
    category: "Persian",
    time: 20,
    ingredients: 7,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsum dolor sit amet voluptate.",
  },
  {
    title: "Hot & Prawn Pizza",
    image: "/images/pizza1.png",
    category: "Persian",
    time: 20,
    ingredients: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsum dolor sit amet voluptate.",
  },
];
