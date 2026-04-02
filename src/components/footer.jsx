import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Icon from "./common/icon";
import SponsorCard from "./sponsorCard";

import "swiper/css";
import "swiper/css/navigation";

const footer = () => {
  const sponsorLogos = Array.from({ length: 17 }, (_, i) => ({
    id: i + 1,
    path: `/src/assets/logos/logo-${i + 1}.webp`,
  }));

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d111a] border-t border-white/10 pt-24 pb-12 font-['Google_Sans']">
      <div className="container mx-auto px-6">
        <div className="mb-32 relative group">
          <div className="text-center mb-16 relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em]">
              Sponsorlarımız & Partnerlerimiz
            </div>
          </div>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={2}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="px-0 md:px-12"
          >
            {sponsorLogos.map((logo) => (
              <SwiperSlide
                key={logo.id}
                className="flex items-center justify-center py-6"
              >
                <SponsorCard logoPath={logo.path} id={logo.id} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 shadow-xl backdrop-blur-md">
            <Icon name="ChevronLeft" size={24} />
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 shadow-xl backdrop-blur-md">
            <Icon name="ChevronRight" size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 border-t border-white/5 pt-20">
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/30">
                <Icon name="Code" className="text-white" size={22} />
              </div>
              <span className="text-white font-black text-xl tracking-tighter">
                GDG <span className="text-blue-500 font-medium">Marmara</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Marmara Üniversitesi'nin teknoloji topluluğu olarak, Google
              teknolojileriyle geleceği inşa ediyoruz.
            </p>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h5 className="text-white font-bold text-xs uppercase tracking-widest">
                Keşfet
              </h5>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <a
                    href="#about"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Hakkımızda
                  </a>
                </li>
                <li>
                  <a
                    href="#events"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Etkinlikler
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Ekibimiz
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-white font-bold text-xs uppercase tracking-widest">
                Topluluk
              </h5>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <a href="/aramiza-katil" className="font-bold text-blue-400">
                    Aramıza Katıl
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="hover:text-blue-500 transition-colors"
                  >
                    S.S.S
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 font-bold uppercase tracking-widest">
          <p>© {currentYear} GDG on Campus Marmara University.</p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
