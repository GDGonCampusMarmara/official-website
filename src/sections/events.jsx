import { useState, useEffect, useRef, useCallback } from "react";
import { EVENTS, FILTER_BUTTONS, FOCUS_CLASSES } from "../constants/eventsdata";
import { calcPos } from "../utils/calcpos";
import EventCard from "../components/eventscard";
import TimelineItem from "../components/timelineitem";

export default function Events() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentIdx, setCurrentIdx] = useState(2);
  const touchStartX = useRef(0);
  const isAnimRef = useRef(false);

  const visibleEvents =
    activeFilter === "all"
      ? EVENTS
      : EVENTS.filter((e) => e.focus === activeFilter);
  const timelineEvents =
    activeFilter === "all"
      ? EVENTS
      : EVENTS.filter((e) => e.focus === activeFilter);
  const safeIdx = Math.min(currentIdx, Math.max(0, visibleEvents.length - 1));

  const navigate = useCallback(
    (dir) => {
      if (isAnimRef.current) return;
      isAnimRef.current = true;
      setCurrentIdx(
        (prev) => (prev + dir + visibleEvents.length) % visibleEvents.length,
      );
      setTimeout(() => {
        isAnimRef.current = false;
      }, 750);
    },
    [visibleEvents.length],
  );

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [navigate]);

  const handleFilter = (value) => {
    setActiveFilter(value);
    setCurrentIdx(0);
  };
  const scrollToCalendar = () =>
    document
      .getElementById("calendar-content")
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="events"
      className="bg-[#0a0d14] text-[#f8f6f1] overflow-x-hidden font-['Google_Sans',sans-serif]"
    >
      <div id="calendar-content" className="relative bg-[#0a0d14] py-24 pb-32">
        <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.10),transparent)]" />

        <div className="max-w-[1200px] mx-auto px-8 pb-12 flex flex-col items-center justify-center text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#f8f6f1] mb-4">
              Etkinlik{" "}
              <em className="font-['Google_Sans',serif] italic text-[#f9ab00] not-italic">
                Takvimi
              </em>
            </h2>
            <p className="text-[#f8f6f1]/40 text-sm md:text-base max-w-[500px] mx-auto leading-relaxed">
              Gelecek etkinlikleri keşfedin ve topluluğumuza katılın.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {FILTER_BUTTONS.map((btn) => {
              const fc = FOCUS_CLASSES[btn.focusKey];
              const isActive = activeFilter === btn.value;
              return (
                <button
                  key={btn.value}
                  onClick={() => handleFilter(btn.value)}
                  className={[
                    'rounded-full py-2 px-[18px] text-[13px] cursor-pointer tracking-[.02em] transition-all duration-[250ms] font-["Google_Sans",sans-serif] border',
                    isActive
                      ? `${fc.activeBtn} font-medium`
                      : `bg-transparent border-white/10 text-[#f8f6f1]/45 ${fc.hoverBtn}`,
                  ].join(" ")}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-[18px] cursor-pointer transition-all duration-200 bg-white/[4%] border border-white/10 text-[#f8f6f1] hover:bg-[rgba(249,171,0,0.15)] hover:border-[#f9ab00]"
            >
              ←
            </button>
            <div className="font-['Google_Sans',sans-serif] text-[28px] tracking-[.04em] min-w-[180px] text-center text-[#f8f6f1]">
              {visibleEvents[safeIdx]?.month || ""}
            </div>
            <button
              onClick={() => navigate(1)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-[18px] cursor-pointer transition-all duration-200 bg-white/[4%] border border-white/10 text-[#f8f6f1] hover:bg-[rgba(249,171,0,0.15)] hover:border-[#f9ab00]"
            >
              →
            </button>
          </div>
        </div>

        <div
          className="relative w-full h-[560px] flex items-center justify-center [perspective:1200px]"
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(dx) > 50) navigate(dx < 0 ? 1 : -1);
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {visibleEvents.map((ev, i) => (
              <EventCard
                key={ev.id}
                ev={ev}
                posStr={calcPos(i, safeIdx, visibleEvents.length)}
                onNavigate={navigate}
              />
            ))}
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto mt-20 px-8">
          <div className="font-['Google_Sans',sans-serif] text-[14px] tracking-[.14em] uppercase text-[#f8f6f1]/45 mb-6">
            Tüm Etkinlikler — <span>2026</span>
          </div>
          <div className="border border-white/10 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-px">
            {visibleEvents.map((ev) => (
              <TimelineItem key={ev.id} ev={ev} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
