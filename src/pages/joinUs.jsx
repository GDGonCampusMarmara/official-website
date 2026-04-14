import { useNavigate, Link } from "react-router-dom";
import Icon from "../components/common/icon";

const JoinUs = () => {
  const navigate = useNavigate();
  const options = [
    {
      title: "Üye Ol",
      description:
        "GDG on Campus Marmara topluluğuna resmi olarak katıl, etkinlik sertifikalarını al ve global teknoloji ağına dahil ol.",
      icon: "UserPlus",
      color: "text-blue-500",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)]",
      gradient: "from-blue-600/20",
      link: "https://gdg.community.dev/gdg-on-campus-marmara-university-istanbul-turkiye/",
    },
    {
      title: "Core Team'e Katıl",
      description:
        "Organizasyon, yazılım veya tasarım ekiplerimizde yer alarak mutfakta aktif rol al ve liderlik tecrübesi kazan.",
      icon: "ShieldCheck",
      color: "text-red-500",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.5)]",
      gradient: "from-red-600/20",
      link: "https://forms.gle/zBKHoE5oa9cvj2957",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0d14] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden overflow-y-auto">
      <div
        className="absolute inset-0 z-0 opacity-20 [background-image:radial-gradient(#ffffff1a_1px,transparent_1px)] [background-size:40px_40px]"
        aria-hidden="true"
      ></div>

      <Link
        to="/"
        className="absolute top-6 left-6 md:top-8 md:left-8 z-50 flex items-center gap-2 text-gray-400 hover:text-white transition-all group"
      >
        <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-white/20">
          <Icon name="ArrowLeft" size={16} />
        </div>
        <span className="font-medium text-sm md:text-base">Geri Dön</span>
      </Link>

      <div className="text-center mt-20 mb-12 md:mb-16 relative z-10 w-full">
        <h1 className="text-4xl md:text-7xl font-extrabold mb-4 md:mb-6 tracking-tight leading-tight md:leading-none">
          Geleceği <br className="md:hidden" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">
            Birlikte
          </span>{" "}
          Kuralım
        </h1>
        <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
          Sana en uygun yolu seç ve Marmara Üniversitesi'nin en aktif teknoloji
          topluluğuna dahil ol.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl relative z-10">
        {options.map((option, index) => (
          <a
            key={index}
            href={option.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-px rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-b from-white/20 to-transparent transition-all duration-500 hover:-translate-y-2 active:scale-[0.98] ${option.glow}`}
          >
            <article className="h-full w-full bg-[#0d111a]/90 backdrop-blur-xl rounded-[1.9rem] md:rounded-[2.4rem] p-8 md:p-12 flex flex-col items-center text-center overflow-hidden relative">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${option.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                aria-hidden="true"
              ></div>

              <div className="relative mb-6 md:mb-8">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white/5 rounded-2xl md:rounded-3xl flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-500">
                  <Icon
                    name={option.icon}
                    className={`${option.color} transform group-hover:scale-110 md:group-hover:scale-125 transition-all duration-500`}
                    size={40}
                  />
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 relative z-10">
                {option.title}
              </h2>

              <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-sm md:text-base relative z-10 px-2">
                {option.description}
              </p>

              <div className="mt-auto w-full py-4 rounded-xl md:rounded-2xl border border-white/10 bg-white/5 group-hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 font-bold text-xs md:text-sm uppercase tracking-widest relative z-10">
                <span>Başvuruyu Başlat</span>
                <Icon
                  name="ArrowRight"
                  size={16}
                  className="transform group-hover:translate-x-2 transition-transform"
                />
              </div>
            </article>
          </a>
        ))}
      </div>

      <div className="mt-12 opacity-30 text-[10px] uppercase tracking-widest">
        GDG Marmara • 2026
      </div>
    </div>
  );
};

export default JoinUs;
