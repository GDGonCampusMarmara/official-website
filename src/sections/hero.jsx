import { useMemo } from "react";

const Hero = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => ({
      id: `star-${i}`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2.5 + 1}px`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.7 + 0.3,
    }));
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen w-full pt-20 flex items-center justify-center bg-[#0a0d14] relative overflow-hidden z-10"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/20 via-transparent to-transparent opacity-40"></div>
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-pulse-slow shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 flex justify-center">
        <div className="flex flex-col items-start text-left max-w-5xl w-full">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter text-white">
            <span className="text-blue-500">Bağlan.</span>
            <span className="text-red-500 ml-6">Paylaş.</span>
            <br />
            <span className="text-green-500">Üret.</span>
          </h1>

          <p className="text-gray-300 text-xl md:text-xl max-w-2xl mt-8 leading-relaxed font-normal opacity-90">
            Google Developers tarafından desteklenen, Marmara
            Üniversitesi&apos;nin teknoloji ve yazılım topluluğu. Öğren,
            geliştir ve ağını genişlet.
          </p>

          <div className="flex flex-wrap gap-6 mt-10">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-blue-600/20 active:scale-95">
              Etkinlikleri Keşfet →
            </button>
            <button className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full font-bold text-lg transition-all active:scale-95">
              Aramıza Katıl
            </button>
          </div>

          <div className="flex flex-wrap gap-12 mt-16 border-t border-white/10 pt-10 w-full">
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-blue-500">20+</span>
              <span className="text-gray-400 text-xs uppercase tracking-[0.2em] mt-1">
                Sponsor
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-green-500">500+</span>
              <span className="text-gray-400 text-xs uppercase tracking-[0.2em] mt-1">
                Üye
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-yellow-500">50+</span>
              <span className="text-gray-400 text-xs uppercase tracking-[0.2em] mt-1">
                Etkinlik
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
