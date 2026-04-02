import { useNavigate } from "react-router-dom";
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
    <div className="min-h-screen bg-[#0a0d14] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 [background-image:radial-gradient(#ffffff1a_1px,transparent_1px)] [background-size:40px_40px]"></div>

      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <button
        onClick={() => navigate("/")}
        className="absolute top-8 left-8 z-50 flex items-center gap-2 text-gray-400 hover:text-white transition-all group"
      >
        <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-white/20 transition-all">
          <Icon name="ArrowLeft" size={18} />
        </div>
        <span className="font-medium">Ana Sayfaya Dön</span>
      </button>

      <div className="text-center mb-16 relative z-10">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">
          Bize Katıl
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-none">
          Geleceği <br className="md:hidden" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">
            Birlikte
          </span>{" "}
          Kuralım
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Sana en uygun yolu seç ve Marmara Üniversitesi'nin en aktif teknoloji
          topluluğuna dahil ol.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl relative z-10">
        {options.map((option, index) => (
          <a
            key={index}
            href={option.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-px rounded-[2.5rem] bg-gradient-to-b from-white/20 to-transparent transition-all duration-500 hover:-translate-y-3 ${option.glow}`}
          >
            <div
              className={`h-full w-full bg-[#0d111a]/90 backdrop-blur-xl rounded-[2.4rem] p-8 md:p-12 flex flex-col items-center text-center overflow-hidden relative`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${option.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="relative mb-8">
                <div
                  className={`w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-500`}
                >
                  <Icon
                    name={option.icon}
                    className={`${option.color} transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-500`}
                    size={48}
                  />
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-4 relative z-10">
                {option.title}
              </h2>
              <p className="text-gray-400 mb-10 leading-relaxed text-base relative z-10">
                {option.description}
              </p>

              <div
                className={`mt-auto w-full py-4 rounded-2xl border border-white/10 bg-white/5 group-hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 font-bold text-sm uppercase tracking-widest relative z-10`}
              >
                <span>Başvuruyu Başlat</span>
                <Icon
                  name="ArrowRight"
                  size={18}
                  className="transform group-hover:translate-x-2 transition-transform"
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default JoinUs;
