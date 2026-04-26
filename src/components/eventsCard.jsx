import { FOCUS_CLASSES, CARD_POS } from "../constants/eventsData";
import { useNavigate, Link } from "react-router-dom";

export default function EventCard({ ev, posStr, onNavigate }) {
  const navigate = useNavigate();
  const fc = FOCUS_CLASSES[ev.focus] || FOCUS_CLASSES["all"];
  const posClass = CARD_POS[posStr] ?? CARD_POS["3"];

  const handleClick = (e) => {
    if (e.target.tagName === "BUTTON" || e.target.tagName === "A") return;
    const pos = parseInt(posStr, 10);
    if (pos !== 0) onNavigate(pos > 0 ? 1 : -1);
  };

  return (
    <div
      role="listitem"
      className={[
        "absolute rounded-[32px] overflow-hidden cursor-pointer bg-white/[0.03] border border-white/10 transition-all duration-[750ms] ease-[cubic-bezier(.16,1,.3,1)] [will-change:transform,opacity,filter] select-none backdrop-blur-[12px]",
        posClass,
        ev.past ? "brightness-95 shadow-none" : "shadow-2xl shadow-black/50",
      ].join(" ")}
      onClick={handleClick}
      aria-labelledby={`event-title-${ev.id}`}
    >
      <article className="relative group/card">
        {/* Görsel Alanı */}
        <div className="relative w-full h-[200px] overflow-hidden">
          <img
            src={ev.img}
            alt={`${ev.title} cover`}
            loading="lazy"
            className={`w-full h-full object-cover object-top block transition-transform duration-700 ${ev.past ? "" : "group-hover/card:scale-110"}`}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-transparent to-transparent opacity-90"
            aria-hidden="true"
          />

          {/* Badge: Geçmişse Buzlu Cam Efekti */}
          <span
            className={[
              "absolute top-4 left-4 text-[10px] font-bold tracking-[0.15em] uppercase py-1.5 px-3.5 rounded-full border",
              ev.past
                ? "bg-white/5 border-white/10 text-white/60 backdrop-blur-md"
                : `${fc.bg} ${fc.badgeText} border-transparent`,
            ].join(" ")}
          >
            {ev.focus}
          </span>
        </div>

        <div className="px-7 pt-6 pb-7">
          <header className="mb-4">
            <div
              className={`text-[11px] tracking-[0.2em] uppercase font-bold mb-2 ${ev.past ? "text-white/30" : fc.text}`}
            >
              {ev.date} · {ev.month}
            </div>
            <h4 className="font-['Google_Sans'] text-[22px] md:text-[24px] font-bold leading-tight text-white/90">
              {ev.title}
            </h4>
          </header>

          <p className="text-[13px] text-white/40 leading-relaxed line-clamp-2 mb-6 font-light">
            {ev.desc}
          </p>

          <div className="flex">
            <Link
              to={`/etkinlik/${ev.id}`}
              className={[
                "w-full flex items-center justify-center rounded-2xl py-4 px-4 text-[13px] font-bold tracking-wide transition-all duration-300",
                ev.past
                  ? "bg-white/[0.07] text-white/80 border border-white/10 hover:bg-white/[0.12] hover:text-white"
                  : `${fc.primaryBtn} hover:shadow-lg hover:shadow-black/20`,
              ].join(" ")}
              onClick={(e) => e.stopPropagation()}
            >
              {ev.past ? "Materyalleri İncele" : "Detaylar & Başvur"}
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
