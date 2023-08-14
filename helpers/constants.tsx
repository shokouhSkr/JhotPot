import { FooterLink, CardRecipe, CategoryProps, DrawerLink } from "@/types";
import { BsFillPersonFill, BsGridFill, BsGearFill, BsCloudyFill } from "react-icons/bs";
import { MdBookmark } from "react-icons/md";
import { PiForkKnifeFill } from "react-icons/pi";

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

export const categoryItems: CategoryProps = [
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
    ingredients: [
      {
        title: "Sesame oil",
        image: "/shrimp.svg",
      },
      {
        title: "Garlic",
        image: "/noodle.svg",
      },
      {
        title: "Basil",
        image: "/noodle.svg",
      },
      {
        title: "Eggs",
        image: "/noodle.svg",
      },
      {
        title: "Butter",
        image: "/shrimp.svg",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsum dolor sit amet voluptate.",
  },
  {
    title: "Hot & Prawn Pizza",
    image: "/images/pizza1.png",
    category: "Persian",
    time: 20,
    ingredients: [
      {
        title: "Eggs",
        image: "/noodle.svg",
      },
      {
        title: "Butter",
        image: "/shrimp.svg",
      },
      {
        title: "Sesame oil",
        image: "/shrimp.svg",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsum dolor sit amet voluptate.",
  },
  {
    title: "Hot & Prawn Pizza",
    image: "/images/pizza1.png",
    category: "Persian",
    time: 20,
    ingredients: [
      {
        title: "Basil",
        image: "/noodle.svg",
      },
      {
        title: "Garlic",
        image: "/noodle.svg",
      },
      {
        title: "Eggs",
        image: "/noodle.svg",
      },
      {
        title: "Sesame oil",
        image: "/shrimp.svg",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsum dolor sit amet voluptate.",
  },
  {
    title: "Hot & Prawn Pizza",
    image: "/images/pizza1.png",
    category: "Hindi",
    time: 10,
    ingredients: [
      {
        title: "Butter",
        image: "/shrimp.svg",
      },
      {
        title: "Sesame oil",
        image: "/shrimp.svg",
      },
      {
        title: "Basil",
        image: "/noodle.svg",
      },
      {
        title: "Eggs",
        image: "/noodle.svg",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsum dolor sit amet voluptate.",
  },
  {
    title: "Hot & Prawn Pizza",
    image: "/images/pizza1.png",
    category: "Arabic",
    time: 25,
    ingredients: [
      {
        title: "Garlic",
        image: "/noodle.svg",
      },
      {
        title: "Eggs",
        image: "/noodle.svg",
      },
      {
        title: "Basil",
        image: "/noodle.svg",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsum dolor sit amet voluptate.",
  },
  {
    title: "Hot & Prawn Pizza",
    image: "/images/pizza1.png",
    category: "Italian",
    time: 60,
    ingredients: [
      {
        title: "Basil",
        image: "/noodle.svg",
      },
      {
        title: "Sesame oil",
        image: "/shrimp.svg",
      },
      {
        title: "Garlic",
        image: "/noodle.svg",
      },
      {
        title: "Butter",
        image: "/shrimp.svg",
      },
      {
        title: "Eggs",
        image: "/noodle.svg",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsum dolor sit amet voluptate.",
  },
];

export const savedRecipes: CardRecipe[] = [
  {
    title: "Hot & Prawn Pizza",
    image: "/images/pizza1.png",
    category: "Hindi",
    time: 10,
    ingredients: [
      {
        title: "Butter",
        image: "/shrimp.svg",
      },
      {
        title: "Sesame oil",
        image: "/shrimp.svg",
      },
      {
        title: "Basil",
        image: "/noodle.svg",
      },
      {
        title: "Eggs",
        image: "/noodle.svg",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsum dolor sit amet voluptate.",
  },
  {
    title: "Hot & Prawn Pizza",
    image: "/images/pizza1.png",
    category: "Arabic",
    time: 25,
    ingredients: [
      {
        title: "Garlic",
        image: "/noodle.svg",
      },
      {
        title: "Eggs",
        image: "/noodle.svg",
      },
      {
        title: "Basil",
        image: "/noodle.svg",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsum dolor sit amet voluptate.",
  },
  {
    title: "Hot & Prawn Pizza",
    image: "/images/pizza1.png",
    category: "Italian",
    time: 60,
    ingredients: [
      {
        title: "Basil",
        image: "/noodle.svg",
      },
      {
        title: "Sesame oil",
        image: "/shrimp.svg",
      },
      {
        title: "Garlic",
        image: "/noodle.svg",
      },
      {
        title: "Butter",
        image: "/shrimp.svg",
      },
      {
        title: "Eggs",
        image: "/noodle.svg",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsum dolor sit amet voluptate.",
  },
  {
    title: "Hot & Prawn Pizza",
    image: "/images/pizza1.png",
    category: "Hindi",
    time: 10,
    ingredients: [
      {
        title: "Butter",
        image: "/shrimp.svg",
      },
      {
        title: "Sesame oil",
        image: "/shrimp.svg",
      },
      {
        title: "Basil",
        image: "/noodle.svg",
      },
      {
        title: "Eggs",
        image: "/noodle.svg",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsum dolor sit amet voluptate.",
  },
  {
    title: "Hot & Prawn Pizza",
    image: "/images/pizza1.png",
    category: "Arabic",
    time: 25,
    ingredients: [
      {
        title: "Garlic",
        image: "/noodle.svg",
      },
      {
        title: "Eggs",
        image: "/noodle.svg",
      },
      {
        title: "Basil",
        image: "/noodle.svg",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsum dolor sit amet voluptate.",
  },
  {
    title: "Hot & Prawn Pizza",
    image: "/images/pizza1.png",
    category: "Italian",
    time: 60,
    ingredients: [
      {
        title: "Basil",
        image: "/noodle.svg",
      },
      {
        title: "Sesame oil",
        image: "/shrimp.svg",
      },
      {
        title: "Garlic",
        image: "/noodle.svg",
      },
      {
        title: "Butter",
        image: "/shrimp.svg",
      },
      {
        title: "Eggs",
        image: "/noodle.svg",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsum dolor sit amet voluptate.",
  },
];

export const drawerLinks: DrawerLink[] = [
  {
    title: "My Recipe",
    icon: <PiForkKnifeFill />,
    path: "/my-recipe",
  },
  {
    title: "Saved",
    icon: <MdBookmark />,
    path: "/saved",
  },
  {
    title: "My Profile",
    icon: <BsFillPersonFill />,
    path: "/profile",
  },
  {
    title: "Settings",
    icon: <BsGearFill />,
    path: "/settings",
  },
  {
    title: "About",
    icon: <BsCloudyFill />,
    path: "/about",
  },
];
