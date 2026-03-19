import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const menuItems = [
    { name: "Anasayfa", href: "#hero", id: "hero" },
    { name: "Hakkımızda", href: "#about", id: "about" },
    { name: "Etkinlikler", href: "#events", id: "events" },
    { name: "Ekibimiz", href: "#team", id: "team" },
    { name: "Blog", href: "#blog", id: "blog" },
  ];

  useEffect(() => {
    const handleScrollBg = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    menuItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    window.addEventListener("scroll", handleScrollBg);

    return () => {
      window.removeEventListener("scroll", handleScrollBg);
      observer.disconnect();
    };
  });

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 85; // Header yüksekliğine göre boşluk
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0a0d14]/90 backdrop-blur-md border-b border-white/5 h-20"
          : "bg-transparent h-24"
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleClick(e, "hero")}
          className="flex items-center gap-2"
        >
          <img
            src="/logo.svg"
            alt="GDG Logo"
            className={`transition-all duration-300 object-contain ${
              isScrolled ? "h-12" : "h-16"
            }`}
          />
        </a>

        <nav className="hidden md:block">
          <ul className="flex gap-10">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.id} className="relative py-2">
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.id)}
                    className={`text-sm font-semibold tracking-wide transition-all duration-300 ${
                      isActive
                        ? "text-blue-500"
                        : "text-white/70 hover:text-blue-400"
                    }`}
                  >
                    {item.name}
                  </a>

                  <div
                    className={`absolute -bottom-1 left-0 h-[2px] bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)] transition-all duration-500 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  ></div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div>
          <a
            href="#join"
            className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full text-sm font-bold transition-all shadow-lg active:scale-95 inline-block"
          >
            Aramıza Katıl
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
