"use client";

import { ThemeProvider } from "next-themes";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
};

export default Providers;
