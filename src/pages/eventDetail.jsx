import React, { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { EVENTS, FOCUS_CLASSES } from "../constants/eventsData";
import Icon from "../components/common/icon";

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showMaterials, setShowMaterials] = useState(false);

  const ev = useMemo(() => {
    const found = EVENTS.find((item) => item.id === parseInt(id));
    if (!found) return null;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return {
      ...found,
      past: new Date(found.timestamp) < today,
    };
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    if (!ev) navigate("/");
  }, [ev, id, navigate]);

  if (!ev) return null;
  const fc = FOCUS_CLASSES[ev.focus] || FOCUS_CLASSES["all"];

  return (
    <div
      className="bg-[#0a0d14] font-['Google_Sans'] text-white min-h-screen"
    >
      <div className="flex flex-col md:flex-row h-screen">
        <div className="w-full md:w-1/2 flex flex-col p-8 md:p-16 lg:p-24 justify-center relative bg-[#0a0d14]">
          <button
            onClick={() => navigate("/")}
            className="absolute top-8 left-8 z-20 flex items-center justify-center w-12 h-12
             bg-white/[0.03] hover:bg-white/[0.08]
             border border-white/10 hover:border-white/20
             backdrop-blur-md rounded-2xl
             text-white/40 hover:text-white
             transition-all duration-300 shadow-xl group"
            title="Anasayfaya Dön"
          >
            <Icon
              name="ChevronLeft"
              size={24}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
          </button>

          <div className="max-w-xl space-y-8 mt-16 md:mt-0">
            <header className="space-y-6">
              <span
                className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] ${ev.past ? "bg-white/10 text-white/40" : `${fc.bg} ${fc.text}`}`}
              >
                {ev.focus} {ev.past && "• TAMAMLANDI"}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                {ev.title}
              </h1>
            </header>

            <p className="text-white/60 font-light text-lg leading-relaxed line-clamp-4">
              {ev.desc}
            </p>

            <div className="grid grid-cols-2 gap-4 py-8 border-y border-white/5 text-white">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">
                  Tarih
                </span>
                <span className="font-medium">
                  {ev.date} · {ev.month}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">
                  Lokasyon
                </span>
                <span className="font-medium">{ev.location}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col items-start gap-4">
              {ev.past ? (
                <>
                  <button
                    onClick={() => {
                      if (!ev.materialLink || ev.materialLink === "#") return;
                      setShowMaterials(true);
                      setTimeout(() => {
                        document
                          .getElementById("materials")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }}
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold text-sm transition-all shadow-xl ${
                      ev.materialLink && ev.materialLink !== "#"
                        ? "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white"
                        : "bg-white/5 text-white/20 cursor-not-allowed opacity-50"
                    }`}
                  >
                    <Icon name="ChevronDown" size={18} />
                    {ev.materialLink && ev.materialLink !== "#"
                      ? "Materyalleri Gör"
                      : "Materyal Henüz Yok"}
                  </button>

                  {ev.videoLink && (
                    <a
                      href={ev.videoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold text-sm transition-all shadow-xl
               bg-white/[0.03] text-white/80 border border-white/10
               hover:bg-red-500/[0.08] hover:text-red-500 hover:border-red-500/30"
                    >
                      <Icon name="Youtube" size={18} />
                      Etkinlik Kaydını İzle
                    </a>
                  )}
                </>
              ) : (
                <button
                  onClick={() => {
                    if (!ev.formLink || ev.formLink === "#") {
                      navigate("/basvuru-kapali");
                      return;
                    }
                    window.open(ev.formLink, "_blank", "noreferrer");
                  }}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 rounded-2xl font-bold text-sm transition-all hover:scale-[1.02] shadow-2xl ${fc.primaryBtn}`}
                >
                  <Icon name="UserPlus" size={18} />
                  Başvuru Yap
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-[400px] md:h-auto relative overflow-hidden bg-[#0d111a] hidden md:block">
          <img
            src={ev.img}
            alt={ev.title}
            className="w-full h-full object-cover object-center block opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0d14] via-transparent to-transparent hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-transparent to-transparent md:hidden" />
        </div>
      </div>

      {ev.past && ev.materialLink && showMaterials && (
        <div
          id="materials"
          className="bg-[#080a0f] py-24 px-8 border-t border-white/5 relative"
        >
          <div className="max-w-7xl mx-auto relative group">
            <a
              href={ev.materialLink}
              target="_blank"
              rel="noreferrer"
              title="Tam Ekran Aç"
              className="absolute top-6 right-6 z-20 p-3 rounded-xl bg-black/50 text-white/40 border border-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all hover:bg-black/80 hover:text-white hover:scale-105"
            >
              <Icon name="Maximize" size={18} />
            </a>

            <div className="w-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-black/40 shadow-2xl relative z-10">
              <iframe
                src={ev.materialLink}
                className="w-full h-[850px] border-none"
                title="Event Materials"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetail;
