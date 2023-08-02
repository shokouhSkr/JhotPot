import { ReactNode } from "react";

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
