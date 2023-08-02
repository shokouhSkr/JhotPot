import Link from "next/link";
import { PiCaretLeftBold } from "react-icons/pi";

const Header = ({ title, text }: { title?: boolean; text?: boolean }) => {
  return (
    <header className="flex-between mb-3">
      <div className="flex items-center gap-4">
        <Link href="/" className="p-1">
          <PiCaretLeftBold />
        </Link>
        {title && <span>Saved</span>}
      </div>

      {text && <span className="pr-2 text-xs">22 recipes</span>}
    </header>
  );
};

export default Header;
