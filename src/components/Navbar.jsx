import { nav } from "../constants";
import logo from "/logo/logo.svg";
import mobileMenu from "/menu/hamburger-menu.svg";

const Navbar = () => {
  return (
    <nav className="min-w-auto py-3">
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} width={50} className="w-20 md:w-32" />
        </div>
        <div className="hidden md:flex md:gap-x-8 lg:gap-x-20 nav-text">
          {nav.map((item, index) => (
            <div key={item}>
              <a
                href={item.link}
                className={`${index === 0 ? "text-[#FA4A0C]" : ""}`}
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <img src={mobileMenu} width={40} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
