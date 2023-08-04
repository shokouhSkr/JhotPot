import { Dispatch, ReactNode, SetStateAction } from "react";

export type ThemeContextProps = {
  isDarkMode: boolean;
  toggleMode: () => void;
};

export type FooterItemsType = {
  title: string;
  icon: ReactNode;
  path: string;
}[];

export type FooterLink = {
  title: string;
  icon: ReactNode;
  path: string;
};

export type NavbarBtnProps = {
  clickHandler: () => void;
  icon: ReactNode;
};

export type CategoryItem = {
  title: string;
  image: string;
};

export type CardRecipe = {
  title: string;
  image: string;
  category: string;
  time: number;
  ingredients: number;
  description: string;
};

export type SingleTabProps = {
  activeTab: "Recipes" | "Reviews";
  setActiveTab: Dispatch<SetStateAction<"Recipes" | "Reviews">>;
  text: "Recipes" | "Reviews";
};
