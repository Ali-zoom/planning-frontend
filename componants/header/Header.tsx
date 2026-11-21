import Logo from "./Logo";
import Links from "./Links";
import { ModeToggle } from "../Theme-Toggle";

const Header = () => {
  return (
    <header className="py-4 md:py-4 border-b-2 shadow-lg">
      <div className="myContainer flex items-center justify-between gap-x-10 ">
        <Logo />
        <Links />
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
