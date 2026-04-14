import StarField from "../components/starField";
import Icon from "../components/common/icon";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="min-h-screen w-full pt-28 pb-10 md:pt-20 flex items-center justify-center bg-[#0a0d14] relative overflow-hidden z-10"
    >
      <StarField starCount={120} />
      <div className="container mx-auto px-6 relative z-10 flex justify-center">
        {/* Mobilde text-center, desktopta text-left */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-5xl w-full">
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.2] md:leading-[1.1] tracking-tighter text-white"
          >
            <span className="text-blue-500">Bağlan.</span>
            {/* Mobilde alt alta gelmesi için ml-0 md:ml-6 kullandık */}
            <span className="text-red-500 block md:inline md:ml-6">
              Paylaş.
            </span>
            <br className="hidden md:block" />
            <span className="text-green-500">Üret.</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mt-6 md:mt-8 leading-relaxed font-normal opacity-90">
            Google Developer Groups tarafından desteklenen,{" "}
            <strong className="text-white">Marmara Üniversitesi</strong>'nin
            teknoloji ve yazılım topluluğu. Öğren, geliştir ve ağını genişlet.
          </p>

          {/* Butonlar mobilde alt alta (flex-col), desktopta yan yana (flex-row) */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-10 w-full sm:w-auto">
            <a
              href="#events"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20 transition-all active:scale-95 flex items-center justify-center"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("events")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Etkinlikleri Keşfet{" "}
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </a>
            <a
              href="/aramiza-katil"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg bg-white hover:bg-gray-100 text-black transition-all active:scale-95 flex items-center justify-center"
              onClick={(e) => {
                e.preventDefault();
                navigate("/aramiza-katil");
              }}
            >
              Aramıza Katıl
            </a>
          </div>

          {/* İstatistikler mobilde 3 sütunlu ızgara yapısı */}
          <div
            className="grid grid-cols-3 md:flex gap-4 md:gap-12 mt-16 border-t border-white/10 pt-10 w-full"
            role="region"
            aria-label="Community Statistics"
          >
            <div className="flex flex-col items-center md:items-start">
              <span className="text-2xl md:text-4xl font-bold text-blue-500">
                20+
              </span>
              <span className="text-gray-400 text-[10px] md:text-xs uppercase tracking-widest mt-1">
                Sponsor
              </span>
            </div>
            <div className="flex flex-col items-center md:items-start border-x border-white/5 md:border-none px-2 md:px-0">
              <span className="text-2xl md:text-4xl font-bold text-green-500">
                500+
              </span>
              <span className="text-gray-400 text-[10px] md:text-xs uppercase tracking-widest mt-1">
                Üye
              </span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-2xl md:text-4xl font-bold text-yellow-500">
                50+
              </span>
              <span className="text-gray-400 text-[10px] md:text-xs uppercase tracking-widest mt-1">
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
