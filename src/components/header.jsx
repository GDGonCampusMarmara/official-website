import { useScrollSpy } from "../hooks/useScrollSpy"; // Hook'u import et
import Button from "./common/button";

const menuItems = [
  { name: "Anasayfa", href: "#hero", id: "hero" },
  { name: "Hakkımızda", href: "#about", id: "about" },
  { name: "Etkinlikler", href: "#events", id: "events" },
  { name: "Ekibimiz", href: "#team", id: "team" },
  { name: "SSS", href: "#faq", id: "faq" },
  { name: "İletişim", href: "#contact", id: "contact" },
];

const Header = () => {
  const { activeSection, isScrolled, scrollToSection } =
    useScrollSpy(menuItems);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0a0d14]/90 backdrop-blur-md h-20"
          : "bg-transparent h-24"
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <a href="#hero" onClick={(e) => scrollToSection(e, "hero")}>
          <img
            src="/logo.svg"
            className={`transition-all duration-500 ease-in-out object-contain ${
              isScrolled
                ? "h-18 w-auto opacity-90"
                : "h-20 w-auto opacity-100 scale-110"
            }`}
            alt="Logo"
          />
        </a>

        <nav className="hidden md:block">
          <ul className="flex gap-10">
            {menuItems.map((item) => (
              <li key={item.id} className="relative py-2">
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`text-sm font-semibold transition-all ${
                    activeSection === item.id
                      ? "text-blue-500"
                      : "text-white/70"
                  }`}
                >
                  {item.name}
                </a>
                {/* Aktif çizgi animasyonu */}
                <div
                  className={`absolute -bottom-1 left-0 h-[2px] bg-blue-500 transition-all ${
                    activeSection === item.id
                      ? "w-full opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />
              </li>
            ))}
          </ul>
        </nav>

        <Button variant="primary" size="sm">
          Aramıza Katıl
        </Button>
      </div>
    </header>
  );
};

export default Header;
