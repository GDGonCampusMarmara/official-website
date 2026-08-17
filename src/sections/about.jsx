import { useState, useEffect } from "react";
import Icon from "../components/common/icon";

const stats = [
  { value: "2019", label: "Kuruluş", color: "text-blue-500" },
  { value: "500+", label: "Topluluk Üyesi", color: "text-red-500" },
  { value: "40+", label: "Etkinlik", color: "text-yellow-400" },
];

const brandDots = [
  { color: "bg-blue-500", word: "Yenilik" },
  { color: "bg-red-500", word: "Tutku" },
  { color: "bg-yellow-400", word: "Paylaşım" },
  { color: "bg-green-500", word: "Topluluk" },
];

const floatPositions = [
  "translate-x-0 translate-y-0",
  "-translate-x-8 translate-y-6",
  "translate-x-6 translate-y-12",
  "-translate-x-4 -translate-y-6",
];

const About = () => {
  const [activeDot, setActiveDot] = useState(null);
  const [floatStep, setFloatStep] = useState(0);

  useEffect(() => {
    if (activeDot === null) return;
    const timer = setTimeout(() => setActiveDot(null), 1200);
    return () => clearTimeout(timer);
  }, [activeDot]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatStep((prev) => (prev + 1) % floatPositions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="min-h-screen w-full pt-16 md:pt-24 pb-16 bg-[#0a0d14] relative overflow-hidden"
    >
      <div
        className={`absolute -top-48 -right-48 w-[42rem] h-[42rem] transition-transform duration-[4000ms] ease-in-out ${floatPositions[floatStep]}`}
        aria-hidden="true"
      >
        <div className="w-full h-full rounded-full blur-[160px] opacity-25 animate-[spin_20s_linear_infinite] bg-[conic-gradient(from_0deg,#4285F4,#EA4335,#FBBC04,#34A853,#4285F4)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <article className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            {brandDots.map((dot, index) => (
              <button
                key={dot.word}
                type="button"
                onClick={() => setActiveDot(index)}
                aria-label={dot.word}
                className="relative w-2.5 h-2.5 rounded-full outline-none"
              >
                <span
                  className={`absolute inset-0 rounded-full ${dot.color} transition-transform duration-300 ${
                    activeDot === index ? "scale-[2.2]" : "scale-100 hover:scale-125"
                  }`}
                ></span>
                {activeDot === index && (
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium text-gray-300 bg-white/10 border border-white/10 px-2 py-0.5 rounded-full">
                    {dot.word}
                  </span>
                )}
              </button>
            ))}
            <h2
              id="about-heading"
              className="text-blue-500 font-bold tracking-widest uppercase text-xs md:text-sm ml-2"
            >
              Hakkımızda
            </h2>
          </div>

          <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.15] max-w-2xl">
            Geleceğin Teknolojilerini{" "}
            <span className="text-gray-400 font-medium">
              Birlikte İnşa Ediyoruz.
            </span>
          </h3>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
            <strong className="text-gray-300 font-semibold">
              GDG on Campus Marmara
            </strong>
            , teknolojiye meraklı öğrencileri bir araya getiren, paylaşımı ve
            öğrenmeyi temel alan bir topluluktur. Google ekosistemindeki en
            güncel gelişmeleri takip ederken, uygulamalı atölyelerle
            kendimizi geliştiriyoruz.
          </p>

          <div
            className="flex flex-wrap gap-8 md:gap-12 mt-2 pt-8 border-t border-white/10"
            aria-label="Topluluk rakamları"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col group cursor-default">
                <span
                  className={`text-3xl md:text-4xl font-extrabold ${stat.color} transition-transform duration-300 group-hover:scale-110 inline-block w-fit`}
                >
                  {stat.value}
                </span>
                <span className="text-gray-500 text-sm mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;