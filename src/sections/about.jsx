import { focusAreas } from "../constants/aboutData";
import FocusCard from "../components/focusCard";
import Icon from "../components/common/icon";


const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full pt-20 bg-[#0a0d14] relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6 text-left">
            <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm">
              Hakkımızda
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Geleceğin Teknolojilerini <br />
              <span className="text-gray-400 font-medium">
                Birlikte İnşa Ediyoruz.
              </span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              GDG on Campus Marmara, teknolojiye meraklı öğrencileri bir araya
              getiren, paylaşımı ve öğrenmeyi temel alan bir topluluktur. Google
              ekosistemindeki en güncel gelişmeleri takip ederken, uygulamalı
              atölyelerle kendimizi geliştiriyoruz.
            </p>
            <div className="flex gap-4 mt-4">
              <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-white text-sm">
                🚀 İnovasyon Odaklı
              </div>
              <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-white text-sm">
                🤝 Topluluk Ruhu
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {focusAreas.map((area, index) => (
              <FocusCard
                key={index}
                icon={area.icon}
                title={area.title}
                description={area.description}
                borderColorClass={area.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
