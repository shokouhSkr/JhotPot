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

export type CategoryProps = {
  title: string;
  image: string;
}[];

export type CardRecipe = {
  title: string;
  image: string;
  category: string;
  time: number;
  ingredients: { title: string; image: string }[];
  description: string;
};

export type SingleTabProps = {
  activeTab: "Recipes" | "Reviews";
  setActiveTab: Dispatch<SetStateAction<"Recipes" | "Reviews">>;
  text: "Recipes" | "Reviews";
};

export type InfoCardProps = {
  icon: ReactNode;
  text: number;
};

export type ShowMoreProps = {
  text: string;
  maxChars: number;
};

export type IngredientProps = {
  image: string;
  title: string;
};

export type InitialState = {
  isSearchModalOpen: boolean;
  isDrawerOpen: boolean;
};

export type HeaderType = {
  icon: React.ReactNode;
  title?: string;
  content?: React.ReactNode;
  clickHandler?: () => void;
};

export type DrawerLink = {
  icon: React.ReactNode;
  title: string;
  path: string;
};
