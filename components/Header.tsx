import { HeaderType } from "@/types";
import Link from "next/link";

const Header = ({ title, content, icon, clickHandler }: HeaderType) => {
  return (
    <header className="flex-between relative z-20 my-3">
      <div className="flex items-center gap-4">
        {clickHandler ? (
          <button onClick={clickHandler} type="button">
            {icon}
          </button>
        ) : (
          <Link href="/" className="p-1">
            {icon}
          </Link>
        )}
        {title && <span>{title}</span>}
      </div>

      {content}
    </header>
  );
};

export default Header;
