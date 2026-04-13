import StarField from "../components/starField";
import Icon from "../components/common/icon";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="min-h-screen w-full pt-20 flex items-center justify-center bg-[#0a0d14] relative overflow-hidden z-10"
    >
      <StarField starCount={120} />
      <div className="container mx-auto px-6 relative z-10 flex justify-center">
        <div className="flex flex-col items-start text-left max-w-5xl w-full">
          <h1
            id="hero-title"
            className="text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter text-white"
          >
            <span className="text-blue-500">Bağlan.</span>
            <span className="text-red-500 ml-6">Paylaş.</span>
            <br />
            <span className="text-green-500">Üret.</span>
          </h1>
          <p className="text-gray-300 text-xl md:text-xl max-w-2xl mt-8 leading-relaxed font-normal opacity-90">
            Google Developer Groups tarafından desteklenen,{" "}
            <strong>Marmara Üniversitesi</strong>'nin teknoloji ve yazılım
            topluluğu. Öğren, geliştir ve ağını genişlet.
          </p>
          <div className="flex flex-wrap gap-6 mt-10">
            <a
              href="#events"
              aria-label="Scroll down to explore events"
              className="px-8 py-4 rounded-full font-bold text-lg bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20 transition-all active:scale-95 flex items-center justify-center"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("events")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Etkinlikleri Keşfet{" "}
              <Icon
                name="ArrowRight"
                size={20}
                aria-hidden="true"
                className="ml-2"
              />
            </a>
            <a
              href="/aramiza-katil"
              aria-label="Join the GDG Marmara community"
              className="px-8 py-4 rounded-full font-bold text-lg bg-white hover:bg-gray-100 text-black transition-all active:scale-95 flex items-center justify-center"
              onClick={(e) => {
                e.preventDefault();
                navigate("/aramiza-katil");
              }}
            >
              Aramıza Katıl
            </a>
          </div>
          <div
            className="flex flex-wrap gap-12 mt-16 border-t border-white/10 pt-10 w-full"
            role="region"
            aria-label="Community Statistics"
          >
            <div className="flex flex-col">
              <span
                className="text-4xl font-bold text-blue-500"
                aria-label="More than 20 sponsors"
              >
                20+
              </span>
              <span className="text-gray-400 text-xs uppercase tracking-[0.2em] mt-1">
                Sponsor
              </span>
            </div>
            <div className="flex flex-col">
              <span
                className="text-4xl font-bold text-green-500"
                aria-label="More than 500 members"
              >
                500+
              </span>
              <span className="text-gray-400 text-xs uppercase tracking-[0.2em] mt-1">
                Üye
              </span>
            </div>
            <div className="flex flex-col">
              <span
                className="text-4xl font-bold text-yellow-500"
                aria-label="More than 50 events"
              >
                50+
              </span>
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
