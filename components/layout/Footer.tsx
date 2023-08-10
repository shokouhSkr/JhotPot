"use client";

import { footerLinks } from "@/helpers/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="bg-footer p-4 font-medium text-main-gray">
      <ul className="flex items-center justify-around">
        {footerLinks.map((link) => {
          const { icon, path, title } = link;

          return (
            <Link
              key={title}
              href={path}
              className={`flex items-center gap-2 px-3 py-1.5 ${
                pathname === path && "rounded-lg border border-orange bg-light-orange text-orange"
              }`}
            >
              <span style={{ fontSize: "23px" }}>{icon}</span>
              <span className={`text-[13px] ${pathname === path ? "block" : "hidden"}`}>
                {title}
              </span>
            </Link>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
