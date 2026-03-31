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
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center bg-[#0a0d14]">
        <div className="absolute w-[700px] h-[700px] rounded-full pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] z-0 bg-[radial-gradient(circle,rgba(249,171,0,0.07)_0%,transparent_70%)]" />

        <div
          className="absolute inset-0 pointer-events-none z-[1] opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-[2] p-8">
          <div className="inline-flex items-center gap-2 rounded-full py-[6px] px-[18px] text-[12px] tracking-[.14em] uppercase text-[#f8f6f1]/45 border border-white/10 backdrop-blur-[12px] mb-10">
            <span className="w-[6px] h-[6px] rounded-full inline-block bg-[#f9ab00] animate-[ev-pulse_2s_infinite]" />
            Lorem ipsum dolor sit amet consectetur
          </div>

          <h1 className="font-['Google_Sans',sans-serif] text-[clamp(80px,16vw,220px)] leading-[.88] tracking-[-0.01em] text-[#f8f6f1]">
            Events
            <br />
            <em className="font-['Google_Sans',serif] italic text-[#f9ab00] text-[.75em]">
              Calendar
            </em>
          </h1>

          <p className="mt-8 text-[16px] font-light tracking-[.04em] max-w-[420px] mx-auto text-[#f8f6f1]/45">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <button
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2 text-[11px] tracking-[.12em] uppercase text-[#f8f6f1]/45 border-0 bg-transparent cursor-pointer animate-[ev-fadein_2s_1s_both]"
          onClick={scrollToCalendar}
        >
          <div className="w-px h-[50px] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.3),transparent)] animate-[ev-scroll-down_2s_1s_infinite] origin-top" />
          Keşfet
        </button>
      </div>

      <div id="calendar-content" className="relative bg-[#0a0d14] py-24 pb-32">
        <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.10),transparent)]" />

        <div className="max-w-[1200px] mx-auto px-8 pb-12 flex flex-wrap items-center gap-5 justify-center flex-col">
          <div className="flex flex-wrap gap-2 justify-center">
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
