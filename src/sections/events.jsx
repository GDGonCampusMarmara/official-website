import { useState, useEffect, useRef, useCallback, useMemo, memo } from "react";
import { EVENTS } from "../constants/eventsdata";
import { calcPos } from "../utils/calcpos";
import EventCard from "../components/eventscard";
import TimelineItem from "../components/timelineitem";
import EventsControls from "../components/eventsControl";

const MemoizedTimelineItem = memo(TimelineItem);

export default function Events() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentIdx, setCurrentIdx] = useState(2);
  const touchStartX = useRef(0);
  const isAnimRef = useRef(false);

  const visibleEvents = useMemo(
    () =>
      activeFilter === "all"
        ? EVENTS
        : EVENTS.filter((e) => e.focus === activeFilter),
    [activeFilter],
  );

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

  return (
    <section
      id="events"
      className="bg-[#0a0d14] text-[#f8f6f1] overflow-x-hidden font-sans"
    >
      <div id="calendar-content" className="relative bg-[#0a0d14] py-24 pb-32">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col items-center justify-center text-center">
          <header className="mb-12 px-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#f8f6f1] mb-4">
              Etkinlik{" "}
              <em className="italic text-[#f9ab00] not-italic">Takvimi</em>
            </h2>
            <p className="text-[#f8f6f1]/40 text-sm md:text-base max-w-[500px] mx-auto leading-relaxed font-light">
              Gelecek etkinlikleri keşfedin ve topluluğumuza katılın.
            </p>
          </header>

          <EventsControls
            activeFilter={activeFilter}
            onFilterChange={(val) => {
              setActiveFilter(val);
              setCurrentIdx(0);
            }}
            currentMonth={visibleEvents[safeIdx]?.month}
            onNavigate={navigate}
          />
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
          <div className="text-[14px] tracking-[.14em] uppercase text-white/45 mb-6 flex justify-between">
            <span>Tüm Etkinlikler</span>
            <span className="text-[#f9ab00]">2026</span>
          </div>
          <ul className="border border-white/10 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-px bg-white/5">
            {visibleEvents.map((ev) => (
              <li key={ev.id} className="bg-[#0a0d14]">
                <MemoizedTimelineItem ev={ev} />
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </section>
  );
}
