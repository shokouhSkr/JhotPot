import Link from "next/link";
import { PiCaretLeftBold } from "react-icons/pi";

const Header = ({ title, component }: { title?: string; component?: React.ReactNode }) => {
  return (
    <header className="flex-between relative z-20 my-3">
      <div className="flex items-center gap-4">
        <Link href="/" className="p-1">
          <PiCaretLeftBold />
        </Link>
        {title && <span>{title}</span>}
      </div>

      {component}
    </header>
  );
};

export default Header;
