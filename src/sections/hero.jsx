import StarField from "../components/starField";
import Button from "../components/common/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen w-full pt-20 flex items-center justify-center bg-[#0a0d14] relative overflow-hidden z-10"
    >
      <StarField starCount={120} />

      <div className="container mx-auto px-6 relative z-10 flex justify-center">
        <div className="flex flex-col items-start text-left max-w-5xl w-full">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter text-white">
            <span className="text-blue-500">Bağlan.</span>
            <span className="text-red-500 ml-6">Paylaş.</span>
            <br />
            <span className="text-green-500">Üret.</span>
          </h1>

          <p className="text-gray-300 text-xl md:text-xl max-w-2xl mt-8 leading-relaxed font-normal opacity-90">
            Google Developers Groups tarafından desteklenen, Marmara
            Üniversitesi&apos;nin teknoloji ve yazılım topluluğu. Öğren,
            geliştir ve ağını genişlet.
          </p>

          <div className="flex flex-wrap gap-6 mt-10">
            <Button variant="primary">Etkinlikleri Keşfet →</Button>
            <Button variant="secondary">Aramıza Katıl</Button>
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
