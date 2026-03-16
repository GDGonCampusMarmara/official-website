const Header = () => {
  const menuItems = [
    { name: "Anasayfa", href: "#hero" },
    { name: "Hakkımızda", href: "#about" },
    { name: "Etkinlikler", href: "#events" },
    { name: "Ekibimiz", href: "#team" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-300">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2"
          title="GDG Official Website"
        >
          <img
            src="/logo.svg"
            alt="GDG Logo"
            className="h-24 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:block">
          <ul className="flex gap-10">
            {menuItems.map((item, index) => (
              <li key={item.name} className="relative group">
                <a
                  href={item.href}
                  className={`text-m font-semibold tracking-wide transition-colors duration-200 hover:text-blue-400 ${
                    index === 0 ? "text-blue-500" : "text-white"
                  }`}
                >
                  {item.name}
                </a>

                {index === 0 && (
                  <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-blue-500 rounded-full"></div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <a
            href="#join"
            className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-blue-500/40 active:scale-95 inline-block"
          >
            Aramıza Katıl
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
