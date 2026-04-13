import { focusAreas } from "../constants/aboutData";
import FocusCard from "../components/focusCard";
import Icon from "../components/common/icon";

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="min-h-screen w-full pt-20 bg-[#0a0d14] relative overflow-hidden"
    >
      <div
        className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-[120px]"
        aria-hidden="true"
      ></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <article className="flex flex-col gap-6 text-left">
            <h2
              id="about-heading"
              className="text-blue-500 font-bold tracking-widest uppercase text-sm"
            >
              Hakkımızda
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Geleceğin Teknolojilerini <br />
              <span className="text-gray-400 font-medium">
                Birlikte İnşa Ediyoruz.
              </span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              <strong className="text-gray-300 font-semibold">
                GDG on Campus Marmara
              </strong>
              , teknolojiye meraklı öğrencileri bir araya getiren, paylaşımı ve
              öğrenmeyi temel alan bir topluluktur. <strong>Google</strong>{" "}
              ekosistemindeki en güncel gelişmeleri takip ederken, uygulamalı
              atölyelerle kendimizi geliştiriyoruz.
            </p>
            <div className="flex gap-4 mt-4" aria-label="Core values">
              <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-white text-sm flex items-center gap-2">
                <Icon
                  name="Zap"
                  size={18}
                  className="text-yellow-400"
                  aria-hidden="true"
                />
                <span>İnovasyon Odaklı</span>
              </div>
              <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-white text-sm flex items-center gap-2">
                <Icon
                  name="Users"
                  size={18}
                  className="text-blue-400"
                  aria-hidden="true"
                />
                <span>Topluluk Ruhu</span>
              </div>
            </div>
          </article>
          <div
            className="grid sm:grid-cols-2 gap-6"
            role="region"
            aria-label="Our Focus Areas"
          >
            {focusAreas.map((area, index) => (
              <FocusCard
                key={index}
                icon={
                  <Icon
                    name={area.icon}
                    size={56}
                    className={
                      area.color === "border-yellow-600"
                        ? "text-yellow-400"
                        : area.color.replace("border-", "text-")
                    }
                    aria-hidden="true"
                  />
                }
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
