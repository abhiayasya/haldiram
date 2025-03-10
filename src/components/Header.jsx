
import { useState, useEffect, useRef } from "react";
import { Menu, X, Globe, Mail, Search } from "lucide-react";
import HaldiramLogo from "../assets/icon/Haldiram_Logo.png";
import Dropdown from "./Dropdown";

const menuItems = [
  { name: "BUSINESS", link: "/business" },
  { name: "BRANDS", link: "#" },
  { name: "ABOUT US", link: "/about" },
  { name: "NEWSROOM", link: "/newsroom" },
  { name: "CAREERS", link: "/careers" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const logoRef = useRef(null);
  const dropdownRef = useRef(null);
  const [dropdownPosition, setDropdownPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Logo Position Fetch
  useEffect(() => {
    if (logoRef.current) {
      const rect = logoRef.current.getBoundingClientRect();
      setDropdownPosition(rect.left);
    }
  }, [isDropdownOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
        } py-4 px-6`}
      >
        <div className="container relative mx-auto flex items-center justify-between gap-5 ">
          {/* Logo + Mobile Menu Button */}
          <div className="flex items-center justify-between gap-5 w-full">
            <button className="md:hidden mr-3 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <img
              ref={logoRef}
              src={HaldiramLogo}
              alt="Logo"
              className="lg:max-w-[150px] max-w-[100px]"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center justify-end gap-10  w-full">
            <nav className="hidden  md:flex items-center gap-5 lg:gap-10">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className=""
                  onMouseEnter={() => {
                    if (item.name === "BRANDS") {
                      setIsDropdownOpen(true);
                    }
                  }}
                  onMouseLeave={() => {
                    setIsDropdownOpen(false);
                  }}
                >
                  <a
                    href={item.link}
                    className={`hover:text-[#E1251B] md:text-[13px] lg:text-base font-semibold text-nowrap ${
                      isScrolled ? "text-black" : "text-white"
                    }`}
                    onClick={(e) => item.name === "BRANDS" && e.preventDefault()}
                  >
                    {item.name}
                  </a>

                  {/* Dropdown (Only for BRANDS) */}
                  {item.name === "BRANDS" && isDropdownOpen && (
                    <div
                      ref={dropdownRef}
                      className="absolute left-[-4%] top-[4.6rem] w-screen bg-white shadow-lg z-50"
                      // style={{ left: dropdownPosition }}
                    >
                      <Dropdown />
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Icons */}
            <div
              className={`flex items-center border rounded-lg px-4 py-2 backdrop-blur-md ${
                isScrolled ? "border-black bg-gray-100" : "border-white bg-white/10"
              }`}
            >
              <Globe className={`w-5 h-5 mx-2 cursor-pointer ${isScrolled ? "text-black" : "text-white"}`} />
              <span className={`border-l ${isScrolled ? "border-black" : "border-white"} h-5`}></span>
              <Mail className={`w-5 h-5 mx-2 cursor-pointer ${isScrolled ? "text-black" : "text-white"}`} />
              <span className={`border-l ${isScrolled ? "border-black" : "border-white"} h-5`}></span>
              <Search className={`w-5 h-5 mx-2 cursor-pointer ${isScrolled ? "text-black" : "text-white"}`} />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white text-black flex flex-col items-center justify-center space-y-6">
          <button className="absolute top-5 right-5" onClick={() => setIsOpen(false)}>
            <X className="w-8 h-8 text-black" />
          </button>

          {menuItems.map((item, index) => (
            <a key={index} href={item.link} className="text-lg font-medium hover:text-gray-500">
              {item.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;

