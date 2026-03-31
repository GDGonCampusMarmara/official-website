import { useState, useEffect, useRef, useCallback, useMemo, memo } from "react";
import { EVENTS, FILTER_BUTTONS, FOCUS_CLASSES } from "../constants/eventsdata";
import { calcPos } from "../utils/calcpos";
import EventCard from "../components/eventscard";
import TimelineItem from "../components/timelineitem";

const MemoizedTimelineItem = memo(TimelineItem);

export default function Events() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentIdx, setCurrentIdx] = useState(2);
  const touchStartX = useRef(0);
  const isAnimRef = useRef(false);

  const visibleEvents = useMemo(() => {
    return activeFilter === "all"
      ? EVENTS
      : EVENTS.filter((e) => e.focus === activeFilter);
  }, [activeFilter]);

  const safeIdx = Math.min(currentIdx, Math.max(0, visibleEvents.length - 1));

  const navigate = useCallback(
    (dir) => {
      if (isAnimRef.current || visibleEvents.length <= 1) return;
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
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [navigate]);

  const handleFilter = (value) => {
    if (activeFilter === value) return;
    setActiveFilter(value);
    setCurrentIdx(0);
  };

  return (
    <section
      id="events"
      aria-labelledby="events-title"
      className="bg-[#0a0d14] text-[#f8f6f1] overflow-x-hidden font-sans"
    >
      <div id="calendar-content" className="relative bg-[#0a0d14] py-24 pb-32">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-[1200px] mx-auto px-8 pb-12 flex flex-col items-center justify-center text-center">
          <header className="mb-12">
            <h2
              id="events-title"
              className="text-4xl md:text-5xl font-bold tracking-tight text-[#f8f6f1] mb-4"
            >
              Etkinlik{" "}
              <em className="italic text-[#f9ab00] not-italic">Takvimi</em>
            </h2>
            <p className="text-[#f8f6f1]/40 text-sm md:text-base max-w-[500px] mx-auto leading-relaxed">
              Gelecek etkinlikleri keşfedin ve topluluğumuza katılın.
            </p>
          </header>

          <nav
            className="flex flex-wrap gap-2 justify-center mb-10"
            aria-label="Etkinlik Filtreleri"
          >
            {FILTER_BUTTONS.map((btn) => {
              const fc = FOCUS_CLASSES[btn.focusKey];
              const isActive = activeFilter === btn.value;
              return (
                <button
                  key={btn.value}
                  onClick={() => handleFilter(btn.value)}
                  aria-pressed={isActive}
                  className={`
                    rounded-full py-2 px-[18px] text-[13px] cursor-pointer tracking-wide transition-all duration-250 border
                    ${
                      isActive
                        ? `${fc.activeBtn} font-medium shadow-lg shadow-[#f9ab00]/10`
                        : `bg-transparent border-white/10 text-[#f8f6f1]/45 ${fc.hoverBtn}`
                    }
                  `}
                >
                  {btn.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-4 select-none">
            <button
              onClick={() => navigate(-1)}
              aria-label="Önceki etkinlik"
              className="w-10 h-10 rounded-full flex items-center justify-center text-lg cursor-pointer transition-all duration-200 bg-white/5 border border-white/10 text-[#f8f6f1] hover:bg-[#f9ab00]/20 hover:border-[#f9ab00]"
            >
              ←
            </button>
            <span className="font-sans text-2xl md:text-3xl tracking-tight min-w-[200px] text-center text-[#f8f6f1] tabular-nums">
              {visibleEvents[safeIdx]?.month || "---"}
            </span>
            <button
              onClick={() => navigate(1)}
              aria-label="Sonraki etkinlik"
              className="w-10 h-10 rounded-full flex items-center justify-center text-lg cursor-pointer transition-all duration-200 bg-white/5 border border-white/10 text-[#f8f6f1] hover:bg-[#f9ab00]/20 hover:border-[#f9ab00]"
            >
              →
            </button>
          </div>
        </div>

        <div
          className="relative w-full h-[560px] flex items-center justify-center [perspective:1200px] touch-pan-y"
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(dx) > 50) navigate(dx < 0 ? 1 : -1);
          }}
        >
          <div className="relative w-full max-w-[1200px] h-full flex items-center justify-center">
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

        <footer className="max-w-[1200px] mx-auto mt-20 px-8">
          <div className="font-sans text-[14px] tracking-[.14em] uppercase text-[#f8f6f1]/45 mb-6 flex justify-between items-center">
            <span>Tüm Etkinlikler</span>
            <span className="text-[#f9ab00]">2026</span>
          </div>
          <ul className="border border-white/10 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-px bg-white/5">
            {visibleEvents.map((ev) => (
              <li key={ev.id} className="list-none bg-[#0a0d14]">
                <MemoizedTimelineItem ev={ev} />
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </section>
  );
}
