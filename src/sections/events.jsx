import { memo } from "react";
import { useEvents } from "../hooks/useEvents";
import { calcPos } from "../utils/calcpos";
import EventCard from "../components/eventscard";
import TimelineItem from "../components/timelineitem";
import EventsControls from "../components/eventsControl";

const MemoizedTimelineItem = memo(TimelineItem);

export default function Events() {
  const {
    activeFilter,
    visibleEvents,
    safeIdx,
    navigate,
    handleFilter,
    touchStartX,
  } = useEvents();

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
            onFilterChange={handleFilter}
            currentMonth={
              visibleEvents.length > 0 ? visibleEvents[safeIdx]?.month : ""
            }
            onNavigate={navigate}
          />
        </div>

        {visibleEvents.length > 0 ? (
          <>
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
              <div className="text-[14px] uppercase text-white/45 mb-6 flex justify-between font-medium tracking-widest">
                <span>Tüm Etkinlikler</span>
                <span className="text-[#f9ab00]">2026</span>
              </div>

              <ul className="border border-white/10 rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 overflow-hidden list-none p-0 m-0">
                {visibleEvents.map((ev) => (
                  <li
                    key={ev.id}
                    className="bg-[#0a0d14] flex m-0 p-0 items-stretch"
                  >
                    <div className="w-full flex">
                      <MemoizedTimelineItem ev={ev} />
                    </div>
                  </li>
                ))}

                {visibleEvents.length % 4 !== 0 &&
                  [...Array(4 - (visibleEvents.length % 4))].map((_, i) => (
                    <li
                      key={`empty-${i}`}
                      className="bg-[#0a0d14] hidden lg:block"
                    />
                  ))}
              </ul>
            </footer>
          </>
        ) : (
          <div className="py-32 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="text-[#f9ab00] text-2xl">!</span>
            </div>
            <p className="text-[#f8f6f1]/60 text-lg font-light tracking-wide">
              Şuan planlanan etkinlik yok
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
