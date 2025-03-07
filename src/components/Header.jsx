
import { Menu, X, Globe, Mail, Search } from "lucide-react";
import HaldiramLogo from "../assets/icon/Haldiram_Logo.webp";
import { useState } from "react";

const menuItems = [
  { name: "BUSINESS", link: "/business" },
  { name: "BRANDS", link: "/brands" },
  { name: "ABOUT US", link: "/about" },
  { name: "NEWSROOM", link: "/newsroom" },
  { name: "CAREERS", link: "/careers" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-transparent text-white py-4 px-6 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between gap-5">
        {/* Left Section (Logo + Mobile Menu Button) */}
        <div className="flex items-center justify-between gap-5 max-w-[350px] w-full">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden mr-3 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <img
            src={HaldiramLogo}
            alt="Logo"
            className="lg:max-w-[150px] max-w-[100px]"
          />
        </div>

        {/* Desktop Navigation (Center) */}
        <div className="flex items-center justify-between gap-10">
          <nav className="hidden md:flex items-center gap-5 lg:gap-10">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="hover:text-gray-300 md:text-[13px] lg:text-base font-semibold text-nowrap"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Section (Icons) */}
          <div className="flex items-center border border-white rounded-lg px-4 py-2 backdrop-blur-md bg-white/10">
            <Globe className="w-5 h-5 mx-2 cursor-pointer" />
            <span className="border-l border-white h-5"></span>
            <Mail className="w-5 h-5 mx-2 cursor-pointer" />
            <span className="border-l border-white h-5"></span>
            <Search className="w-5 h-5 mx-2 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white text-black flex flex-col items-center justify-center space-y-6">
          <button
            className="absolute top-5 right-5"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-8 h-8 text-black" />
          </button>

          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-lg font-medium hover:text-gray-500"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
