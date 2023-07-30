export type ThemeContextProps = {
  isDarkMode: boolean;
  toggleMode: () => void;
};

export type FooterItemsType = {
  title: string;
  icon: ({ className }: { className: string }) => JSX.Element;
  path: string;
}[];
