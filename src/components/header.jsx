import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useScrollSpy } from "../hooks/useScrollSpy";
import Button from "./common/button";
import Icon from "./common/icon";

const menuItems = [
  { name: "Anasayfa", href: "#hero", id: "hero" },
  { name: "Hakkımızda", href: "#about", id: "about" },
  { name: "Etkinlikler", href: "#events", id: "events" },
  { name: "Ekibimiz", href: "#team", id: "team" },
  { name: "SSS", href: "#faq", id: "faq" },
  { name: "İletişim", href: "#contact", id: "contact" },
];

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeSection, isScrolled, scrollToSection } =
    useScrollSpy(menuItems);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const handleMobileNav = (e, id) => {
    setIsMenuOpen(false);
    scrollToSection(e, id);
  };

  const githubUrl = "https://github.com/GDGonCampusMarmara";

  const GitHubIcon = ({ size = 20 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? "bg-[#0a0d14] md:bg-[#0a0d14]/90 md:backdrop-blur-md h-20 shadow-xl"
          : "bg-transparent h-24"
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "hero")}
          className="relative z-[70] flex items-center"
          aria-label="Anasayfa"
        >
          <img
            src="/logo.svg"
            className={`transition-all duration-500 ${
              isScrolled ? "h-10 md:h-12" : "h-12 md:h-14 scale-105"
            }`}
            alt="GDG Logo"
          />
        </a>

        <nav className="hidden md:block">
          <ul className="flex gap-8 lg:gap-10">
            {menuItems.map((item) => (
              <li key={item.id} className="relative py-2">
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`text-sm font-semibold transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-blue-500"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
                <div
                  className={`absolute -bottom-1 left-0 h-[2px] bg-blue-500 transition-all duration-300 ${
                    activeSection === item.id
                      ? "w-full opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2 rounded-lg text-white/80 hover:text-white bg-white/5 hover:bg-white/10 transition-all border border-white/10"
            aria-label="GitHub Profilimiz"
          >
            <GitHubIcon size={20} />
          </a>
          <Button
            variant="primary"
            size="sm"
            onClick={() => navigate("/aramiza-katil")}
          >
            Aramıza Katıl
          </Button>
        </div>

        <button
          className="md:hidden relative z-[70] p-2 text-white outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
        >
          <Icon name={isMenuOpen ? "X" : "Menu"} size={30} />
        </button>

        <div
          className={`fixed inset-0 bg-[#0a0d14] z-[60] flex flex-col transition-transform duration-500 ease-in-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col h-full pt-32 px-10 pb-12 overflow-y-auto">
            <ul className="flex flex-col gap-6">
              {menuItems.map((item, index) => (
                <li
                  key={item.id}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                  }}
                  className={`transition-all duration-500 ${
                    isMenuOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleMobileNav(e, item.id)}
                    className={`text-3xl font-bold tracking-tighter ${
                      activeSection === item.id ? "text-blue-500" : "text-white"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div
              className={`mt-12 flex gap-3 transition-all duration-700 delay-300 ${
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 rounded-xl text-white bg-white/5 border border-white/10 shadow-2xl"
                aria-label="GitHub Profilimiz"
              >
                <GitHubIcon size={24} />
              </a>
              <Button
                variant="primary"
                className="flex-1 py-5 text-lg font-bold shadow-2xl shadow-blue-600/20"
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate("/aramiza-katil");
                }}
              >
                Aramıza Katıl
              </Button>
            </div>

            <div className="mt-auto text-center">
              <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-bold">
                GDG on Campus Marmara
              </p>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
